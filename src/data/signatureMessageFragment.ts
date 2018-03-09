import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Trytes } from "./trytes";

/**
 * A class for handling signature message fragments.
 */
export class SignatureMessageFragment {
    /**
     * The length of a valid signature message fragment (2187)
     */
    public static readonly LENGTH: number = 2187;
    /**
     * An empty signature message fragment all 9s.
     */
    public static readonly EMPTY: SignatureMessageFragment = SignatureMessageFragment.fromTrytes(Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)));

    /* @internal */
    private readonly _trytes: Trytes;

    /* @internal */
    private constructor(trytes: Trytes) {
        this._trytes = trytes;
    }

    /**
     * Create signature fragment from trytes.
     * @param signatureMessageFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureMessageFragment.
     */
    public static fromTrytes(signatureMessageFragment: Trytes): SignatureMessageFragment {
        if (!ObjectHelper.isType(signatureMessageFragment, Trytes)) {
            throw new DataError("The signatureMessageFragment should be a valid Trytes object");
        }

        const length = signatureMessageFragment.length();
        if (length !== SignatureMessageFragment.LENGTH) {
            throw new DataError(`The signatureMessageFragment should be ${SignatureMessageFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureMessageFragment(signatureMessageFragment);
    }

    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    public toTrytes(): Trytes {
        return this._trytes;
    }

    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    public toString(): string {
        return this._trytes.toString();
    }
}
