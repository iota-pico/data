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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVOdW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cnl0ZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLDRFQUF5RTtBQUN6RSxtQ0FBZ0M7QUFDaEMscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFTSSxlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWEsRUFBRSxTQUFpQixXQUFXLENBQUMsUUFBUTtRQUN6RSxJQUFJLE1BQU0sQ0FBQztRQUVYLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRUQsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVoRCxPQUFPLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFRCxNQUFNLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFNBQWlCLFdBQVcsQ0FBQyxRQUFRO1FBQ3pFLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQ0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRW5DLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLElBQUkscUJBQVMsQ0FBQyx3Q0FBd0MsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNsRyxDQUFDO1FBRUQsT0FBTyxXQUFXLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO1lBQ2pDLFdBQVcsSUFBSSxHQUFHLENBQUM7UUFDdkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxhQUFLLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEUsQ0FBQzs7QUE5RUQsdUJBQXVCO0FBQ0Esb0JBQVEsR0FBVyxDQUFDLENBQUM7QUFDNUMsb0NBQW9DO0FBQ2IsbUJBQU8sR0FBZ0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBSmxHLGtDQWdGQyJ9