"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * A class for handling tags.
 */
class Tag {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Address.
     */
    static create(tag) {
        const length = tag.length();
        if (length !== Tag.LENGTH) {
            throw new coreError_1.CoreError(`The tag should be ${Tag.LENGTH} characters in length`, { length });
        }
        return new Tag(tag);
    }
    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    toTrytes() {
        return this._trytes;
    }
}
/* The valid length for a tag */
Tag.LENGTH = 27;
exports.Tag = Tag;
