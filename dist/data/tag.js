Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling tags.
 */
class Tag {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create tag from trytes.
     * @param tag The trytes to create the tag from.
     * @returns An instance of Tag.
     */
    static fromTrytes(tag) {
        if (!objectHelper_1.ObjectHelper.isType(tag, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The tag should be a valid Trytes object");
        }
        let trytesString = tag.toString();
        if (trytesString.length > Tag.LENGTH) {
            throw new dataError_1.DataError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
        }
        while (trytesString.length < Tag.LENGTH) {
            trytesString += "9";
        }
        return new Tag(trytesString);
    }
    /**
     * Convert the tag to trytes.
     * @returns Trytes version of the tag.
     */
    toTrytes() {
        return trytes_1.Trytes.fromString(this._trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        return this._trytes;
    }
}
/**
 * The length of a valid tag (27).
 */
Tag.LENGTH = 27;
/**
 * An empty tag all 9s.
 */
Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNILE1BQWEsR0FBRztJQWFaLGVBQWU7SUFDZixZQUFvQixNQUFjO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFXO1FBQ2hDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDbkMsTUFBTSxJQUFJLHFCQUFTLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxNQUFNLElBQUkscUJBQVMsQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLE1BQU0sdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDeEg7UUFFRCxPQUFPLFlBQVksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxZQUFZLElBQUksR0FBRyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7QUF0REQ7O0dBRUc7QUFDb0IsVUFBTSxHQUFXLEVBQUUsQ0FBQztBQUMzQzs7R0FFRztBQUNvQixTQUFLLEdBQVEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQVJsRyxrQkF3REMifQ==