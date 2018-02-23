import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { Trytes } from "./trytes";

/**
 * A class for handling hashes.
 */
export class Hash {
    /* The valid length for a hash */
    public static readonly LENGTH: number = 81;
    /* An empty hash */
    public static readonly EMPTY: Hash = Hash.create(Trytes.create("9".repeat(Hash.LENGTH)));

    /* @internal */
    private readonly _trytes: Trytes;

    /* @internal */
    private constructor(trytes: Trytes) {
        this._trytes = trytes;
    }

    /**
     * Create hash from trytes.
     * @param hash The trytes to create the hash from.
     * @returns An instance of Hash.
     */
    public static create(hash: Trytes): Hash {
        if (!ObjectHelper.isType(hash, Trytes)) {
            throw new CoreError("The hash should be a valid Trytes object");
        }

        const length = hash.length();
        if (length !== Hash.LENGTH) {
            throw new CoreError(`The hash should be ${Hash.LENGTH} characters in length`, { length });
        }

        return new Hash(hash);
    }

    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    public toTrytes(): Trytes {
        return this._trytes;
    }
}
