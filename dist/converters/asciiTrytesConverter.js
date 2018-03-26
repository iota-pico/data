Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const trytes_1 = require("../data/trytes");
const dataError_1 = require("../error/dataError");
/**
 * Trytes converter that converts to and from a string.
 */
class AsciiTrytesConverter {
    /**
     * Convert a string value into trytes.
     * @param string value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value) {
        if (!stringHelper_1.StringHelper.isString(value)) {
            throw new dataError_1.DataError("The value must be a string", { value });
        }
        if (!stringHelper_1.StringHelper.isAscii(value)) {
            throw new dataError_1.DataError("The value contains non ASCII characters", { value });
        }
        let trytes = "";
        for (let i = 0; i < value.length; i++) {
            const asciiValue = value.charCodeAt(i);
            const firstValue = asciiValue % 27;
            const secondValue = (asciiValue - firstValue) / 27;
            trytes += trytes_1.Trytes.ALPHABET[firstValue] + trytes_1.Trytes.ALPHABET[secondValue];
        }
        return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes) {
        if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The trytes parameter is empty or not the correct type");
        }
        const trytesString = trytes.toString();
        if (trytesString.length % 2 === 1) {
            throw new dataError_1.DataError("The trytes length must be an even number");
        }
        let ascii = "";
        for (let i = 0; i < trytesString.length; i += 2) {
            const trytesPair = trytesString[i] + trytesString[i + 1];
            const firstValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[0]);
            const secondValue = trytes_1.Trytes.ALPHABET.indexOf(trytesPair[1]);
            const decimalValue = firstValue + secondValue * 27;
            ascii += String.fromCharCode(decimalValue);
        }
        return ascii;
    }
}
exports.AsciiTrytesConverter = AsciiTrytesConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWlUcnl0ZXNDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udmVydGVycy9hc2NpaVRyeXRlc0NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFDeEMsa0RBQStDO0FBRy9DOztHQUVHO0FBQ0g7SUFDSTs7OztPQUlHO0lBQ0ksRUFBRSxDQUFDLEtBQWE7UUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUkscUJBQVMsQ0FBQyx5Q0FBeUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUVELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRW5ELE1BQU0sSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELE1BQU0sQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE1BQWM7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUNELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV2QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFekQsTUFBTSxVQUFVLEdBQUcsZUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTSxXQUFXLEdBQUcsZUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFM0QsTUFBTSxZQUFZLEdBQUcsVUFBVSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFFbkQsS0FBSyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBM0RELG9EQTJEQyJ9