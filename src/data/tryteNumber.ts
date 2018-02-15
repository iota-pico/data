import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { Trits } from "./trits";
import { Trytes } from "./trytes";

/**
 * A class for handling tryte number.
 */
export class TryteNumber {
    /* An 9 length tryte */
    public static readonly LENGTH_9: number = 9;
    /* An empty 9 length tryte number */
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

        if (value === undefined || value === null) {
            trytes = "9".repeat(length);
        } else {
            if (!NumberHelper.isInteger(value)) {
                throw new CoreError("The value is not an integer", { value });
            }

            const trits = Trits.fromNumber(value).toArray();

            while (trits.length < length * 3) {
                trits.push(0);
            }

            trytes = Trits.fromArray(trits).toTrytes().toString();
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
        if (value === undefined || value === null) {
            throw new CoreError("The value should not be undefined or null");
        }
        let tryteString = value.toString();

        if (tryteString.length > length) {
            throw new CoreError("The value contains too many characters", { length: tryteString.length });
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
        return Trytes.create(this._trytes);
    }

    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    public toNumber(): number {
        return Trits.fromTrytes(Trytes.create(this._trytes)).toNumber();
    }
}
