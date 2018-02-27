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
}
/* The valid length for a tag */
Tag.LENGTH = 27;
/* An empty tag */
Tag.EMPTY = Tag.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBQy9DLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBU0ksZUFBZTtJQUNmLFlBQW9CLE1BQWM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVc7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6SCxDQUFDO1FBRUQsT0FBTyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxZQUFZLElBQUksR0FBRyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7QUExQ0QsZ0NBQWdDO0FBQ1QsVUFBTSxHQUFXLEVBQUUsQ0FBQztBQUMzQyxrQkFBa0I7QUFDSyxTQUFLLEdBQVEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUpsRyxrQkE0Q0MifQ==