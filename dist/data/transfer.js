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
     * @param messsage The message for the transfer.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsdUNBQW9DO0FBQ3BDLCtCQUE0QjtBQUM1QixxQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSDtJQWtCSSxlQUFlO0lBQ2Y7SUFDQSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZ0IsRUFDaEIsS0FBYSxFQUNiLE9BQWUsRUFDZixHQUFRO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsTUFBTSxJQUFJLHFCQUFTLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxNQUFNLElBQUkscUJBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRSxNQUFNLElBQUkscUJBQVMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLElBQUkscUJBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBekRELDRCQXlEQyJ9