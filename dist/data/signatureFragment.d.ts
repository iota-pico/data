import { Trytes } from "./trytes";
/**
 * A class for handling signature fragments.
 */
export declare class SignatureFragment {
    static readonly LENGTH: number;
    static readonly EMPTY: SignatureFragment;
    /**
     * Create signature fragment from trytes.
     * @param signatureFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureFragment.
     */
    static create(signatureFragment: Trytes): SignatureFragment;
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes(): Trytes;
}
