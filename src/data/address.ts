import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trytes } from "./trytes";

/**
 * A class for handling addresses.
 */
export class Address {
    /* The valid length for a tag without a checksum */
    public static readonly LENGTH: number = 81;
    /* The valid length for a checksum */
    public static readonly LENGTH_CHECKSUM: number = 9;
    /* The valid length for a tag with a checksum */
    public static readonly LENGTH_WITH_CHECKSUM: number = Address.LENGTH + Address.LENGTH_CHECKSUM;

    /* @internal */
    private readonly _addressTrytes: string;
    /* @internal */
    private readonly _checksumTrytes: string;

    /* @internal */
    private constructor(addressTrytes: string, checksumTrytes: string) {
        this._addressTrytes = addressTrytes;
        this._checksumTrytes  = checksumTrytes;
    }

    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    public static create(address: Trytes): Address {
        if (address === undefined || address === null) {
            throw new CoreError("The address should not be undefined or null");
        }

        const trytesString = address.toString();

        if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new CoreError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length: trytesString.length });
        }

        const addressTrytes = trytesString.substr(0, Address.LENGTH);
        let checksumTrytes;
        if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
            checksumTrytes = trytesString.substr(Address.LENGTH);
        }
        return new Address(addressTrytes, checksumTrytes);
    }

    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    public toTrytes(): Trytes {
        return Trytes.create(this._addressTrytes);
    }

    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    public toTrytesWithChecksum(): Trytes {
        if (this._checksumTrytes) {
            return Trytes.create(this._addressTrytes + this._checksumTrytes);
        } else {
            throw new CoreError(`This address has no checksum calculated for it`);
        }
    }
}
