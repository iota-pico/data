"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trits_1 = require("./trits");
const trytes_1 = require("./trytes");
/**
 * A class for handling tryte number.
 */
class TryteNumber {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create tryte number from number.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromNumber(value, length = TryteNumber.LENGTH_9) {
        let trytes;
        if (value === undefined || value === null) {
            trytes = "9".repeat(length);
        }
        else {
            if (!numberHelper_1.NumberHelper.isInteger(value)) {
                throw new coreError_1.CoreError("The value is not an integer", { value });
            }
            const trits = trits_1.Trits.fromNumber(value).toArray();
            while (trits.length < length * 3) {
                trits.push(0);
            }
            trytes = trits_1.Trits.fromArray(trits).toTrytes().toString();
        }
        return new TryteNumber(trytes);
    }
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromTrytes(value, length = TryteNumber.LENGTH_9) {
        if (value === undefined || value === null) {
            throw new coreError_1.CoreError("The value should not be undefined or null");
        }
        let tryteString = value.toString();
        if (tryteString.length > length) {
            throw new coreError_1.CoreError("The value contains too many characters", { length: tryteString.length });
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
    toTrytes() {
        return trytes_1.Trytes.create(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    toNumber() {
        return trits_1.Trits.fromTrytes(trytes_1.Trytes.create(this._trytes)).toNumber();
    }
}
/* An 9 length tryte */
TryteNumber.LENGTH_9 = 9;
/* An empty 9 length tryte number */
TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;
