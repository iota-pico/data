import { Trytes } from "../data/trytes";
import { ITrytesConverter } from "../interfaces/ITrytesConverter";
/**
 * Trytes converter that converts to and from a string.
 */
export declare class AsciiTrytesConverter implements ITrytesConverter<string> {
    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value: string | null | undefined): Trytes;
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes: Trytes | null | undefined): string;
}
