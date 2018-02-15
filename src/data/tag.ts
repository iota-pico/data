import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Trytes } from "./trytes";

/**
 * A class for handling tags.
 */
export class Tag {
    /* The valid length for a tag */
    public static readonly LENGTH: number = 27;
    /* An empty tag */
    public static readonly EMPTY: Tag = Tag.create(Trytes.create("9".repeat(Tag.LENGTH)));

    /* @internal */
    private readonly _trytes: string;

    /* @internal */
    private constructor(trytes: string) {
        this._trytes = trytes;
    }

    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Tag.
     */
    public static create(tag: Trytes): Tag {
        if (tag === undefined || tag === null) {
            throw new CoreError("The tag should not be undefined or null");
        }

        let trytesString = tag.toString();

        if (trytesString.length > Tag.LENGTH) {
            throw new CoreError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
        }

        while (trytesString.length < Tag.LENGTH) {
            trytesString += "9";
        }

        return new Tag(trytesString);
    }

    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    public toTrytes(): Trytes {
        return Trytes.create(this._trytes);
    }
}
