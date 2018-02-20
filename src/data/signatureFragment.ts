import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trytes } from "./trytes";

/**
 * A class for handling signature fragments.
 */
export class SignatureFragment {
    /* The valid length for a signature fragment */
    public static readonly LENGTH: number = 2187;
    /* An empty signature fragment */
    public static readonly EMPTY: SignatureFragment = SignatureFragment.create(Trytes.create("9".repeat(SignatureFragment.LENGTH)));

    /* @internal */
    private readonly _trytes: Trytes;

    /* @internal */
    private constructor(trytes: Trytes) {
        this._trytes = trytes;
    }

    /**
     * Create signature fragment from trytes.
     * @param signatureFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureFragment.
     */
    public static create(signatureFragment: Trytes): SignatureFragment {
        if (signatureFragment === undefined || signatureFragment === null) {
            throw new CoreError("The signatureFragment should not be undefined or null");
        }

        const length = signatureFragment.length();
        if (length !== SignatureFragment.LENGTH) {
            throw new CoreError(`The signatureFragment should be ${SignatureFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureFragment(signatureFragment);
    }

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    public toTrytes(): Trytes {
        return this._trytes;
    }
}