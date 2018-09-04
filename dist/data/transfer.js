Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const address_1 = require("./address");
const tag_1 = require("./tag");
const trytes_1 = require("./trytes");
/**
 * A class for handling transfers.
 */
class Transfer {
    /* @internal */
    constructor() {
    }
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param message The message for the transfer.
     * @param tag The tag.
     * @returns New instance of Transfer.
     */
    static fromParams(address, value, message, tag) {
        if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
            throw new dataError_1.DataError("The address should be a valid Address object");
        }
        if (!numberHelper_1.NumberHelper.isInteger(value) || value < 0) {
            throw new dataError_1.DataError("The value should be a number >= 0");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(message) && !objectHelper_1.ObjectHelper.isType(message, trytes_1.Trytes)) {
            throw new dataError_1.DataError("The message should be a valid Trytes object");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(tag) && !objectHelper_1.ObjectHelper.isType(tag, tag_1.Tag)) {
            throw new dataError_1.DataError("The tag should be a valid Tag object");
        }
        const transfer = new Transfer();
        transfer.address = address;
        transfer.value = value;
        transfer.message = message;
        transfer.tag = tag;
        return transfer;
    }
}
exports.Transfer = Transfer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsdUNBQW9DO0FBQ3BDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSCxNQUFhLFFBQVE7SUFrQmpCLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFnQixFQUNoQixLQUFhLEVBQ2IsT0FBZSxFQUNmLEdBQVE7UUFDN0IsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDekUsTUFBTSxJQUFJLHFCQUFTLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUN0RTtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxTQUFHLENBQUMsRUFBRTtZQUM5RCxNQUFNLElBQUkscUJBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF6REQsNEJBeURDIn0=