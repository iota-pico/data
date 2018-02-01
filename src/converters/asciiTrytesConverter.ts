import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";
import { Trytes } from "../data/trytes";
import { ITrytesConverter } from "../interfaces/ITrytesConverter";

/**
 * Trytes converter that converts to and from a string.
 */
export class AsciiTrytesConverter implements ITrytesConverter<string> {
    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    public to(value: string | null | undefined): Trytes {
        if (!StringHelper.isString(value)) {
            throw new CoreError("Value is not a string", { value });
        }

        if (!StringHelper.isAscii(value)) {
            throw new CoreError("Value contains non ASCII characters", { value });
        }

        let trytes = "";

        for (let i = 0; i < value.length; i++) {
            const asciiValue = value.charCodeAt(i);

            const firstValue = asciiValue % 27;
            const secondValue = (asciiValue - firstValue) / 27;

            trytes += Trytes.ALPHABET[firstValue] + Trytes.ALPHABET[secondValue];
        }

        return Trytes.create(trytes);
    }

    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    public from(trytes: Trytes | null | undefined): string {
        if (trytes === undefined || trytes === null) {
            throw new CoreError("Trytes can not be undefined or null");
        }
        const trytesString = trytes.toString();

        if (trytesString.length % 2 === 1) {
            throw new CoreError("Trytes length must be an even number");
        }

        let ascii = "";

        for (let i = 0; i < trytesString.length; i += 2) {
            const trytesPair = trytesString[i] + trytesString[i + 1];

            const firstValue = Trytes.ALPHABET.indexOf(trytesPair[0]);
            const secondValue = Trytes.ALPHABET.indexOf(trytesPair[1]);

            const decimalValue = firstValue + secondValue * 27;

            ascii += String.fromCharCode(decimalValue);
        }

        return ascii;
    }
}
