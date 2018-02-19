Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * Helper class to convert between trits and words.
 * Converted from here https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/converter/words.js
 */
class TritsWordConverter {
    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    static tritsToWords(trits) {
        if (trits === undefined || trits === null) {
            throw new coreError_1.CoreError("Trits can not be null or undefined");
        }
        if (trits.length !== TritsWordConverter.TRITS_LENGTH) {
            throw new coreError_1.CoreError(`Invalid trits length ${trits.length} it should be ${TritsWordConverter.TRITS_LENGTH}`);
        }
        let base = new Uint32Array(TritsWordConverter.INT_LENGTH);
        if (trits.slice(0, 242).every((a) => a === -1)) {
            base = TritsWordConverter.HALF_3.slice();
            TritsWordConverter.bigIntNot(base);
            TritsWordConverter.bigIntAddSmall(base, 1);
        }
        else {
            let size = 1;
            for (let i = trits.length - 1; i-- > 0;) {
                const trit = trits[i] + 1;
                //multiply by radix
                {
                    const sz = size;
                    let carry = 0;
                    for (let j = 0; j < sz; j++) {
                        const v = base[j] * TritsWordConverter.RADIX + carry;
                        carry = TritsWordConverter.rightShift(v, 32);
                        base[j] = (v & 0xFFFFFFFF) >>> 0;
                    }
                    if (carry > 0) {
                        base[sz] = carry;
                        size += 1;
                    }
                }
                //addition
                {
                    const sz = TritsWordConverter.bigIntAddSmall(base, trit);
                    if (sz > size) {
                        size = sz;
                    }
                }
            }
            if (!TritsWordConverter.isNull(base)) {
                if (TritsWordConverter.bigIntCompare(TritsWordConverter.HALF_3, base) <= 0) {
                    // base >= HALF_3
                    // just do base - HALF_3
                    TritsWordConverter.bigIntSubtract(base, TritsWordConverter.HALF_3);
                }
                else {
                    // base < HALF_3
                    // so we need to transform it to a two's complement representation
                    // of (base - HALF_3).
                    // as we don't have a wrapping (-), we need to use some bit magic
                    const tmp = TritsWordConverter.HALF_3.slice();
                    TritsWordConverter.bigIntSubtract(tmp, base);
                    TritsWordConverter.bigIntNot(tmp);
                    TritsWordConverter.bigIntAddSmall(tmp, 1);
                    base = tmp;
                }
            }
        }
        base.reverse();
        for (let i = 0; i < base.length; i++) {
            base[i] = TritsWordConverter.swap32(base[i]);
        }
        return base;
    }
    /**
     * Converts the given word array to trits.
     * @param words The words to convert to trits
     * @returns Trits array.
     */
    static wordsToTrits(words) {
        if (words === undefined || words === null) {
            throw new coreError_1.CoreError("Words can not be null or undefined");
        }
        if (words.length !== TritsWordConverter.INT_LENGTH) {
            throw new coreError_1.CoreError(`Invalid words length ${words.length} it should be ${TritsWordConverter.INT_LENGTH}`);
        }
        const trits = new Int8Array(243);
        let base = new Uint32Array(words);
        base.reverse();
        let flipTrits = false;
        if (base[TritsWordConverter.INT_LENGTH - 1] >> 31 === 0) {
            // positive two's complement number.
            // add HALF_3 to move it to the right place.
            TritsWordConverter.bigIntAdd(base, TritsWordConverter.HALF_3);
        }
        else {
            // negative number.
            TritsWordConverter.bigIntNot(base);
            if (TritsWordConverter.bigIntCompare(base, TritsWordConverter.HALF_3) > 0) {
                TritsWordConverter.bigIntSubtract(base, TritsWordConverter.HALF_3);
                flipTrits = true;
            }
            else {
                /// bigint is between (unsigned) HALF_3 and (2**384 - 3**242/2).
                TritsWordConverter.bigIntAddSmall(base, 1);
                const tmp = TritsWordConverter.HALF_3.slice();
                TritsWordConverter.bigIntSubtract(tmp, base);
                base = tmp;
            }
        }
        let rem = 0;
        for (let i = 0; i < 242; i++) {
            rem = 0;
            for (let j = TritsWordConverter.INT_LENGTH - 1; j >= 0; j--) {
                const lhs = (rem !== 0 ? rem * 0xFFFFFFFF + rem : 0) + base[j];
                const rhs = TritsWordConverter.RADIX;
                const q = (lhs / rhs) >>> 0;
                const r = (lhs % rhs) >>> 0;
                base[j] = q;
                rem = r;
            }
            trits[i] = rem - 1;
        }
        if (flipTrits) {
            for (let i = 0; i < trits.length; i++) {
                trits[i] = -trits[i];
            }
        }
        return Array.from(trits);
    }
    /**
     * Negates the (unsigned) input array.
     * @internal
     */
    static bigIntNot(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = (~arr[i]) >>> 0;
        }
    }
    /**
     * TritsWordConverter.rightShift that works with up to 53
     * JS's shift operators only work on 32 bit integers
     * ours is up to 33 or 34 bits though, so
     * we need to implement shifting manually
     * @internal
     */
    static rightShift(number, shift) {
        return (number / Math.pow(2, shift)) >>> 0;
    }
    /**
     * Swaps endianness.
     * @internal
     */
    static swap32(val) {
        return ((val & 0xFF) << 24) |
            ((val & 0xFF00) << 8) |
            ((val >> 8) & 0xFF00) |
            ((val >> 24) & 0xFF);
    }
    /**
     * Add with carry.
     * @internal
     */
    static fullAdd(lh, rh, carry) {
        let v = lh + rh;
        let l = (TritsWordConverter.rightShift(v, 32)) & 0xFFFFFFFF;
        let r = (v & 0xFFFFFFFF) >>> 0;
        const carry1 = l !== 0;
        if (carry) {
            v = r + 1;
        }
        l = (TritsWordConverter.rightShift(v, 32)) & 0xFFFFFFFF;
        r = (v & 0xFFFFFFFF) >>> 0;
        const carry2 = l !== 0;
        return [r, carry1 || carry2];
    }
    /**
     * Subtracts rh from base.
     * @internal
     */
    static bigIntSubtract(base, rh) {
        let noborrow = true;
        for (let i = 0; i < base.length; i++) {
            const vc = TritsWordConverter.fullAdd(base[i], (~rh[i] >>> 0), noborrow);
            base[i] = vc[0];
            noborrow = vc[1];
        }
        if (!noborrow) {
            throw new coreError_1.CoreError("noborrow");
        }
    }
    /**
     * Compares two (unsigned) big integers.
     * @internal
     */
    static bigIntCompare(lh, rh) {
        for (let i = lh.length; i-- > 0;) {
            const a = lh[i] >>> 0;
            const b = rh[i] >>> 0;
            if (a < b) {
                return -1;
            }
            else if (a > b) {
                return 1;
            }
        }
        return 0;
    }
    /**
     * Adds rh to base in place.
     * @internal
     */
    static bigIntAdd(base, rh) {
        let carry = false;
        for (let i = 0; i < base.length; i++) {
            const vc = TritsWordConverter.fullAdd(base[i], rh[i], carry);
            base[i] = vc[0];
            carry = vc[1];
        }
    }
    /**
     * Adds a small (i.e. <32bit) number to base.
     * @internal
     */
    static bigIntAddSmall(base, other) {
        const vc = TritsWordConverter.fullAdd(base[0], other, false);
        base[0] = vc[0];
        let carry = vc[1];
        let i = 1;
        while (carry && i < base.length) {
            const vc2 = TritsWordConverter.fullAdd(base[i], 0, carry);
            base[i] = vc2[0];
            carry = vc2[1];
            i += 1;
        }
        return i;
    }
    /**
     * Is the big int null.
     * @internal
     */
    static isNull(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                return false;
            }
        }
        return true;
    }
}
/* @internal */
TritsWordConverter.INT_LENGTH = 12;
/* @internal */
TritsWordConverter.TRITS_LENGTH = 243;
/* @internal */
TritsWordConverter.RADIX = 3;
/// hex representation of (3^242)/2
/* @internal */
TritsWordConverter.HALF_3 = new Uint32Array([
    0xA5CE8964,
    0x9F007669,
    0x1484504F,
    0x3ADE00D9,
    0x0C24486E,
    0x50979D57,
    0x79A4C702,
    0x48BBAE36,
    0xA9F6808B,
    0xAA06A805,
    0xA87FABDF,
    0x5E69EBEF
]);
exports.TritsWordConverter = TritsWordConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdHNXb3JkQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvdHJpdHNXb3JkQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFFakU7OztHQUdHO0FBQ0g7SUF3Qkk7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBZTtRQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRCxNQUFNLElBQUkscUJBQVMsQ0FBQyx3QkFBd0IsS0FBSyxDQUFDLE1BQU0saUJBQWlCLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDaEgsQ0FBQztRQUVELElBQUksSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTFELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0os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