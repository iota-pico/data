"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const trytes_1 = require("./trytes");
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
     * @returns An instance of Tag.
     */
    static create(tag) {
        if (tag === undefined || tag === null) {
            throw new coreError_1.CoreError("The tag should not be undefined or null");
        }
        let trytesString = tag.toString();
        if (trytesString.length > Tag.LENGTH) {
            throw new coreError_1.CoreError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
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
    toTrytes() {
        return trytes_1.Trytes.create(this._trytes);
    }
}
/* The valid length for a tag */
Tag.LENGTH = 27;
/* An empty tag */
Tag.EMPTY = Tag.create(trytes_1.Trytes.create("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;
