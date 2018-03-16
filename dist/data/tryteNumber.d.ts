import { Trytes } from "./trytes";
/**
 * A class for handling tryte number.
 */
export declare class TryteNumber {
    /**
     * Length of a number that uses 9 trytes.
     */
    static readonly LENGTH_9: number;
    /**
     * An empty 9 length tryte number.
     */
    static readonly EMPTY_9: TryteNumber;
    /**
     * Create tryte number from number.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromNumber(value: number, length?: number): TryteNumber;
    /**
     * Create tryte number from trytes.
     * @param value The number value to create the object from.
     * @param length The tryte length to pad the number with.
     * @returns An instance of TryteNumber.
     */
    static fromTrytes(value: Trytes, length?: number): TryteNumber;
    /**
     * Convert the tryte number to trytes.
     * @returns Trytes version of the tryte number.
     */
    toTrytes(): Trytes;
    /**
     * Convert the tryte number to number.
     * @returns number value of the tryte number.
     */
    toNumber(): number;
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
    /**
     * Get the value of the object.
     * @returns string of the trytes.
     */
    valueOf(): number;
}
