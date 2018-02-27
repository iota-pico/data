import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Trytes } from "./trytes";

/**
 * A class for handling signature fragments.
 */
export class SignatureFragment {
    /* The valid length for a signature fragment */
    public static readonly LENGTH: number = 2187;
    /* An empty signature fragment */
    public static readonly EMPTY: SignatureFragment = SignatureFragment.fromTrytes(Trytes.fromString("9".repeat(SignatureFragment.LENGTH)));

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
    public static fromTrytes(signatureFragment: Trytes): SignatureFragment {
        if (!ObjectHelper.isType(signatureFragment, Trytes)) {
            throw new DataError("The signatureFragment should be a valid Trytes object");
        }

        const length = signatureFragment.length();
        if (length !== SignatureFragment.LENGTH) {
            throw new DataError(`The signatureFragment should be ${SignatureFragment.LENGTH} characters in length`, { length });
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
