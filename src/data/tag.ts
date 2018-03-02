import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Trytes } from "./trytes";

/**
 * A class for handling tags.
 */
export class Tag {
    /* The valid length for a tag */
    public static readonly LENGTH: number = 27;
    /* An empty tag */
    public static readonly EMPTY: Tag = Tag.fromTrytes(Trytes.fromString("9".repeat(Tag.LENGTH)));

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
    public static fromTrytes(tag: Trytes): Tag {
        if (!ObjectHelper.isType(tag, Trytes)) {
            throw new DataError("The tag should be a valid Trytes object");
        }

        let trytesString = tag.toString();

        if (trytesString.length > Tag.LENGTH) {
            throw new DataError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
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
        return Trytes.fromString(this._trytes);
    }

    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    public toString(): string {
        return this._trytes;
    }
}
