import { Trytes } from "../data/trytes";

/**
 * Represents a converter which can convert to and from trytes.
 * @typeparam T The generic type for the conversion methods.
 * @interface
 */
export interface ITrytesConverter<T> {
    /**
     * Convert a value into trytes.
     * @param value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value: T): Trytes;

    /**
     * Convert a trytes into a value.
     * @param trytes to convert into value.
     * @returns The value converted from the trytes.
     */
    from(trytes: Trytes): T;
}
