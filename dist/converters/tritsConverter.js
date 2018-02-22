var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const big_integer_1 = __importDefault(require("big-integer"));
/**
 * Helper class to convert between trits and other number types.
 * Converter from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
class TritsConverter {
    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    static tritsToWords(trits) {
        if (!arrayHelper_1.ArrayHelper.isTyped(trits, Number)) {
            throw new coreError_1.CoreError("The trits must be a non empty number array");
        }
        if (trits.length !== TritsConverter.TRITS_LENGTH) {
            throw new coreError_1.CoreError(`Invalid trits length ${trits.length} it should be ${TritsConverter.TRITS_LENGTH}`);
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
    static wordsToTrits(words) {
        if (!objectHelper_1.ObjectHelper.isType(words, Uint32Array) || words.length === 0) {
            throw new coreError_1.CoreError("Words must be a non empty Uint32Array");
        }
        if (words.length !== TritsConverter.WORD_LENGTH) {
            throw new coreError_1.CoreError(`Invalid words length ${words.length} it should be ${TritsConverter.WORD_LENGTH}`);
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
    static tritsToBigInteger(trits, offset, length) {
        if (!arrayHelper_1.ArrayHelper.isTyped(trits, Number)) {
            throw new coreError_1.CoreError("The trits must be a non empty number array");
        }
        if (offset + length > trits.length) {
            throw new coreError_1.CoreError("The offset + length is beyond the length of the array");
        }
        let value = big_integer_1.default.zero;
        for (let i = length - 1; i >= 0; i--) {
            value = value.multiply(TritsConverter.RADIX).add(big_integer_1.default(trits[offset + i]));
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
    static bigIntegerToTrits(value, trits, offset, length) {
        if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
            throw new coreError_1.CoreError("The value must be a bigInteger type");
        }
        if (!arrayHelper_1.ArrayHelper.isArray(trits)) {
            throw new coreError_1.CoreError("The trits must be an array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new coreError_1.CoreError("The offset must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new coreError_1.CoreError("The size must be a number > 0");
        }
        if (offset + length > trits.length) {
            throw new coreError_1.CoreError("The offset + length is beyond the length of the array");
        }
        let absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;
        for (let i = 0; i < length; i++) {
            const divRemainder = absoluteValue.divmod(TritsConverter.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;
            if (remainder > TritsConverter.MAX_TRIT_VALUE) {
                remainder = TritsConverter.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
            }
            trits[offset + i] = remainder.toJSNumber();
        }
        if (value.compareTo(big_integer_1.default.zero) < 0) {
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
    static bytesToBigInteger(source, offset, length) {
        if (!arrayHelper_1.ArrayHelper.isTyped(source, Number)) {
            throw new coreError_1.CoreError("The source must be a non empty number array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new coreError_1.CoreError("The offset must be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(length) || length <= 0) {
            throw new coreError_1.CoreError("The size must be a number > 0");
        }
        if (source.length - offset < TritsConverter.BYTE_HASH_LENGTH) {
            throw new coreError_1.CoreError(`Source array has invalid size, it must be at least ${TritsConverter.BYTE_HASH_LENGTH}`);
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
        return big_integer_1.default(hexString, 16);
    }
    /**
     * Convert the bigInteger into bytes.
     * @param value The value to convert.
     * @param destination The destination array to store the bytes.
     * @param offset The offset within the array to store the bytes.
     */
    static bigIntegerToBytes(value, destination, offset) {
        if (!objectHelper_1.ObjectHelper.isType(value, big_integer_1.default)) {
            throw new coreError_1.CoreError("The value must be a bigInteger type");
        }
        if (!arrayHelper_1.ArrayHelper.isArray(destination)) {
            throw new coreError_1.CoreError("The destination must be an array");
        }
        if (!numberHelper_1.NumberHelper.isInteger(offset) || offset < 0) {
            throw new coreError_1.CoreError("The offset must be a number >= 0");
        }
        if (destination.length - offset < TritsConverter.BYTE_HASH_LENGTH) {
            throw new coreError_1.CoreError(`Destination array has invalid size, it must be at least ${TritsConverter.BYTE_HASH_LENGTH}`);
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
        let bytes = matches
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
    static wordToByteArray(long, bytes, offset) {
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
    static byteArrayToWord(bytes, offset) {
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
/* @internal */
TritsConverter.RADIX = big_integer_1.default(3);
/* @internal */
TritsConverter.MAX_TRIT_VALUE = TritsConverter.RADIX.minus(1).divide(2);
/* @internal */
TritsConverter.MIN_TRIT_VALUE = TritsConverter.MAX_TRIT_VALUE.negate();
/* @internal */
TritsConverter.TRITS_LENGTH = 243;
/* @internal */
TritsConverter.BIT_HASH_LENGTH = 384;
/* @internal */
TritsConverter.BYTE_HASH_LENGTH = TritsConverter.BIT_HASH_LENGTH / 8;
/* @internal */
TritsConverter.WORD_LENGTH = TritsConverter.BYTE_HASH_LENGTH / 4;
exports.TritsConverter = TritsConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdHNDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udmVydGVycy90cml0c0NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsb0VBQWlFO0FBQ2pFLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBQ3pFLDhEQUFxQztBQUVyQzs7O0dBR0c7QUFDSDtJQWlCSTs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFlO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLElBQUkscUJBQVMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHdCQUF3QixLQUFLLENBQUMsTUFBTSxpQkFBaUIsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDNUcsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4RSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RSxjQUFjLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2RSxxREFBcUQ7UUFDckQsMENBQTBDO1FBQzFDLDJDQUEyQztRQUMzQyxpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLE1BQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFaEQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBa0I7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLHFCQUFTLENBQUMsd0JBQXdCLEtBQUssQ0FBQyxNQUFNLGlCQUFpQixjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMzRyxDQUFDO1FBRUQseURBQXlEO1FBQ3pELDBDQUEwQztRQUMxQywyQ0FBMkM7UUFDM0MsdUNBQXVDO1FBQ3ZDLElBQUk7UUFDSiw0Q0FBNEM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFdEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDcEMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhFLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixjQUFjLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUMzRSxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLElBQUkscUJBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQztRQUU1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUE0QixFQUFFLEtBQWUsRUFBRSxNQUFjLEVBQUUsTUFBYztRQUN6RyxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxxQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUkscUJBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUVELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMscUJBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRWxGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsTUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEUsYUFBYSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUV2QyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLFNBQVMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUMxQyxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLHFCQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixzQkFBc0I7Z0JBQ3RCLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQWdCLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDNUUsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxNQUFNLElBQUkscUJBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sSUFBSSxxQkFBUyxDQUFDLHNEQUFzRCxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pILENBQUM7UUFFRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFFbEQsdURBQXVEO1FBQ3ZELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDNUUsYUFBYSxFQUFFLENBQUM7WUFDcEIsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixvQkFBb0I7Z0JBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDO1FBRUQsNEVBQTRFO1FBQzVFLE1BQU0sS0FBSyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCw0Q0FBNEM7UUFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFbkcsTUFBTSxDQUFDLHFCQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUE0QixFQUFFLFdBQXFCLEVBQUUsTUFBYztRQUMvRixFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxxQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLHFCQUFTLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUNoRSxNQUFNLElBQUkscUJBQVMsQ0FBQywyREFBMkQsY0FBYyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUN0SCxDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuQyx1Q0FBdUM7UUFDdkMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZix3QkFBd0I7WUFDeEIsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELG9FQUFvRTtRQUNwRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWhELDZCQUE2QjtRQUM3QixJQUFJLEtBQUssR0FBYSxPQUFPO2FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsMEJBQTBCO1FBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUMsdUNBQXVDO1FBQ3ZDLHdEQUF3RDtRQUN4RCx1REFBdUQ7UUFDdkQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4RCxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUNELCtCQUErQjtRQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQVksRUFBRSxLQUFlLEVBQUUsTUFBYztRQUN4RSxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxlQUFlO0lBQ1AsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFlLEVBQUUsTUFBYztRQUMxRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O0FBNVRELGVBQWU7QUFDUyxvQkFBSyxHQUEwQixxQkFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLGVBQWU7QUFDUyw2QkFBYyxHQUEwQixjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEcsZUFBZTtBQUNTLDZCQUFjLEdBQTBCLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFdkcsZUFBZTtBQUNTLDJCQUFZLEdBQVcsR0FBRyxDQUFDO0FBQ25ELGVBQWU7QUFDUyw4QkFBZSxHQUFXLEdBQUcsQ0FBQztBQUN0RCxlQUFlO0FBQ1MsK0JBQWdCLEdBQVcsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDdEYsZUFBZTtBQUNTLDBCQUFXLEdBQVcsY0FBYyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQWZ0Rix3Q0E4VEMifQ==