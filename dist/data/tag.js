Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
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
    static create(tag) {
        if (tag === undefined || tag === null) {
            throw new coreError_1.CoreError("The tag should not be undefined or null");
        }
        let trytesString = tag.toString();
        if (trytesString.length > Tag.LENGTH) {
            throw new coreError_1.CoreError(`The tag should be at most ${Tag.LENGTH} characters in length`, { length: trytesString.length });
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
        return trytes_1.Trytes.create(this._trytes);
    }
}
/* The valid length for a tag */
Tag.LENGTH = 27;
/* An empty tag */
Tag.EMPTY = Tag.create(trytes_1.Trytes.create("9".repeat(Tag.LENGTH)));
exports.Tag = Tag;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvdGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFDakUscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFTSSxlQUFlO0lBQ2YsWUFBb0IsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBVztRQUM1QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVsQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixHQUFHLENBQUMsTUFBTSx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6SCxDQUFDO1FBRUQsT0FBTyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxZQUFZLElBQUksR0FBRyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxNQUFNLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7QUExQ0QsZ0NBQWdDO0FBQ1QsVUFBTSxHQUFXLEVBQUUsQ0FBQztBQUMzQyxrQkFBa0I7QUFDSyxTQUFLLEdBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUoxRixrQkE0Q0MifQ==