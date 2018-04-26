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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsdUNBQW9DO0FBQ3BDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSDtJQWtCSSxlQUFlO0lBQ2Y7SUFDQSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZ0IsRUFDaEIsS0FBYSxFQUNiLE9BQWUsRUFDZixHQUFRO1FBQzdCLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUM3QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3pFLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDdEU7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsU0FBRyxDQUFDLEVBQUU7WUFDOUQsTUFBTSxJQUFJLHFCQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMvRDtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDaEMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDbkIsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBekRELDRCQXlEQyJ9