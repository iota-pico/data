Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const jsonHelper_1 = require("@iota-pico/core/dist/helpers/jsonHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const asciiTrytesConverter_1 = require("./asciiTrytesConverter");
/**
 * Trytes converter that converts to and from an object.
 * @typeparam T The generic type for the conversion methods.
 */
class ObjectTrytesConverter {
    /**
     * Convert an object value into trytes.
     * @param object to convert into trytes.
     * @returns The trytes representation of the object.
     */
    to(value) {
        if (value === undefined || value === null) {
            throw new coreError_1.CoreError("Value can not be undefined or null");
        }
        let json;
        try {
            json = jsonHelper_1.JsonHelper.stringify(value);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem converting the object to JSON", { err });
        }
        let encoded;
        try {
            encoded = stringHelper_1.StringHelper.encodeNonASCII(json);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem encoding the non ASCII characters", { err });
        }
        return new asciiTrytesConverter_1.AsciiTrytesConverter().to(encoded);
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
        const ascii = new asciiTrytesConverter_1.AsciiTrytesConverter().from(trytes);
        // Must have a a start and closing pairs
        if (ascii.length < 2) {
            throw new coreError_1.CoreError("The trytes do not represent an object");
        }
        // The start and end must be either {} or "" to represent a JSON object
        if (!((ascii[0] === "{" && ascii[ascii.length - 1] === "}") || (ascii[0] === "\"" && ascii[ascii.length - 1] === "\""))) {
            throw new coreError_1.CoreError("The trytes do not represent an object");
        }
        let decoded;
        try {
            decoded = stringHelper_1.StringHelper.decodeNonASCII(ascii);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem decoding non ASCII characters", { err });
        }
        let obj;
        try {
            obj = JSON.parse(decoded);
        }
        catch (err) {
            throw new coreError_1.CoreError("There was a problem converting the object from JSON", { err });
        }
        return obj;
    }
}
exports.ObjectTrytesConverter = ObjectTrytesConverter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VHJ5dGVzQ29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnZlcnRlcnMvb2JqZWN0VHJ5dGVzQ29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFDakUsd0VBQXFFO0FBQ3JFLDRFQUF5RTtBQUd6RSxpRUFBOEQ7QUFFOUQ7OztHQUdHO0FBQ0g7SUFDSTs7OztPQUlHO0lBQ0ksRUFBRSxDQUFDLEtBQTJCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLENBQUM7WUFDRCxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLElBQUkscUJBQVMsQ0FBQyxtREFBbUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVELElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSSxDQUFDO1lBQ0QsT0FBTyxHQUFHLDJCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxJQUFJLHFCQUFTLENBQUMsdURBQXVELEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxNQUFpQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELE1BQU0sS0FBSyxHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsd0NBQXdDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLElBQUkscUJBQVMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRCx1RUFBdUU7UUFDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEgsTUFBTSxJQUFJLHFCQUFTLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLENBQUM7WUFDRCxPQUFPLEdBQUcsMkJBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLElBQUkscUJBQVMsQ0FBQyxtREFBbUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVELElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxDQUFDO1lBQ0QsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLElBQUkscUJBQVMsQ0FBQyxxREFBcUQsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUVELE1BQU0sQ0FBSSxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBbEVELHNEQWtFQyJ9