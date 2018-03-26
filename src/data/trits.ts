import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Trytes } from "./trytes";

/**
 * A class for handling trits.
 */
export class Trits {
    /* @internal */
    private static readonly TRYTES_TRITS: Int8Array[] = [
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

    /* @internal */
    private readonly _trits: Int8Array;

    /* @internal */
    private constructor(trits: Int8Array) {
        this._trits = trits;
    }

    /**
     * Create instance of trits from Int8Array array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static fromArray(value: Int8Array): Trits {
        if (!ObjectHelper.isType(value, Int8Array)) {
            throw new DataError("The value does not contain valid trits");
        }
        return new Trits(value);
    }

    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static fromNumberArray(value: number[]): Trits {
        if (!ArrayHelper.isTyped(value, Number)) {
            throw new DataError("The value does not contain valid trits");
        }
        return new Trits(new Int8Array(value));
    }

    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static fromTrytes(value: Trytes): Trits {
        if (!ObjectHelper.isType(value, Trytes)) {
            throw new DataError("The value should be a valid Trytes object");
        }
        const trytesString = value.toString();
        const trits: Int8Array = new Int8Array(trytesString.length * 3);
        for (let i = 0; i < trytesString.length; i++) {
            const idx = Trytes.ALPHABET.indexOf(trytesString.charAt(i));
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
    public static fromNumber(value: number): Trits {
        if (!NumberHelper.isInteger(value)) {
            throw new DataError("The value is not an integer");
        }
        const trits: number[] = [];
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
    public static add(first: Trits, second: Trits): Trits {
        if (!ObjectHelper.isType(first, Trits)) {
            throw new DataError("The first should be a valid Trits object");
        }
        if (!ObjectHelper.isType(second, Trits)) {
            throw new DataError("The seconds should be a valid Trits object");
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
    private static fullAdd(a: number, b: number, c: number): Int8Array {
        const sA = Trits.sum(a, b);
        const cA = Trits.cons(a, b);
        const cB = Trits.cons(sA, c);
        const cOut = Trits.any(cA, cB);
        const sOUt = Trits.sum(sA, c);

        return new Int8Array([sOUt, cOut]);
    }

    /* @internal */
    private static sum(a: number, b: number): number {
        const s = a + b;

        switch (s) {
            case 2: return -1;
            case -2: return 1;
            default: return s;
        }
    }

    /* @internal */
    private static cons(a: number, b: number): number {
        if (a === b) {
            return a;
        }
        return 0;
    }

    /* @internal */
    private static any(a: number, b: number): number {
        const s = a + b;

        if (s > 0) {
            return 1;
        } else if (s < 0) {
            return -1;
        }

        return 0;
    }

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    public toArray(): Int8Array {
        return this._trits;
    }

    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */
    public toNumberArray(): number[] {
        return Array.from(this._trits);
    }

    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */
    public toTrytes(): Trytes {
        let trytes = "";

        for (let i = 0; i < this._trits.length; i += 3) {
            // Iterate over all possible tryte values to find correct trit representation
            for (let j = 0; j < Trytes.ALPHABET.length; j++) {
                if (Trits.TRYTES_TRITS[j][0] === this._trits[i] &&
                    Trits.TRYTES_TRITS[j][1] === this._trits[i + 1] &&
                    Trits.TRYTES_TRITS[j][2] === this._trits[i + 2]) {
                    trytes += Trytes.ALPHABET.charAt(j);
                    break;
                }
            }
        }

        return Trytes.fromString(trytes);
    }

    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */
    public toNumber(): number {
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
    public length(): number {
        return this._trits.length;
    }

    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */
    public sub(start: number, length: number): Trits {
        if (!NumberHelper.isInteger(start) || start < 0) {
            throw new DataError("The start must be a number >= 0");
        }
        if (!NumberHelper.isInteger(length) || (start + length) > this._trits.length) {
            throw new DataError(`The start + length must <= ${this._trits.length}`);
        }
        return Trits.fromArray(this._trits.slice(start, start + length));
    }

}
