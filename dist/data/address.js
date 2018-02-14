"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * A class for handling addresses.
 */
class Address {
    /* @internal */
    constructor(trytes, hasChecksum) {
        this._trytes = trytes;
        this._hasChecksum = hasChecksum;
    }
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static create(address) {
        const length = address.length();
        if (length !== Address.LENGTH && length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new coreError_1.CoreError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length });
        }
        return new Address(address, length === Address.LENGTH_WITH_CHECKSUM);
    }
    /**
     * Convert the address to trytes.
     * @returns Trytes version of the address.
     */
    toTrytes() {
        return this._trytes;
    }
    /**
     * Does the address have a checksum.
     * @returns True if the address has a checksum.
     */
    hasChecksum() {
        return this._hasChecksum;
    }
}
/* The valid length for a tag without a checksum */
Address.LENGTH = 81;
/* The valid length for a tag with a checksum */
Address.LENGTH_WITH_CHECKSUM = 90;
exports.Address = Address;
