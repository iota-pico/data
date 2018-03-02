import { Trytes } from "./trytes";
/**
 * A class for handling hashes.
 */
export declare class Hash {
    static readonly LENGTH: number;
    static readonly EMPTY: Hash;
    /**
     * Create hash from trytes.
     * @param hash The trytes to create the hash from.
     * @returns An instance of Hash.
     */
    static fromTrytes(hash: Trytes): Hash;
    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}
