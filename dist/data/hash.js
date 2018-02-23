Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
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
    static create(hash) {
        if (!objectHelper_1.ObjectHelper.isType(hash, trytes_1.Trytes)) {
            throw new coreError_1.CoreError("The hash should be a valid Trytes object");
        }
        const length = hash.length();
        if (length !== Hash.LENGTH) {
            throw new coreError_1.CoreError(`The hash should be ${Hash.LENGTH} characters in length`, { length });
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
}
/* The valid length for a hash */
Hash.LENGTH = 81;
/* An empty hash */
Hash.EMPTY = Hash.create(trytes_1.Trytes.create("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2hhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9FQUFpRTtBQUNqRSw0RUFBeUU7QUFDekUscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFTSSxlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxJQUFJLHFCQUFTLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUkscUJBQVMsQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOztBQXJDRCxpQ0FBaUM7QUFDVixXQUFNLEdBQVcsRUFBRSxDQUFDO0FBQzNDLG1CQUFtQjtBQUNJLFVBQUssR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSjdGLG9CQXVDQyJ9