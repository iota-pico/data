Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling hashes.
 */
class Hash {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create hash from trytes.
     * @param hash The trytes to create the hash from.
     * @returns An instance of Hash.
     */
    static fromTrytes(hash) {
        if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The hash should be a valid Trytes object");
        }
        const length = hash.length();
        if (length !== Hash.LENGTH) {
            throw new dataError_1.DataError(`The hash should be ${Hash.LENGTH} characters in length`, { length });
        }
        return new Hash(hash);
    }
    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    toTrytes() {
        return this._trytes;
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        return this._trytes.toString();
    }
}
/**
 * The length for a valid hash (81).
 */
Hash.LENGTH = 81;
/**
 * An empty hash all 9s.
 */
Hash.EMPTY = Hash.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFhSSxlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUNqQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDbkU7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4QixNQUFNLElBQUkscUJBQVMsQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzdGO1FBRUQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztBQWpERDs7R0FFRztBQUNvQixXQUFNLEdBQVcsRUFBRSxDQUFDO0FBQzNDOztHQUVHO0FBQ29CLFVBQUssR0FBUyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBUnJHLG9CQW1EQyJ9