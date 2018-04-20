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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsbUNBQWdDO0FBQ2hDLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBYUksZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsV0FBVyxDQUFDLFFBQVE7UUFDekUsSUFBSSxNQUFNLENBQUM7UUFFWCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoRCxNQUFNLElBQUkscUJBQVMsQ0FBQyxtQ0FBbUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDSCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNqRTtZQUVELE1BQU0sS0FBSyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFdEQsT0FBTyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFFRCxNQUFNLEdBQUcsYUFBSyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvRDtRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsU0FBaUIsV0FBVyxDQUFDLFFBQVE7UUFDekUsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxlQUFNLENBQUMsRUFBRTtZQUNyQyxNQUFNLElBQUkscUJBQVMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hELE1BQU0sSUFBSSxxQkFBUyxDQUFDLG1DQUFtQyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFDN0IsTUFBTSxJQUFJLHFCQUFTLENBQUMsd0NBQXdDLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDakc7UUFFRCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFO1lBQ2hDLFdBQVcsSUFBSSxHQUFHLENBQUM7U0FDdEI7UUFFRCxPQUFPLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sYUFBSyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7QUExR0Q7O0dBRUc7QUFDb0Isb0JBQVEsR0FBVyxDQUFDLENBQUM7QUFDNUM7O0dBRUc7QUFDb0IsbUJBQU8sR0FBZ0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUmxHLGtDQTRHQyJ9