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
     * @param value value to convert into trytes.
     * @returns The trytes representation of the value.
     */
    to(value) {
        if (!stringHelper_1.StringHelper.isString(value)) {
            throw new dataError_1.DataError("The value must be a string", { value });
        }
        if (!stringHelper_1.StringHelper.isASCII(value)) {
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
            const firstValue = trytes_1.Trytes.ALPHABET.indexOf(trytesString[i]);
            const secondValue = trytes_1.Trytes.ALPHABET.indexOf(trytesString[i + 1]);
            const decimalValue = firstValue + secondValue * 27;
            ascii += String.fromCharCode(decimalValue);
        }
        return ascii;
    }
}
exports.AsciiTrytesConverter = AsciiTrytesConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWlUcnl0ZXNDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udmVydGVycy9hc2NpaVRyeXRlc0NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFDeEMsa0RBQStDO0FBRy9DOztHQUVHO0FBQ0g7SUFDSTs7OztPQUlHO0lBQ0ksRUFBRSxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDRCQUE0QixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUkscUJBQVMsQ0FBQyx5Q0FBeUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2QyxNQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ25DLE1BQU0sV0FBVyxHQUFHLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVuRCxNQUFNLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxlQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsRUFBRTtZQUN0QyxNQUFNLElBQUkscUJBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQ2hGO1FBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZDLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDbkU7UUFFRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdDLE1BQU0sVUFBVSxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sV0FBVyxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqRSxNQUFNLFlBQVksR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUVuRCxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQXpERCxvREF5REMifQ==