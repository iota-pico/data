import { Trytes } from "./trytes";
/**
 * A class for handling addresses.
 */
export declare class Address {
    /**
     * The length for a valid address without checksum (81).
     */
    static readonly LENGTH: number;
    /**
     * The length for an address checksum (9).
     */
    static readonly LENGTH_CHECKSUM: number;
    /**
     * The length for valid address with checksum (90).
     */
    static readonly LENGTH_WITH_CHECKSUM: number;
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static fromTrytes(address: Trytes): Address;
    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    toTrytes(): Trytes;
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    toTrytesWithChecksum(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}
