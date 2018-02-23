import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";

/**
 * A class for handling trytes.
 */
export class Trytes {
    public static ALPHABET: string = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /* @internal */
    private readonly _trytes: string;

    /* @internal */
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
        if (!StringHelper.isString(value)) {
            throw new CoreError("The value must be a non empty string");
        }
        if (!NumberHelper.isInteger(length) || length < 0) {
            throw new CoreError("The length must be >= 0");
        }
        if (!Trytes.isValid(value, length)) {
            throw new CoreError("The value and length do not contain valid trytes", { value, length });
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

    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */
    public length(): number {
        return this._trytes.length;
    }

    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */
    public sub(start: number, length: number): Trytes {
        if (!NumberHelper.isInteger(start) || start < 0) {
            throw new CoreError("The start must be a number >= 0");
        }
        if (!NumberHelper.isInteger(length) || (start + length) > this._trytes.length) {
            throw new CoreError(`The start + length must <= ${this._trytes.length}`);
        }
        return Trytes.create(this._trytes.substr(start, length));
    }
}
