import { JsonHelper } from "@iota-pico/core/dist/helpers/jsonHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";
import { Trytes } from "../data/trytes";
import { DataError } from "../error/dataError";
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
    public to(value: T): Trytes {
        if (ObjectHelper.isEmpty(value)) {
            throw new DataError("The value can not be empty");
        }

        let json;
        try {
            json = JsonHelper.stringify(value);
        } catch (err) {
            throw new DataError("There was a problem converting the object to JSON", { err });
        }

        return new AsciiTrytesConverter().to(StringHelper.encodeNonASCII(json));
    }

    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    public from(trytes: Trytes): T {
        if (!ObjectHelper.isType(trytes, Trytes)) {
            throw new DataError("The trytes parameter is empty or not the correct type");
        }

        const ascii = new AsciiTrytesConverter().from(trytes);

        // Must have a a start and closing pairs
        if (ascii.length < 2) {
            throw new DataError("The trytes do not represent an object");
        }

        // The start and end must be either {}, [] or "" to represent a JSON object
        if (!((ascii[0] === "{" && ascii[ascii.length - 1] === "}") ||
              (ascii[0] === "[" && ascii[ascii.length - 1] === "]") ||
              (ascii[0] === "\"" && ascii[ascii.length - 1] === "\""))) {
            throw new DataError("The trytes do not represent an object", { ascii });
        }

        const decoded = StringHelper.decodeNonASCII(ascii);

        let obj;
        try {
            obj = JSON.parse(decoded);
        } catch (err) {
            throw new DataError("There was a problem converting the object from JSON", { err });
        }

        return <T>obj;
    }
}
