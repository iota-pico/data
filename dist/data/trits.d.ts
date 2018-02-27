import { Trytes } from "./trytes";
/**
 * A class for handling trits.
 */
export declare class Trits {
    /**
     * Create instance of trits from Int8Array array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromArray(value: Int8Array): Trits;
    /**
     * Create instance of trits from number array.
     * @param value Trytes used to create trits.
     * @returns An instance of Trits.
     */
    static fromNumberArray(value: number[]): Trits;
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
     * Add two trits together.
     * @param first The first trit.
     * @param second The second trit.
     * @return New trit which is the addition of the a + b.
     */
    static add(first: Trits, second: Trits): Trits;
    /**
     * Get the value of the trits array.
     * @returns Array representation of the trits.
     */
    toArray(): Int8Array;
    /**
     * Get the value of the trits array as a number array.
     * @returns Array representation of the trits.
     */
    toNumberArray(): number[];
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
    /**
     * Get a sub of the trits.
     * @param start The start position to get the sub.
     * @param length The length of the sub.
     * @returns The trits sub.
     */
    sub(start: number, length: number): Trits;
}
