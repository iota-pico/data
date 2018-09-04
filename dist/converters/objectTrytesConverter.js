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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VHJ5dGVzQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvb2JqZWN0VHJ5dGVzQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3RUFBcUU7QUFDckUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwyQ0FBd0M7QUFDeEMsa0RBQStDO0FBRS9DLGlFQUE4RDtBQUU5RDs7O0dBR0c7QUFDSCxNQUFhLHFCQUFxQjtJQUM5Qjs7OztPQUlHO0lBQ0ksRUFBRSxDQUFDLEtBQVE7UUFDZCxJQUFJLElBQUksQ0FBQztRQUNULElBQUk7WUFDQSxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE1BQU0sSUFBSSxxQkFBUyxDQUFDLG1EQUFtRCxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNyRjtRQUVELDZCQUE2QjtRQUM3QixNQUFNLE9BQU8sR0FBRywyQkFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLDJDQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsRUFBRTtZQUN0QyxNQUFNLElBQUkscUJBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCx5Q0FBeUM7UUFDekMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sT0FBTyxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5ELElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSTtZQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixNQUFNLElBQUkscUJBQVMsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDdkY7UUFFRCxPQUFVLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0o7QUEvQ0Qsc0RBK0NDIn0=