"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const jsonHelper_1 = require("@iota-pico/core/dist/helpers/jsonHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const asciiTrytesConverter_1 = require("./asciiTrytesConverter");
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
class ObjectTrytesConverter {
    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    to(value) {
        if (value === undefined || value === null) {
            throw new coreError_1.CoreError("Value can not be undefined or null");
        }
        let json;
        try {
            json = jsonHelper_1.JsonHelper.stringify(value);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem converting the object to JSON", { err });
        }
        let encoded;
        try {
            encoded = stringHelper_1.StringHelper.encodeNonASCII(json);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem encoding the non ASCII characters", { err });
        }
        return new asciiTrytesConverter_1.AsciiTrytesConverter().to(encoded);
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes) {
        if (trytes === undefined || trytes === null) {
            throw new coreError_1.CoreError("Trytes can not be undefined or null");
        }
        const ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes);
        // Must have a a start and closing pairs
        if (ascii.length < 2) {
            throw new coreError_1.CoreError("The trytes do not represent an object");
        }
        // The start and end must be either {} or "" to represent a JSON object
        if (!((ascii[0] === "{" && ascii[ascii.length - 1] === "}") || (ascii[0] === "\"" && ascii[ascii.length - 1] === "\""))) {
            throw new coreError_1.CoreError("The trytes do not represent an object");
        }
        let decoded;
        try {
            decoded = stringHelper_1.StringHelper.decodeNonASCII(ascii);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem decoding non ASCII characters", { err });
        }
        let obj;
        try {
            obj = JSON.parse(decoded);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem converting the object from JSON", { err });
        }
        return obj;
    }
}
exports.ObjectTrytesConverter = ObjectTrytesConverter;
