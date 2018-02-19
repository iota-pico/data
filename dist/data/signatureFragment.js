Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
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
    static create(signatureFragment) {
        if (signatureFragment === undefined || signatureFragment === null) {
            throw new coreError_1.CoreError("The signatureFragment should not be undefined or null");
        }
        const length = signatureFragment.length();
        if (length !== SignatureFragment.LENGTH) {
            throw new coreError_1.CoreError(`The signatureFragment should be ${SignatureFragment.LENGTH} characters in length`, { length });
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
SignatureFragment.EMPTY = SignatureFragment.create(trytes_1.Trytes.create("9".repeat(SignatureFragment.LENGTH)));
exports.SignatureFragment = SignatureFragment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlRnJhZ21lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9zaWduYXR1cmVGcmFnbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBU0ksZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUF5QjtRQUMxQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLElBQUksaUJBQWlCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLElBQUkscUJBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFFRCxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxtQ0FBbUMsaUJBQWlCLENBQUMsTUFBTSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEgsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDOztBQXBDRCwrQ0FBK0M7QUFDeEIsd0JBQU0sR0FBVyxJQUFJLENBQUM7QUFDN0MsaUNBQWlDO0FBQ1YsdUJBQUssR0FBc0IsaUJBQWlCLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFKcEksOENBc0NDIn0=