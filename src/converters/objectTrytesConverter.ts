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
     * @param value to convert into trytes.
     * @returns The trytes representation of the object.
     */
    public to(value: T): Trytes {
        let json;
        try {
            json = JsonHelper.stringify(value);
        } catch (err) {
            throw new DataError("There was a problem converting the object to JSON", { err });
        }

        // Encode any non ascii chars
        const encoded = StringHelper.encodeNonASCII(json);

        // Convert to ascii trytes
        return new AsciiTrytesConverter().to(encoded);
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

        let ascii = new AsciiTrytesConverter().from(trytes);

        // trim any trailing nulls (9s in trytes)
        ascii = ascii.replace(/\0+$/, "");

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
