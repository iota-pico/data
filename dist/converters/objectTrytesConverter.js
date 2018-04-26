Object.defineProperty(exports, "__esModule", { value: true });
const jsonHelper_1 = require("@iota-pico/core/dist/helpers/jsonHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const trytes_1 = require("../data/trytes");
const dataError_1 = require("../error/dataError");
const asciiTrytesConverter_1 = require("./asciiTrytesConverter");
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
class ObjectTrytesConverter {
    /**
     * Convert an object value into trytes.
     * @param value to convert into trytes.
     * @returns The trytes representation of the object.
     */
    to(value) {
        if (objectHelper_1.ObjectHelper.isEmpty(value)) {
            throw new dataError_1.DataError("The value can not be empty");
        }
        let json;
        try {
            json = jsonHelper_1.JsonHelper.stringify(value);
        }
        catch (err) {
            throw new dataError_1.DataError("There was a problem converting the object to JSON", { err });
        }
        return new asciiTrytesConverter_1.AsciiTrytesConverter().to(stringHelper_1.StringHelper.encodeNonASCII(json));
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
        const ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes);
        // Must have a a start and closing pairs
        if (ascii.length < 2) {
            throw new dataError_1.DataError("The trytes do not represent an object");
        }
        // The start and end must be either {}, [] or "" to represent a JSON object
        if (!((ascii[0] === "{" && ascii[ascii.length - 1] === "}") ||
            (ascii[0] === "[" && ascii[ascii.length - 1] === "]") ||
            (ascii[0] === "\"" && ascii[ascii.length - 1] === "\""))) {
            throw new dataError_1.DataError("The trytes do not represent an object", { ascii });
        }
        const decoded = stringHelper_1.StringHelper.decodeNonASCII(ascii);
        let obj;
        try {
            obj = JSON.parse(decoded);
        }
        catch (err) {
            throw new dataError_1.DataError("There was a problem converting the object from JSON", { err });
        }
        return obj;
    }
}
exports.ObjectTrytesConverter = ObjectTrytesConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VHJ5dGVzQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvb2JqZWN0VHJ5dGVzQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBcUU7QUFDckUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFDeEMsa0RBQStDO0FBRS9DLGlFQUE4RDtBQUU5RDs7O0dBR0c7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxFQUFFLENBQUMsS0FBUTtRQUNkLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLHFCQUFTLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSTtZQUNBLElBQUksR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsTUFBTSxJQUFJLHFCQUFTLENBQUMsbURBQW1ELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsT0FBTyxJQUFJLDJDQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxJQUFJLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7U0FDaEY7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELHdDQUF3QztRQUN4QyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDaEU7UUFFRCwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNyRCxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3JELENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQzVELE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVDQUF1QyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUVELE1BQU0sT0FBTyxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSTtZQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixNQUFNLElBQUkscUJBQVMsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdkY7UUFFRCxPQUFVLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUF4REQsc0RBd0RDIn0=