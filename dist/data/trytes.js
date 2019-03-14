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
        return new RegExp(`^[9A-Z]{${length ? length : "0,"}}$`).test(value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdHJ5dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLGtEQUErQztBQUUvQzs7R0FFRztBQUNILE1BQWEsTUFBTTtJQVNmLGVBQWU7SUFDZixZQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFNBQWlCLENBQUM7UUFDdEQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0Q7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQyxNQUFNLElBQUkscUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGtEQUFrRCxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDOUY7UUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBYSxFQUFFLFNBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjO1FBQ3BDLElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDM0UsTUFBTSxJQUFJLHFCQUFTLENBQUMsOEJBQThCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM1RTtRQUNELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOztBQTNFRDs7R0FFRztBQUNXLGVBQVEsR0FBVyw2QkFBNkIsQ0FBQztBQUpuRSx3QkE2RUMifQ==