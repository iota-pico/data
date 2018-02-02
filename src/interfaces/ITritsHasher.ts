import { Trits } from "../data/trits";

/**
 * Represents an interface to hash trits.
 * @interface
 */
export interface ITritsHasher {
    /**
     * Initialise the hasher.
     * @param state The initial state for the hasher.
     */
    initialize(state?: number[]): void;

    /**
     * Reset the hasher.
     */
    reset(): void;

    /**
     * Absorb trits into the hash.
     * @param trits The trits to absorb.
     * @param offset The offset into the trits to absorb from.
     * @param length The number of trits to absorb.
     */
    absorb(trits: Trits, offset: number, length: number): void;

    /**
     * Squeeze trits into the hash.
     * @param trits The trits to squeeze.
     * @param offset The offset into the trits to squeeze from.
     * @param length The number of trits to squeeze.
     */
    squeeze(trits: Trits, offset: number, length: number): void;
}
