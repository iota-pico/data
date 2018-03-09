import { Trytes } from "./trytes";
/**
 * A class for handling tags.
 */
export declare class Tag {
    /**
     * The length of a valid tag (27).
     */
    static readonly LENGTH: number;
    /**
     * An empty tag all 9s.
     */
    static readonly EMPTY: Tag;
    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Tag.
     */
    static fromTrytes(tag: Trytes): Tag;
    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    toTrytes(): Trytes;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}
