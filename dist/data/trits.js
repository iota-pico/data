"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
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
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromArray(value) {
        if (value === null || value === undefined) {
            throw new coreError_1.CoreError("The supplied value does not contain valid trits");
        }
        return new Trits(value);
    }
    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromTrytes(value) {
        if (value === null || value === undefined) {
            throw new coreError_1.CoreError("The supplied value does not contain valid trytes");
        }
        const trits = [];
        const trytesString = value.toString();
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
            throw new coreError_1.CoreError("The supplied value is not an integer");
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
        return new Trits(trits);
    }
    /**
     * Add two trits together.
     * @param a The first trit.
     * @param b The second trit.
     * @return New trit which is the addition of the a + b.
     */
    static add(a, b) {
        const out = new Array(Math.max(a._trits.length, b._trits.length));
        let carry = 0;
        let iA;
        let iB;
        for (let i = 0; i < out.length; i++) {
            iA = i < a._trits.length ? a._trits[i] : 0;
            iB = i < b._trits.length ? b._trits[i] : 0;
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
        return [sOUt, cOut];
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
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    fromArray(value) {
        if (value === null || value === undefined) {
            throw new coreError_1.CoreError("The supplied value does not contain valid trits");
        }
        this._trits = value;
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
        return trytes_1.Trytes.create(trytes);
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
        return Trits.fromArray(this._trits.slice(start, start + length));
    }
}
/* @internal */
Trits.TRYTES_TRITS = [
    [0, 0, 0],
    [1, 0, 0],
    [-1, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
    [-1, -1, 1],
    [0, -1, 1],
    [1, -1, 1],
    [-1, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [-1, 1, 1],
    [0, 1, 1],
    [1, 1, 1],
    [-1, -1, -1],
    [0, -1, -1],
    [1, -1, -1],
    [-1, 0, -1],
    [0, 0, -1],
    [1, 0, -1],
    [-1, 1, -1],
    [0, 1, -1],
    [1, 1, -1],
    [-1, -1, 0],
    [0, -1, 0],
    [1, -1, 0],
    [-1, 0, 0]
];
exports.Trits = Trits;
