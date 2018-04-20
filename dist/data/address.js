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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUF3QkksZUFBZTtJQUNmLFlBQW9CLGFBQXFCLEVBQUUsY0FBc0I7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBSSxjQUFjLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDcEMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLElBQUkscUJBQVMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhDLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBQ2hHLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdDQUFnQyxPQUFPLENBQUMsTUFBTSxPQUFPLE9BQU8sQ0FBQyxvQkFBb0IsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDbEs7UUFFRCxNQUFNLGFBQWEsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxjQUFjLENBQUM7UUFDbkIsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtZQUN0RCxjQUFjLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksUUFBUTtRQUNYLE9BQU8sZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9CQUFvQjtRQUN2QixJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sZUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN4RTthQUFNO1lBQ0gsTUFBTSxJQUFJLHFCQUFTLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUNyRDthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQzs7QUFuRkQ7O0dBRUc7QUFDb0IsY0FBTSxHQUFXLEVBQUUsQ0FBQztBQUMzQzs7R0FFRztBQUNvQix1QkFBZSxHQUFXLENBQUMsQ0FBQztBQUNuRDs7R0FFRztBQUNvQiw0QkFBb0IsR0FBVyxPQUFPLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7QUFFL0Y7O0dBRUc7QUFDb0IsYUFBSyxHQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFqQjlHLDBCQXFGQyJ9