"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const trytes_1 = require("./trytes");
/**
 * A class for handling addresses.
 */
class Address {
    /* @internal */
    constructor(addressTrytes, checksumTrytes) {
        this._addressTrytes = addressTrytes;
        this._checksumTrytes = checksumTrytes;
    }
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static create(address) {
        if (address === undefined || address === null) {
            throw new coreError_1.CoreError("The address should not be undefined or null");
        }
        const trytesString = address.toString();
        if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new coreError_1.CoreError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length: trytesString.length });
        }
        const addressTrytes = trytesString.substr(0, Address.LENGTH);
        let checksumTrytes;
        if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
            checksumTrytes = trytesString.substr(Address.LENGTH);
        }
        return new Address(addressTrytes, checksumTrytes);
    }
    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    toTrytes() {
        return trytes_1.Trytes.create(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    toTrytesWithChecksum() {
        if (this._checksumTrytes) {
            return trytes_1.Trytes.create(this._addressTrytes + this._checksumTrytes);
        }
        else {
            throw new coreError_1.CoreError(`This address has no checksum calculated for it`);
        }
    }
}
/* The valid length for a tag without a checksum */
Address.LENGTH = 81;
/* The valid length for a checksum */
Address.LENGTH_CHECKSUM = 9;
/* The valid length for a tag with a checksum */
Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
exports.Address = Address;
