Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const trytes_1 = require("./trytes");
/**
 * A class for handling addresses.
 */
class Address {
    /* @internal */
    constructor(addressTrytes, checksumTrytes) {
        this._addressTrytes = addressTrytes;
        this._checksumTrytes = checksumTrytes;
    }
    /**
     * Create address from trytes.
     * @param address The trytes to create the address from.
     * @returns An instance of Address.
     */
    static fromTrytes(address) {
        if (!objectHelper_1.ObjectHelper.isType(address, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The address should be a valid Trytes object");
        }
        const trytesString = address.toString();
        if (trytesString.length !== Address.LENGTH && trytesString.length !== Address.LENGTH_WITH_CHECKSUM) {
            throw new dataError_1.DataError(`The address should either be ${Address.LENGTH} or ${Address.LENGTH_WITH_CHECKSUM} characters in length`, { length: trytesString.length });
        }
        const addressTrytes = trytesString.substr(0, Address.LENGTH);
        let checksumTrytes;
        if (trytesString.length === Address.LENGTH_WITH_CHECKSUM) {
            checksumTrytes = trytesString.substr(Address.LENGTH);
        }
        return new Address(addressTrytes, checksumTrytes);
    }
    /**
     * Convert the address to trytes with no checksum.
     * @returns Trytes version of the address with no checksum.
     */
    toTrytes() {
        return trytes_1.Trytes.fromString(this._addressTrytes);
    }
    /**
     * Convert the address to trytes with a checksum, creating a blank one if needed.
     * @returns Trytes version of the address with checksu,.
     */
    toTrytesWithChecksum() {
        if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
            return trytes_1.Trytes.fromString(this._addressTrytes + this._checksumTrytes);
        }
        else {
            throw new dataError_1.DataError(`This address has no checksum calculated for it`);
        }
    }
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString() {
        if (!objectHelper_1.ObjectHelper.isEmpty(this._checksumTrytes)) {
            return this._addressTrytes + this._checksumTrytes;
        }
        else {
            return this._addressTrytes;
        }
    }
}
/**
 * The length for a valid address without checksum (81).
 */
Address.LENGTH = 81;
/**
 * The length for an address checksum (9).
 */
Address.LENGTH_CHECKSUM = 9;
/**
 * The length for valid address with checksum (90).
 */
Address.LENGTH_WITH_CHECKSUM = Address.LENGTH + Address.LENGTH_CHECKSUM;
/**
 * An empty hash all 9s.
 */
Address.EMPTY = Address.fromTrytes(trytes_1.Trytes.fromString("9".repeat(Address.LENGTH)));
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUF3QkksZUFBZTtJQUNmLFlBQW9CLGFBQXFCLEVBQUUsY0FBc0I7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBSSxjQUFjLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV4QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdDQUFnQyxPQUFPLENBQUMsTUFBTSxPQUFPLE9BQU8sQ0FBQyxvQkFBb0IsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkssQ0FBQztRQUVELE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLGNBQWMsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFDdkQsY0FBYyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsTUFBTSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQkFBb0I7UUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7O0FBbkZEOztHQUVHO0FBQ29CLGNBQU0sR0FBVyxFQUFFLENBQUM7QUFDM0M7O0dBRUc7QUFDb0IsdUJBQWUsR0FBVyxDQUFDLENBQUM7QUFDbkQ7O0dBRUc7QUFDb0IsNEJBQW9CLEdBQVcsT0FBTyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO0FBRS9GOztHQUVHO0FBQ29CLGFBQUssR0FBWSxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBakI5RywwQkFxRkMifQ==