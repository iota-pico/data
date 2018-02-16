"use strict";
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
