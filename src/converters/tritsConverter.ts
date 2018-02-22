import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import bigInteger from "big-integer";

/**
 * Helper class to convert between trits and other number types.
 * Converter from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
export class TritsConverter {
    /* @internal */
    private static readonly RADIX: bigInteger.BigInteger = bigInteger(3);
    /* @internal */
    private static readonly MAX_TRIT_VALUE: bigInteger.BigInteger = TritsConverter.RADIX.minus(1).divide(2);
    /* @internal */
    private static readonly MIN_TRIT_VALUE: bigInteger.BigInteger = TritsConverter.MAX_TRIT_VALUE.negate();

    /* @internal */
    private static readonly TRITS_LENGTH: number = 243;
    /* @internal */
    private static readonly BIT_HASH_LENGTH: number = 384;
    /* @internal */
    private static readonly BYTE_HASH_LENGTH: number = TritsConverter.BIT_HASH_LENGTH / 8;
    /* @internal */
    private static readonly WORD_LENGTH: number = TritsConverter.BYTE_HASH_LENGTH / 4;

    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    public static tritsToWords(trits: number[]): Uint32Array {
        if (!ArrayHelper.isTyped(trits, Number)) {
            throw new CoreError("The trits must be a non empty number array");
        }

        if (trits.length !== TritsConverter.TRITS_LENGTH) {
            throw new CoreError(`Invalid trits length ${trits.length} it should be ${TritsConverter.TRITS_LENGTH}`);
        }

        const bigInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);

        const bytes = Array(TritsConverter.BYTE_HASH_LENGTH);
        console.log("tritsToWords:bytes", bytes.length, JSON.stringify(bytes));
        TritsConverter.bigIntegerToBytes(bigInt, bytes, 0);

        console.log("tritsToWords:trits", trits.length, JSON.stringify(trits));
        console.log("tritsToWords:bigInt", bigInt.toString());
        console.log("tritsToWords:bytes", bytes.length, JSON.stringify(bytes));

        // const arrayBuffer = new ArrayBuffer(bytes.length);
        // const view = new DataView(arrayBuffer);
        // for (let i = 0; i < bytes.length; i++) {
        //     view.setInt8(i, bytes[i]);
        // }
        const words = new Uint32Array(bytes.length / 4);

        for (let i = 0; i < words.length; i++) {
            words[i] = TritsConverter.byteArrayToWord(bytes, i * 4);
        }

        return words;
    }

    /**
     * Converts the given word array to trits.
     * @param words The words to convert to trits
     * @returns Trits array.
     */
    public static wordsToTrits(words: Uint32Array): number[] {
        if (!ObjectHelper.isType(words, Uint32Array) || words.length === 0) {
            throw new CoreError("Words must be a non empty Uint32Array");
        }

        if (words.length !== TritsConverter.WORD_LENGTH) {
            throw new CoreError(`Invalid words length ${words.length} it should be ${TritsConverter.WORD_LENGTH}`);
        }

        // const arrayBuffer = new ArrayBuffer(words.length * 4);
        // const view = new DataView(arrayBuffer);
        // for (let i = 0; i < words.length; i++) {
        //     view.setUint32(i * 4, words[i]);
        // }
        // const bytes = new Int8Array(arrayBuffer);

        const bytes = Array(words.length * 4);

        for (let i = 0; i < words.length; i++) {
            TritsConverter.wordToByteArray(words[i], bytes, i * 4);
        }

        const bigInt = TritsConverter.bytesToBigInteger(bytes, 0, bytes.length);

        const trits = Array(243);
        TritsConverter.bigIntegerToTrits(bigInt, trits, 0, trits.length);

        console.log("wordsToTrits:bytes", bytes.length, JSON.stringify(bytes));
        console.log("wordsToTrits:bigInt", bigInt.toString());
        console.log("wordsToTrits:trits", trits.length, JSON.stringify(trits));

        return trits;
    }

    /**
     * Convert trits to a bigInteger.
     * @param trits The trits to convert.
     * @param offset Offset within the array to start.
     * @param length The length of the trits array to convert.
     */
    public static tritsToBigInteger(trits: number[], offset: number, length: number): bigInteger.BigInteger {
        if (!ArrayHelper.isTyped(trits, Number)) {
            throw new CoreError("The trits must be a non empty number array");
        }

        if (offset + length > trits.length) {
            throw new CoreError("The offset + length is beyond the length of the array");
        }

        let value = bigInteger.zero;

        for (let i = length - 1; i >= 0; i--) {
            value = value.multiply(TritsConverter.RADIX).add(bigInteger(trits[offset + i]));
        }

        return value;
    }

    /**
     * Convert bigInteger to trits.
     * @param value The bigInteger to convert to trits.
     * @param trits The array to receive the trits.
     * @param offset The offset to place the trits in the array.
     * @param length The length of the array.
     */
    public static bigIntegerToTrits(value: bigInteger.BigInteger, trits: number[], offset: number, length: number): void {
        if (!ObjectHelper.isType(value, bigInteger)) {
            throw new CoreError("The value must be a bigInteger type");
        }

        if (!ArrayHelper.isArray(trits)) {
            throw new CoreError("The trits must be an array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CoreError("The offset must be a number >= 0");
        }

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new CoreError("The size must be a number > 0");
        }

        if (offset + length > trits.length) {
            throw new CoreError("The offset + length is beyond the length of the array");
        }

        let absoluteValue = value.compareTo(bigInteger.zero) < 0 ? value.negate() : value;

        for (let i = 0; i < length; i++) {
            const divRemainder = absoluteValue.divmod(TritsConverter.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;

            if (remainder > TritsConverter.MAX_TRIT_VALUE) {
                remainder = TritsConverter.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(bigInteger["1"]);
            }
            trits[offset + i] = remainder.toJSNumber();
        }

        if (value.compareTo(bigInteger.zero) < 0) {
            for (let i = 0; i < length; i++) {
                // Avoid negative zero
                trits[offset + i] = trits[offset + i] === 0 ? 0 : -trits[offset + i];
            }
        }
    }

    /**
     * Convert bytes to a bigInteger.
     * @param source The source bytes.
     * @param offset The offset within the bytes to start conversion.
     * @param length The length of the bytes to use for conversion.
     */
    public static bytesToBigInteger(source: number[], offset: number, length: number): bigInteger.BigInteger {
        if (!ArrayHelper.isTyped(source, Number)) {
            throw new CoreError("The source must be a non empty number array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CoreError("The offset must be a number >= 0");
        }

        if (!NumberHelper.isInteger(length) || length <= 0) {
            throw new CoreError("The size must be a number > 0");
        }

        if (source.length - offset < TritsConverter.BYTE_HASH_LENGTH) {
            throw new CoreError(`Source array has invalid size, it must be at least ${TritsConverter.BYTE_HASH_LENGTH}`);
        }

        let bytes = source.slice(offset, offset + length);

        // Remove the initial padding leaving at least one byte
        let paddingOffset = 0;
        const firstByte = bytes[0];
        if (firstByte === 0 || firstByte === -1) {
            while (bytes[paddingOffset] === firstByte && paddingOffset < bytes.length - 1) {
                paddingOffset++;
            }
            if (paddingOffset > 0) {
                // Strip any padding
                bytes = bytes.slice(paddingOffset);
            }
        }

        // If the first padding character is negative then reverse the 2s complement
        const isNeg = firstByte < 0;
        if (isNeg) {
            for (let b = 0; b < bytes.length; b++) {
                bytes[b] = bytes[b] * -1;
                if (b < bytes.length - 1) {
                    bytes[b] -= 1;
                }
            }
        }

        // Convert the signed bytes back to unsigned
        bytes = bytes.map(byte => byte < 0 ? byte + 256 : byte);

        const hexString = `${isNeg ? "-" : ""}${bytes.map(n => `00${n.toString(16)}`.slice(-2)).join("")}`;

        return bigInteger(hexString, 16);
    }

    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */
    public static bigIntegerToBytes(value: bigInteger.BigInteger, destination: number[], offset: number): void {
        if (!ObjectHelper.isType(value, bigInteger)) {
            throw new CoreError("The value must be a bigInteger type");
        }

        if (!ArrayHelper.isArray(destination)) {
            throw new CoreError("The destination must be an array");
        }

        if (!NumberHelper.isInteger(offset) || offset < 0) {
            throw new CoreError("The offset must be a number >= 0");
        }

        if (destination.length - offset < TritsConverter.BYTE_HASH_LENGTH) {
            throw new CoreError(`Destination array has invalid size, it must be at least ${TritsConverter.BYTE_HASH_LENGTH}`);
        }

        let hexString = value.toString(16);

        // Remember if it is negative for later
        const isNeg = value.isNegative() ? -1 : 0;
        if (isNeg === -1) {
            // But remove it for now
            hexString = hexString.slice(1);
        }
        // Now make sure the hex string is an even length so the regex works
        if (hexString.length % 2 === 1) {
            hexString = `0${hexString}`;
        }
        const matches = hexString.match(/[0-9a-f]{2}/g);

        // Convert the hex to numbers
        let bytes: number[] = matches
            .map(hex => parseInt(`0x${hex}`, 16));

        // Convert to signed bytes
        bytes = bytes.map(n => n > 127 ? n - 256 : n);

        // if the whole number is negative then
        // change to 2's complements by negating all the numbers
        // and subtracting 1 to all but the last i.e. ~bignum+1
        if (isNeg === -1) {
            for (let b = 0; b < bytes.length; b++) {
                bytes[b] *= isNeg;
                if (b < bytes.length - 1) {
                    bytes[b] -= 1;
                }
            }
        }

        // Pad the start of the buffer with the neg value
        let i = 0;
        while (i + bytes.length < TritsConverter.BYTE_HASH_LENGTH) {
            destination[i++] = isNeg;
        }
        // And copy in the actual bytes
        for (let j = bytes.length; j-- > 0;) {
            destination[i++] = bytes[bytes.length - 1 - j];
        }
    }

    /* @internal */
    private static wordToByteArray(long: number, bytes: number[], offset: number): number[] {
        const buffer = new ArrayBuffer(4);
        const view = new DataView(buffer);
        view.setUint32(0, long);

        console.log("w2b long", long);
        for (let index = 0; index < 4; index++) {
            bytes[index + offset] = view.getInt8(3 - index);
        }
        console.log("w2b bytes", JSON.stringify(bytes.slice(offset, offset + 4)));

        return bytes;
    }

    /* @internal */
    private static byteArrayToWord(bytes: number[], offset: number): number {
        const buffer = new ArrayBuffer(4);
        const view = new DataView(buffer);
        console.log("b2w bytes", JSON.stringify(bytes.slice(offset, offset + 4)));
        for (let index = 0; index < 4; index++) {
            view.setInt8(index, bytes[index + offset]);
        }
        console.log("b2w long", new Uint32Array(buffer)[0]);
        return new Uint32Array(buffer)[0];
    }
}
