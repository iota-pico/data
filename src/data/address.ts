import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
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
    public static fromTrytes(address: Trytes): Address {
        if (!ObjectHelper.isType(address, Trytes)) {
            throw new DataError("The address should be a valid Trytes object");
        }

        const trytesString = address.toString();

        if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new DataError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length: trytesString.length });
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
        return Trytes.fromString(this._addressTrytes);
    }

    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    public toTrytesWithChecksum(): Trytes {
        if (this._checksumTrytes) {
            return Trytes.fromString(this._addressTrytes + this._checksumTrytes);
        } else {
            throw new DataError(`This address has no checksum calculated for it`);
        }
    }
}
