import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { JsonHelper } from "@iota-pico/core/dist/helpers/jsonHelper";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";
import { Trytes } from "../data/trytes";
import { ITrytesConverter } from "../interfaces/ITrytesConverter";
import { AsciiTrytesConverter } from "./asciiTrytesConverter";

/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
export class ObjectTrytesConverter<T> implements ITrytesConverter<T> {
    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    public to(value: T | null | undefined): Trytes {
        if (value === undefined || value === null) {
            throw new CoreError("Value can not be undefined or null");
        }

        let json;
        try {
            json = JsonHelper.stringify(value);
        } catch (err) {
            throw new CoreError("There was a problem converting the object to JSON", { err });
        }

        let encoded;
        try {
            encoded = StringHelper.encodeNonASCII(json);
        } catch (err) {
            throw new CoreError("There was a problem encoding the non ASCII characters", { err });
        }

        return new AsciiTrytesConverter().to(encoded);
    }

    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    public from(trytes: Trytes | null | undefined): T {
        if (trytes === undefined || trytes === null) {
            throw new CoreError("Trytes can not be undefined or null");
        }

        const ascii = new AsciiTrytesConverter().from(trytes);

        // Must have a a start and closing pairs
        if (ascii.length < 2) {
            throw new CoreError("The trytes do not represent an object");
        }

        // The start and end must be either {} or "" to represent a JSON object
        if (!((ascii[0] === "{" && ascii[ascii.length - 1] === "}") || (ascii[0] === "\"" && ascii[ascii.length - 1] === "\""))) {
            throw new CoreError("The trytes do not represent an object");
        }

        let decoded;
        try {
            decoded = StringHelper.decodeNonASCII(ascii);
        } catch (err) {
            throw new CoreError("There was a problem decoding non ASCII characters", { err });
        }

        let obj;
        try {
            obj = JSON.parse(decoded);
        } catch (err) {
            throw new CoreError("There was a problem converting the object from JSON", { err });
        }

        return <T>obj;
    }
}
