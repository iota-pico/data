import { Trytes } from "./trytes";
/**
 * A class for handling hashes.
 */
export declare class Hash {
    /**
     * The length for a valid hash (81).
     */
    static readonly LENGTH: number;
    /**
     * An empty hash all 9s.
     */
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
