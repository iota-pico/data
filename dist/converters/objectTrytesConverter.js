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
        let json;
        try {
            json = jsonHelper_1.JsonHelper.stringify(value);
        }
        catch (err) {
            throw new dataError_1.DataError("There was a problem converting the object to JSON", { err });
        }
        // Encode any non ascii chars
        const encoded = stringHelper_1.StringHelper.encodeNonASCII(json);
        // Convert to ascii trytes
        return new asciiTrytesConverter_1.AsciiTrytesConverter().to(encoded);
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
        let ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes);
        // trim any trailing nulls (9s in trytes)
        ascii = ascii.replace(/\0+$/, "");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VHJ5dGVzQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvb2JqZWN0VHJ5dGVzQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBcUU7QUFDckUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFDeEMsa0RBQStDO0FBRS9DLGlFQUE4RDtBQUU5RDs7O0dBR0c7QUFDSDtJQUNJOzs7O09BSUc7SUFDSSxFQUFFLENBQUMsS0FBUTtRQUNkLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSTtZQUNBLElBQUksR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsTUFBTSxJQUFJLHFCQUFTLENBQUMsbURBQW1ELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBRUQsNkJBQTZCO1FBQzdCLE1BQU0sT0FBTyxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELDBCQUEwQjtRQUMxQixPQUFPLElBQUksMkNBQW9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxJQUFJLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7U0FDaEY7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELHlDQUF5QztRQUN6QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbEMsTUFBTSxPQUFPLEdBQUcsMkJBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJO1lBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN2RjtRQUVELE9BQVUsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQS9DRCxzREErQ0MifQ==