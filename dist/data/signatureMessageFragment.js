Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling signature message fragments.
 */
class SignatureMessageFragment {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create signature fragment from trytes.
     * @param signatureMessageFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureMessageFragment.
     */
    static fromTrytes(signatureMessageFragment) {
        if (!objectHelper_1.ObjectHelper.isType(signatureMessageFragment, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The signatureMessageFragment should be a valid Trytes object");
        }
        const length = signatureMessageFragment.length();
        if (length !== SignatureMessageFragment.LENGTH) {
            throw new dataError_1.DataError(`The signatureMessageFragment should be ${SignatureMessageFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureMessageFragment(signatureMessageFragment);
    }
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
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
 * The length of a valid signature message fragment (2187)
 */
SignatureMessageFragment.LENGTH = 2187;
/**
 * An empty signature message fragment all 9s.
 */
SignatureMessageFragment.EMPTY = SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));
exports.SignatureMessageFragment = SignatureMessageFragment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvc2lnbmF0dXJlTWVzc2FnZUZyYWdtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNILE1BQWEsd0JBQXdCO0lBYWpDLGVBQWU7SUFDZixZQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyx3QkFBZ0M7UUFDckQsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3hELE1BQU0sSUFBSSxxQkFBUyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDdkY7UUFFRCxNQUFNLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRCxJQUFJLE1BQU0sS0FBSyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsTUFBTSxJQUFJLHFCQUFTLENBQUMsMENBQTBDLHdCQUF3QixDQUFDLE1BQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3JJO1FBQ0QsT0FBTyxJQUFJLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQzs7QUFoREQ7O0dBRUc7QUFDb0IsK0JBQU0sR0FBVyxJQUFJLENBQUM7QUFDN0M7O0dBRUc7QUFDb0IsOEJBQUssR0FBNkIsd0JBQXdCLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFSakssNERBa0RDIn0=