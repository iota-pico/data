import { Trytes } from "./Trytes";
/**
 * A class for handling trits.
 */
export declare class Trits {
    private static readonly TRYTES_TRITS;
    private readonly _trits;
    private constructor();
    /**
     * Create instance of trits from trytes
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromTrytes(value: Trytes): Trits;
    /**
     * Create instance of trits from number
     * @param value Number used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumber(value: number): Trits;
    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    toValue(): number[];
    /**
     * Get the trits as trytes.
     * @returns Instance of Trytes.
     */
    toTrytes(): Trytes;
    /**
     * Get the trits as a number.
     * @returns The trits converted to a number.
     */
    toNumber(): number;
}
