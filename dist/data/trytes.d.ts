/**
 * A class for handling trytes.
 */
export declare class Trytes {
    static ALPHABET: string;
    private readonly _trytes;
    private constructor();
    /**
     * Create trytes from a string.
     * @param value A string to create the trytes from.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns An instance of Trytes.
     */
    static create(value: string, length?: number): Trytes;
    /**
     * Does the value contain valid trytes.
     * @param value A string to validate as trytes.
     * @param length An optional validation length for the trytes, 0 means ignore length.
     * @returns True if the input was valid trytes.
     */
    static isValid(value: string, length?: number): boolean;
    /**
     * Convert the trytes to a string.
     * @returns String representation of the trytes.
     */
    toString(): string;
}
