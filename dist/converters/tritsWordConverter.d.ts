/**
 * Helper class to convert between trits and words.
 * Converted from here https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/converter/words.js
 */
export declare class TritsWordConverter {
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
}
