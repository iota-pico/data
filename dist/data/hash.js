"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const trytes_1 = require("./trytes");
/**
 * A class for handling hashes.
 */
class Hash {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create hash from trytes.
     * @param hash The trytes to create the hash from.
     * @returns An instance of Hash.
     */
    static create(hash) {
        if (hash === undefined || hash === null) {
            throw new coreError_1.CoreError("The hash should not be undefined or null");
        }
        const length = hash.length();
        if (length !== Hash.LENGTH) {
            throw new coreError_1.CoreError(`The hash should be ${Hash.LENGTH} characters in length`, { length });
        }
        return new Hash(hash);
    }
    /**
     * Convert the hash to trytes.
     * @returns Trytes version of the hash.
     */
    toTrytes() {
        return this._trytes;
    }
}
/* The valid length for a hash */
Hash.LENGTH = 81;
/* An empty hash */
Hash.EMPTY = Hash.create(trytes_1.Trytes.create("9".repeat(Hash.LENGTH)));
exports.Hash = Hash;
