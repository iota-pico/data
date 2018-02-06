import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { Trytes } from "./trytes";

/**
 * A class for handling trits.
 */
export class Trits {
    /* @internal */
    private static readonly TRYTES_TRITS: number[][] = [
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

    /* @internal */
    private readonly _trits: number[];

    /* @internal */
    private constructor(trits: number[]) {
        this._trits = trits;
    }

    /**
     * Create empty trits.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static empty(): Trits {
        return new Trits([]);
    }

    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static fromValue(value: number[]): Trits {
        if (value === null || value === undefined) {
            throw new CoreError("The supplied value does not contain valid trits");
        }
        return new Trits(value);
    }

    /**
     * Create instance of trits from trytes.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    public static fromTrytes(value: Trytes): Trits {
        if (value === null || value === undefined) {
            throw new CoreError("The supplied value does not contain valid trytes");
        }
        const trits: number[] = [];
        const trytesString = value.toString();
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
            throw new CoreError("The supplied value is not an integer");
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

        return new Trits(trits);
    }

    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    public toValue(): number[] {
        return this._trits;
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

        return Trytes.create(trytes);
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
}
