import { Trytes } from "./trytes";
/**
 * A class for handling signature message fragments.
 */
export declare class SignatureMessageFragment {
    static readonly LENGTH: number;
    static readonly EMPTY: SignatureMessageFragment;
    /**
     * Create signature fragment from trytes.
     * @param signatureMessageFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureMessageFragment.
     */
    static fromTrytes(signatureMessageFragment: Trytes): SignatureMessageFragment;
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}
