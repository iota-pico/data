Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const trytes_1 = require("../data/trytes");
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
            throw new coreError_1.CoreError("Value is not a string", { value });
        }
        if (!stringHelper_1.StringHelper.isAscii(value)) {
            throw new coreError_1.CoreError("Value contains non ASCII characters", { value });
        }
        let trytes = "";
        for (let i = 0; i < value.length; i++) {
            const asciiValue = value.charCodeAt(i);
            const firstValue = asciiValue % 27;
            const secondValue = (asciiValue - firstValue) / 27;
            trytes += trytes_1.Trytes.ALPHABET[firstValue] + trytes_1.Trytes.ALPHABET[secondValue];
        }
        return trytes_1.Trytes.create(trytes);
    }
    /**
     * Convert trytes into a string value.
     * @param trytes to convert into a string value.
     * @returns The string value converted from the trytes.
     */
    from(trytes) {
        if (trytes === undefined || trytes === null) {
            throw new coreError_1.CoreError("Trytes can not be undefined or null");
        }
        const trytesString = trytes.toString();
        if (trytesString.length % 2 === 1) {
            throw new coreError_1.CoreError("Trytes length must be an even number");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNjaWlUcnl0ZXNDb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udmVydGVycy9hc2NpaVRyeXRlc0NvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFHeEM7O0dBRUc7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxFQUFFLENBQUMsS0FBZ0M7UUFDdEMsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLElBQUkscUJBQVMsQ0FBQyxxQ0FBcUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE1BQU0sVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRW5ELE1BQU0sSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGVBQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELE1BQU0sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE1BQWlDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUMsTUFBTSxJQUFJLHFCQUFTLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUV6RCxNQUFNLFVBQVUsR0FBRyxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLFdBQVcsR0FBRyxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzRCxNQUFNLFlBQVksR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUVuRCxLQUFLLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUEzREQsb0RBMkRDIn0=