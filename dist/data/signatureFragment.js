Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling signature fragments.
 */
class SignatureFragment {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create signature fragment from trytes.
     * @param signatureFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureFragment.
     */
    static fromTrytes(signatureFragment) {
        if (!objectHelper_1.ObjectHelper.isType(signatureFragment, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The signatureFragment should be a valid Trytes object");
        }
        const length = signatureFragment.length();
        if (length !== SignatureFragment.LENGTH) {
            throw new dataError_1.DataError(`The signatureFragment should be ${SignatureFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureFragment(signatureFragment);
    }
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes() {
        return this._trytes;
    }
}
/* The valid length for a signature fragment */
SignatureFragment.LENGTH = 2187;
/* An empty signature fragment */
SignatureFragment.EMPTY = SignatureFragment.fromTrytes(trytes_1.Trytes.fromString("9".repeat(SignatureFragment.LENGTH)));
exports.SignatureFragment = SignatureFragment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlRnJhZ21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVGcmFnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLGtEQUErQztBQUMvQyxxQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSDtJQVNJLGVBQWU7SUFDZixZQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBeUI7UUFDOUMsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUNqRixDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsbUNBQW1DLGlCQUFpQixDQUFDLE1BQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7QUFwQ0QsK0NBQStDO0FBQ3hCLHdCQUFNLEdBQVcsSUFBSSxDQUFDO0FBQzdDLGlDQUFpQztBQUNWLHVCQUFLLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSjVJLDhDQXNDQyJ9