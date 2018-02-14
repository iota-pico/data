import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trytes } from "./trytes";

/**
 * A class for handling tags.
 */
export class Tag {
    /* The valid length for a tag */
    public static readonly LENGTH: number = 27;

    /* @internal */
    private readonly _trytes: Trytes;

    /* @internal */
    private constructor(trytes: Trytes) {
        this._trytes = trytes;
    }

    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Address.
     */
    public static create(tag: Trytes): Tag {
        const length = tag.length();
        if (length !== Tag.LENGTH) {
            throw new CoreError(`The tag should be ${Tag.LENGTH} characters in length`, { length });
        }
        return new Tag(tag);
    }

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    public toTrytes(): Trytes {
        return this._trytes;
    }
}
