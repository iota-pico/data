"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
/**
 * A class for handling trytes.
 */
class Trytes {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    static create(value, length = 0) {
        if (!Trytes.isValid(value, length)) {
            throw new coreError_1.CoreError("The supplied value and length do not contain valid trytes");
        }
        return new Trytes(value);
    }
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    static isValid(value, length = 0) {
        if (!stringHelper_1.StringHelper.isString(value)) {
            return false;
        }
        else {
            return new RegExp(`^[9A-Z]{${length ? length : "0,"}}$`).test(value);
        }
    }
    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    toString() {
        return this._trytes;
    }
}
Trytes.ALPHABET = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ";
exports.Trytes = Trytes;
