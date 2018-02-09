import { Trytes } from "./trytes";
/**
 * A class for handling trits.
 */
export declare class Trits {
    /**
     * Create empty trits.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static empty(): Trits;
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromTritsArray(value: number[]): Trits;
    /**
     * Create instance of trits from trytes.
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
    toTritsArray(): number[];
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
    /**
     * What is the length of the trits.
     * @returns Length of the trits.
     */
    length(): number;
}
