Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling trits.
 */
class Trits {
    /* @internal */
    constructor(trits) {
        this._trits = trits;
    }
    /**
     * Create instance of trits from Int8Array array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromArray(value) {
        if (!objectHelper_1.ObjectHelper.isType(value, Int8Array)) {
            throw new dataError_1.DataError("The value does not contain valid trits");
        }
        return new Trits(value);
    }
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumberArray(value) {
        if (!arrayHelper_1.ArrayHelper.isTyped(value, Number)) {
            throw new dataError_1.DataError("The value does not contain valid trits");
        }
        return new Trits(new Int8Array(value));
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromTrytes(value) {
        if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The value should be a valid Trytes object");
        }
        const trytesString = value.toString();
        const trits = new Int8Array(trytesString.length * 3);
        for (let i = 0; i < trytesString.length; i++) {
            const idx = trytes_1.Trytes.ALPHABET.indexOf(trytesString.charAt(i));
            trits[i * 3] = Trits.TRYTES_TRITS[idx][0];
            trits[i * 3 + 1] = Trits.TRYTES_TRITS[idx][1];
            trits[i * 3 + 2] = Trits.TRYTES_TRITS[idx][2];
        }
        return new Trits(trits);
    }
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumber(value) {
        if (!numberHelper_1.NumberHelper.isInteger(value)) {
            throw new dataError_1.DataError("The value is not an integer");
        }
        const trits = [];
        let absoluteValue = value < 0 ? -value : value;
        while (absoluteValue > 0) {
            let remainder = absoluteValue % 3;
            absoluteValue = Math.floor(absoluteValue / 3);
            if (remainder > 1) {
                remainder = -1;
                absoluteValue++;
            }
            trits[trits.length] = remainder;
        }
        if (value < 0) {
            for (let i = 0; i < trits.length; i++) {
                trits[i] = -trits[i];
            }
        }
        return new Trits(new Int8Array(trits));
    }
    /**
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @returns New trit which is the addition of the a + b.
     */
    static add(first, second) {
        if (!objectHelper_1.ObjectHelper.isType(first, Trits)) {
            throw new dataError_1.DataError("The first should be a valid Trits object");
        }
        if (!objectHelper_1.ObjectHelper.isType(second, Trits)) {
            throw new dataError_1.DataError("The seconds should be a valid Trits object");
        }
        const out = new Int8Array(Math.max(first._trits.length, second._trits.length));
        let carry = 0;
        let iA;
        let iB;
        for (let i = 0; i < out.length; i++) {
            iA = i < first._trits.length ? first._trits[i] : 0;
            iB = i < second._trits.length ? second._trits[i] : 0;
            const fA = Trits.fullAdd(iA, iB, carry);
            out[i] = fA[0];
            carry = fA[1];
        }
        return Trits.fromArray(out);
    }
    /* @internal */
    static fullAdd(a, b, c) {
        const sA = Trits.sum(a, b);
        const cA = Trits.cons(a, b);
        const cB = Trits.cons(sA, c);
        const cOut = Trits.any(cA, cB);
        const sOUt = Trits.sum(sA, c);
        return new Int8Array([sOUt, cOut]);
    }
    /* @internal */
    static sum(a, b) {
        const s = a + b;
        switch (s) {
            case 2: return -1;
            case -2: return 1;
            default: return s;
        }
    }
    /* @internal */
    static cons(a, b) {
        if (a === b) {
            return a;
        }
        return 0;
    }
    /* @internal */
    static any(a, b) {
        const s = a + b;
        if (s > 0) {
            return 1;
        }
        else if (s < 0) {
            return -1;
        }
        return 0;
    }
    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    toArray() {
        return this._trits;
    }
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */
    toNumberArray() {
        return Array.from(this._trits);
    }
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */
    toTrytes() {
        let trytes = "";
        for (let i = 0; i < this._trits.length; i += 3) {
            // Iterate over all possible tryte values to find correct trit representation
            for (let j = 0; j < trytes_1.Trytes.ALPHABET.length; j++) {
                if (Trits.TRYTES_TRITS[j][0] === this._trits[i] &&
                    Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] &&
                    Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
                    trytes += trytes_1.Trytes.ALPHABET.charAt(j);
                    break;
                }
            }
        }
        return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */
    toNumber() {
        let returnValue = 0;
        for (let i = this._trits.length - 1; i >= 0; i--) {
            returnValue = returnValue * 3 + this._trits[i];
        }
        return returnValue;
    }
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */
    length() {
        return this._trits.length;
    }
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */
    sub(start, length) {
        if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
            throw new dataError_1.DataError("The start must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || (start + length) > this._trits.length) {
            throw new dataError_1.DataError(`The start + length must <= ${this._trits.length}`);
        }
        return Trits.fromArray(this._trits.slice(start, start + length));
    }
}
/* @internal */
Trits.TRYTES_TRITS = [
    new Int8Array([0, 0, 0]),
    new Int8Array([1, 0, 0]),
    new Int8Array([-1, 1, 0]),
    new Int8Array([0, 1, 0]),
    new Int8Array([1, 1, 0]),
    new Int8Array([-1, -1, 1]),
    new Int8Array([0, -1, 1]),
    new Int8Array([1, -1, 1]),
    new Int8Array([-1, 0, 1]),
    new Int8Array([0, 0, 1]),
    new Int8Array([1, 0, 1]),
    new Int8Array([-1, 1, 1]),
    new Int8Array([0, 1, 1]),
    new Int8Array([1, 1, 1]),
    new Int8Array([-1, -1, -1]),
    new Int8Array([0, -1, -1]),
    new Int8Array([1, -1, -1]),
    new Int8Array([-1, 0, -1]),
    new Int8Array([0, 0, -1]),
    new Int8Array([1, 0, -1]),
    new Int8Array([-1, 1, -1]),
    new Int8Array([0, 1, -1]),
    new Int8Array([1, 1, -1]),
    new Int8Array([-1, -1, 0]),
    new Int8Array([0, -1, 0]),
    new Int8Array([1, -1, 0]),
    new Int8Array([-1, 0, 0])
];
exports.Trits = Trits;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cml0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQXVFO0FBQ3ZFLDRFQUF5RTtBQUN6RSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNILE1BQWEsS0FBSztJQW1DZCxlQUFlO0lBQ2YsWUFBb0IsS0FBZ0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQWdCO1FBQ3BDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUNqRTtRQUNELE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWU7UUFDekMsSUFBSSxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQyxNQUFNLElBQUkscUJBQVMsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDckMsTUFBTSxJQUFJLHFCQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUNwRTtRQUNELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVB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QUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVCLENBQUM7QUE5Qk4sc0JBMFFDIn0=