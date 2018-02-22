import bigInteger from "big-integer";
/**
 * Helper class to convert between trits and words.
 * Converter from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export declare class TritsWordConverter {
    private static readonly RADIX;
    private static readonly MAX_TRIT_VALUE;
    private static readonly MIN_TRIT_VALUE;
    private static readonly BIT_HASH_LENGTH;
    private static readonly BYTE_HASH_LENGTH;
    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    static tritsToWords(trits: number[]): Uint32Array;
    /**
     * Converts the given word array to trits.
     * @param words The words to convert to trits
     * @returns Trits array.
     */
    static wordsToTrits(words: Uint32Array): number[];
    static tritsToBigInteger(trits: number[], offset: number, size: number): bigInteger.BigInteger;
    static bigIntegerToTrits(value: bigInteger.BigInteger, destination: number[], offset: number, size: number): void;
    static bytesToBigInteger(source: number[], offset: number, size: number): bigInteger.BigInteger;
    static bigIntegerToBytes(value: bigInteger.BigInteger, destination: number[], offset: number): void;
}
