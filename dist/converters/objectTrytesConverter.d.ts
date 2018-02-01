import { Trytes } from "../data/trytes";
import { ITrytesConverter } from "../interfaces/ITrytesConverter";
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
export declare class ObjectTrytesConverter<T> implements ITrytesConverter<T> {
    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    to(value: T | null | undefined): Trytes;
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes: Trytes | null | undefined): T;
}
