Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
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
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new dataError_1.DataError("The length should be a number > 0", { length });
        }
        if (objectHelper_1.ObjectHelper.isEmpty(value)) {
            trytes = "9".repeat(length);
        }
        else {
            if (!numberHelper_1.NumberHelper.isInteger(value)) {
                throw new dataError_1.DataError("The value is not an integer", { value });
            }
            const trits = trits_1.Trits.fromNumber(value).toNumberArray();
            while (trits.length < length * 3) {
                trits.push(0);
            }
            trytes = trits_1.Trits.fromNumberArray(trits).toTrytes().toString();
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
        if (!objectHelper_1.ObjectHelper.isType(value, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The value should be a valid Trytes object");
        }
        let tryteString = value.toString();
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new dataError_1.DataError("The length should be a number > 0", { length });
        }
        if (tryteString.length > length) {
            throw new dataError_1.DataError("The value contains too many characters", { length: tryteString.length });
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
        return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    toNumber() {
        return trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(this._trytes)).toNumber();
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        return this._trytes;
    }
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */
    valueOf() {
        return this.toNumber();
    }
}
/**
 * Length of a number that uses 9 trytes.
 */
TryteNumber.LENGTH_9 = 9;
/**
 * An empty 9 length tryte number.
 */
TryteNumber.EMPTY_9 = TryteNumber.fromNumber(0, TryteNumber.LENGTH_9);
exports.TryteNumber = TryteNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsbUNBQWdDO0FBQ2hDLHFDQUFrQztBQUVsQzs7R0FFRztBQUNILE1BQWEsV0FBVztJQWFwQixlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWEsRUFBRSxTQUFpQixXQUFXLENBQUMsUUFBUTtRQUN6RSxJQUFJLE1BQU0sQ0FBQztRQUVYLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sSUFBSSxxQkFBUyxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNILElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDaEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUV0RCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtZQUVELE1BQU0sR0FBRyxhQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9EO1FBRUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWEsRUFBRSxTQUFpQixXQUFXLENBQUMsUUFBUTtRQUN6RSxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7U0FDcEU7UUFDRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtZQUM3QixNQUFNLElBQUkscUJBQVMsQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNqRztRQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFDaEMsV0FBVyxJQUFJLEdBQUcsQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLGVBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsT0FBTyxhQUFLLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztBQTFHRDs7R0FFRztBQUNvQixvQkFBUSxHQUFXLENBQUMsQ0FBQztBQUM1Qzs7R0FFRztBQUNvQixtQkFBTyxHQUFnQixXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFSbEcsa0NBNEdDIn0=