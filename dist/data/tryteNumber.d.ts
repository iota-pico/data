import { Trytes } from "./trytes";
/**
 * A class for handling tryte number.
 */
export declare class TryteNumber {
    static readonly LENGTH_9: number;
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
}
