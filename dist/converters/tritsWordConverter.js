var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
// import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
const big_integer_1 = __importDefault(require("big-integer"));
/**
 * Helper class to convert between trits and words.
 * Converter from https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java
 */
class TritsWordConverter {
    /**
     * Convert trits to words.
     * @param trits The trits to convert.
     * @returns Words array.
     */
    static tritsToWords(trits) {
        // if (!ArrayHelper.isTyped(trits, Number)) {
        //     throw new CoreError("The trits must be a non empty number array");
        // }
        // if (trits.length !== TritsWordConverter.TRITS_LENGTH) {
        //     throw new CoreError(`Invalid trits length ${trits.length} it should be ${TritsWordConverter.TRITS_LENGTH}`);
        // }
        return new Uint32Array(1);
    }
    /**
     * Converts the given word array to trits.
     * @param words The words to convert to trits
     * @returns Trits array.
     */
    static wordsToTrits(words) {
        // if (words === undefined || words === null) {
        //     throw new CoreError("Words can not be null or undefined");
        // }
        // if (words.length !== TritsWordConverter.INT_LENGTH) {
        //     throw new CoreError(`Invalid words length ${words.length} it should be ${TritsWordConverter.INT_LENGTH}`);
        // }
        return Array.from([]);
    }
    static tritsToBigInteger(trits, offset, size) {
        let value = big_integer_1.default.zero;
        for (let i = size; i-- > 0;) {
            value = value.multiply(TritsWordConverter.RADIX).add(big_integer_1.default(trits[offset + i]));
        }
        return value;
    }
    static bigIntegerToTrits(value, destination, offset, size) {
        if (destination.length - offset < size) {
            throw new coreError_1.CoreError("Destination array has invalid size");
        }
        let absoluteValue = value.compareTo(big_integer_1.default.zero) < 0 ? value.negate() : value;
        for (let i = 0; i < size; i++) {
            const divRemainder = absoluteValue.divmod(TritsWordConverter.RADIX);
            absoluteValue = divRemainder.quotient;
            let remainder = divRemainder.remainder;
            if (remainder > TritsWordConverter.MAX_TRIT_VALUE) {
                remainder = TritsWordConverter.MIN_TRIT_VALUE;
                absoluteValue = absoluteValue.add(big_integer_1.default["1"]);
            }
            destination[offset + i] = remainder.toJSNumber();
        }
        if (value.compareTo(big_integer_1.default.zero) < 0) {
            for (let i = 0; i < size; i++) {
                // Avoid negative zero
                destination[offset + i] = destination[offset + i] === 0 ? 0 : -destination[offset + i];
            }
        }
    }
    static bytesToBigInteger(source, offset, size) {
        if (source.length - offset < TritsWordConverter.BYTE_HASH_LENGTH) {
            throw new coreError_1.CoreError("Source array has invalid size.");
        }
        let bytes = source.slice(offset, offset + size);
        // Remove the initial padding leaving at least one byte
        let paddingOffset = 0;
        while ((bytes[paddingOffset] === -1 || bytes[paddingOffset] === 0) && paddingOffset < bytes.length - 1) {
            paddingOffset++;
        }
        const isNeg = bytes[0] < 0;
        if (paddingOffset > 0) {
            // Strip any padding
            bytes = bytes.slice(paddingOffset);
        }
        // If the first padding character is negative then reverse the 2s complement
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
    static bigIntegerToBytes(value, destination, offset) {
        if (destination.length - offset < TritsWordConverter.BYTE_HASH_LENGTH) {
            throw new coreError_1.CoreError("Destination array has invalid size.");
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
        while (i + bytes.length < TritsWordConverter.BYTE_HASH_LENGTH) {
            destination[i++] = isNeg;
        }
        // And copy in the actual bytes
        for (let j = bytes.length; j-- > 0;) {
            destination[i++] = bytes[bytes.length - 1 - j];
        }
    }
}
TritsWordConverter.RADIX = big_integer_1.default(3);
TritsWordConverter.MAX_TRIT_VALUE = TritsWordConverter.RADIX.minus(1).divide(2);
TritsWordConverter.MIN_TRIT_VALUE = TritsWordConverter.MAX_TRIT_VALUE.negate();
TritsWordConverter.BIT_HASH_LENGTH = 384;
TritsWordConverter.BYTE_HASH_LENGTH = TritsWordConverter.BIT_HASH_LENGTH / 8;
exports.TritsWordConverter = TritsWordConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpdHNXb3JkQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvdHJpdHNXb3JkQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvRUFBaUU7QUFDakUsMEVBQTBFO0FBQzFFLDhEQUFxQztBQUVyQzs7O0dBR0c7QUFDSDtJQVFJOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQWU7UUFDdEMsNkNBQTZDO1FBQzdDLHlFQUF5RTtRQUN6RSxJQUFJO1FBRUosMERBQTBEO1FBQzFELG1IQUFtSDtRQUNuSCxJQUFJO1FBRUosTUFBTSxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFrQjtRQUN6QywrQ0FBK0M7UUFDL0MsaUVBQWlFO1FBQ2pFLElBQUk7UUFFSix3REFBd0Q7UUFDeEQsaUhBQWlIO1FBQ2pILElBQUk7UUFFSixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLEtBQWUsRUFBRSxNQUFjLEVBQUUsSUFBWTtRQUN6RSxJQUFJLEtBQUssR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQztRQUU1QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDMUIsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUE0QixFQUFFLFdBQXFCLEVBQUUsTUFBYyxFQUFFLElBQVk7UUFDOUcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLElBQUkscUJBQVMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLHFCQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVsRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLE1BQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEUsYUFBYSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUV2QyxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsU0FBUyxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztnQkFDOUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7WUFDRCxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxxQkFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUIsc0JBQXNCO2dCQUN0QixXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsTUFBZ0IsRUFBRSxNQUFjLEVBQUUsSUFBWTtRQUN6RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDL0QsTUFBTSxJQUFJLHFCQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRWhELHVEQUF1RDtRQUN2RCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDckcsYUFBYSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFcEIsb0JBQW9CO1lBQ3BCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFFRCw0RUFBNEU7UUFDNUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNwQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFFRCw0Q0FBNEM7UUFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RCxNQUFNLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFbkcsTUFBTSxDQUFDLHFCQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBNEIsRUFBRSxXQUFxQixFQUFFLE1BQWM7UUFDL0YsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFbkMsdUNBQXVDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2Ysd0JBQXdCO1lBQ3hCLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxvRUFBb0U7UUFDcEUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNoQyxDQUFDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoRCw2QkFBNkI7UUFDN0IsSUFBSSxLQUFLLEdBQWEsT0FBTzthQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFDLDBCQUEwQjtRQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlDLHVDQUF1QztRQUN2Qyx3REFBd0Q7UUFDeEQsdURBQXVEO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztZQUNOLENBQUM7UUFDTCxDQUFDO1FBRUQsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM1RCxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUNELCtCQUErQjtRQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0wsQ0FBQzs7QUFuS3VCLHdCQUFLLEdBQTBCLHFCQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsaUNBQWMsR0FBMEIsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEYsaUNBQWMsR0FBMEIsa0JBQWtCLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRW5GLGtDQUFlLEdBQVcsR0FBRyxDQUFDO0FBQzlCLG1DQUFnQixHQUFXLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFOOUYsZ0RBcUtDIn0=