import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trytes } from "./trytes";

/**
 * A class for handling addresses.
 */
export class Address {
    /* The valid length for a tag without a checksum */
    public static readonly LENGTH: number = 81;
    /* The valid length for a tag with a checksum */
    public static readonly LENGTH_WITH_CHECKSUM: number = 90;

    /* @internal */
    private readonly _trytes: Trytes;
    /* @internal */
    private readonly _hasChecksum: boolean;

    /* @internal */
    private constructor(trytes: Trytes, hasChecksum: boolean) {
        this._trytes = trytes;
        this._hasChecksum  = hasChecksum;
    }

    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    public static create(address: Trytes): Address {
        const length = address.length();
        if (length !== Address.LENGTH && length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new CoreError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length });
        }
        return new Address(address, length === Address.LENGTH_WITH_CHECKSUM);
    }

    /**
     * Convert the address to trytes.
     * @returns Trytes version of the address.
     */
    public toTrytes(): Trytes {
        return this._trytes;
    }

    /**
     * Does the address have a checksum.
     * @returns True if the address has a checksum.
     */
    public hasChecksum(): boolean {
        return this._hasChecksum;
    }
}
