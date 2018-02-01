import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";

/**
 * A class for handling trytes.
 */
export class Trytes {
    public static ALPHABET: string = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    private readonly _trytes: string;

    private constructor(trytes: string) {
        this._trytes = trytes;
    }

    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    public static create(value: string, length: number = 0): Trytes {
        if (!Trytes.isValid(value, length)) {
            throw new CoreError("The supplied value and length do not contain valid trytes");
        }
        return new Trytes(value);
    }

    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    public static isValid(value: string, length: number = 0): boolean {
        if (!StringHelper.isString(value)) {
            return false;
        } else {
            return new RegExp(`^[9A-Z]{${length ? length : "0,"}}$`).test(value);
        }
    }

    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    public toString(): string {
        return this._trytes;
    }
}
