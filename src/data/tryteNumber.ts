import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Trits } from "./trits";
import { Trytes } from "./trytes";

/**
 * A class for handling tryte number.
 */
export class TryteNumber {
    /**
     * Length of a number that uses 9 trytes.
     */
    public static readonly LENGTH_9: number = 9;
    /**
     * An empty 9 length tryte number.
     */
    public static readonly EMPTY_9: TryteNumber = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);

    /* @internal */
    private readonly _trytes: string;

    /* @internal */
    private constructor(trytes: string) {
        this._trytes = trytes;
    }

    /**
     * Create tryte number from number.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    public static fromNumber(value: number, length: number = TryteNumber.LENGTH_9): TryteNumber {
        let trytes;

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new DataError("The length should be a number > 0", { length });
        }

        if (ObjectHelper.isEmpty(value)) {
            trytes = "9".repeat(length);
        } else {
            if (!NumberHelper.isInteger(value)) {
                throw new DataError("The value is not an integer", { value });
            }

            const trits = Trits.fromNumber(value).toNumberArray();

            while (trits.length < length * 3) {
                trits.push(0);
            }

            trytes = Trits.fromNumberArray(trits).toTrytes().toString();
        }

        return new TryteNumber(trytes);
    }

    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    public static fromTrytes(value: Trytes, length: number = TryteNumber.LENGTH_9): TryteNumber {
        if (!ObjectHelper.isType(value, Trytes)) {
            throw new DataError("The value should be a valid Trytes object");
        }
        let tryteString = value.toString();

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new DataError("The length should be a number > 0", { length });
        }

        if (tryteString.length > length) {
            throw new DataError("The value contains too many characters", { length: tryteString.length });
        }

        while (tryteString.length < length) {
            tryteString += "9";
        }

        return new TryteNumber(tryteString);
    }

    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    public toTrytes(): Trytes {
        return Trytes.fromString(this._trytes);
    }

    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    public toNumber(): number {
        return Trits.fromTrytes(Trytes.fromString(this._trytes)).toNumber();
    }

    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    public toString(): string {
        return this._trytes;
    }

    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */
    public valueOf(): number {
        return this.toNumber();
    }
}
