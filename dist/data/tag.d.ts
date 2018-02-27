import { Trytes } from "./trytes";
/**
 * A class for handling tags.
 */
export declare class Tag {
    static readonly LENGTH: number;
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
}
