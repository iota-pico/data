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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0gsTUFBYSxJQUFJO0lBYWIsZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDakMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxlQUFNLENBQUMsRUFBRTtZQUNwQyxNQUFNLElBQUkscUJBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsTUFBTSxJQUFJLHFCQUFTLENBQUMsc0JBQXNCLElBQUksQ0FBQyxNQUFNLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM3RjtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7QUFqREQ7O0dBRUc7QUFDb0IsV0FBTSxHQUFXLEVBQUUsQ0FBQztBQUMzQzs7R0FFRztBQUNvQixVQUFLLEdBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQVJyRyxvQkFtREMifQ==