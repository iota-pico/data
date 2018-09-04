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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhL2FkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MscUNBQWtDO0FBRWxDOztHQUVHO0FBQ0gsTUFBYSxPQUFPO0lBd0JoQixlQUFlO0lBQ2YsWUFBb0IsYUFBcUIsRUFBRSxjQUFzQjtRQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFJLGNBQWMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZTtRQUNwQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDdEU7UUFFRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFeEMsSUFBSSxZQUFZLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7WUFDaEcsTUFBTSxJQUFJLHFCQUFTLENBQUMsZ0NBQWdDLE9BQU8sQ0FBQyxNQUFNLE9BQU8sT0FBTyxDQUFDLG9CQUFvQix1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNsSztRQUVELE1BQU0sYUFBYSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RCxJQUFJLGNBQWMsQ0FBQztRQUNuQixJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBQ3RELGNBQWMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSSxRQUFRO1FBQ1gsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0JBQW9CO1FBQ3ZCLElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3hFO2FBQU07WUFDSCxNQUFNLElBQUkscUJBQVMsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFFBQVE7UUFDWCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1NBQ3JEO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDOUI7SUFDTCxDQUFDOztBQW5GRDs7R0FFRztBQUNvQixjQUFNLEdBQVcsRUFBRSxDQUFDO0FBQzNDOztHQUVHO0FBQ29CLHVCQUFlLEdBQVcsQ0FBQyxDQUFDO0FBQ25EOztHQUVHO0FBQ29CLDRCQUFvQixHQUFXLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUUvRjs7R0FFRztBQUNvQixhQUFLLEdBQVksT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQWpCOUcsMEJBcUZDIn0=