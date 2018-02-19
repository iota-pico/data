Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
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
    static create(value, length = 0) {
        if (!Trytes.isValid(value, length)) {
            throw new coreError_1.CoreError("The supplied value and length do not contain valid trytes", { value, length });
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
        return Trytes.create(this._trytes.substr(start, length));
    }
}
Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ5dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdHJ5dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFDakUsNEVBQXlFO0FBRXpFOztHQUVHO0FBQ0g7SUFNSSxlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWEsRUFBRSxTQUFpQixDQUFDO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDJEQUEyRCxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEcsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWEsRUFBRSxTQUFpQixDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNO1FBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOztBQTdEYSxlQUFRLEdBQVcsNkJBQTZCLENBQUM7QUFEbkUsd0JBK0RDIn0=