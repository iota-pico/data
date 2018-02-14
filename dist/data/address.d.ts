import { Trytes } from "./trytes";
/**
 * A class for handling addresses.
 */
export declare class Address {
    static readonly LENGTH: number;
    static readonly LENGTH_WITH_CHECKSUM: number;
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static create(address: Trytes): Address;
    /**
     * Convert the address to trytes.
     * @returns Trytes version of the address.
     */
    toTrytes(): Trytes;
    /**
     * Does the address have a checksum.
     * @returns True if the address has a checksum.
     */
    hasChecksum(): boolean;
}
