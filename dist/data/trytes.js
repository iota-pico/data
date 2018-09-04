Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const dataError_1 = require("../error/dataError");
/**
 * A class for handling trytes.
 */
class Trytes {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    static fromString(value, length = 0) {
        if (!stringHelper_1.StringHelper.isString(value)) {
            throw new dataError_1.DataError("The value must be a non empty string");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length < 0) {
            throw new dataError_1.DataError("The length must be >= 0");
        }
        if (!Trytes.isValid(value, length)) {
            throw new dataError_1.DataError("The value and length do not contain valid trytes", { value, length });
        }
        return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    static isValid(value, length = 0) {
        if (!stringHelper_1.StringHelper.isString(value)) {
            return false;
        }
        else {
            return new RegExp(`^[9A-Z]{${length ? length : "0,"}}$`).test(value);
        }
    }
    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    toString() {
        return this._trytes;
    }
    /**
     * Get the length of the trytes.
     * @returns The length of the trytes.
     */
    length() {
        return this._trytes.length;
    }
    /**
     * Get a sub of the trytes.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trytes sub.
     */
    sub(start, length) {
        if (!numberHelper_1.NumberHelper.isInteger(start) || start < 0) {
            throw new dataError_1.DataError("The start must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || (start + length) > this._trytes.length) {
            throw new dataError_1.DataError(`The start + length must <= ${this._trytes.length}`);
        }
        return Trytes.fromString(this._trytes.substr(start, length));
    }
}
/**
 * All the characters that can be used in trytes.
 */
Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdHJ5dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLGtEQUErQztBQUUvQzs7R0FFRztBQUNILE1BQWEsTUFBTTtJQVNmLGVBQWU7SUFDZixZQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFNBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkscUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGtEQUFrRCxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDOUY7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYSxFQUFFLFNBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQU07WUFDSCxPQUFPLElBQUksTUFBTSxDQUFDLFdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNwQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQzNFLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDhCQUE4QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDNUU7UUFDRCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7QUE1RUQ7O0dBRUc7QUFDVyxlQUFRLEdBQVcsNkJBQTZCLENBQUM7QUFKbkUsd0JBOEVDIn0=