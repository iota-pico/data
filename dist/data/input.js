Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const address_1 = require("./address");
const addressSecurity_1 = require("./addressSecurity");
/**
 * A class for handling inputs.
 */
class Input {
    /* @internal */
    constructor() {
    }
    /**
     * Create instance of input from parameters.
     * @param address The address.
     * @param security The address security.
     * @param keyIndex The key index.
     * @param balance The balance of the address.
     * @returns New instance of Input.
     */
    static fromParams(address, security, keyIndex, balance) {
        if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
            throw new dataError_1.DataError("The address should be a valid Address object");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < addressSecurity_1.AddressSecurity.low || security > addressSecurity_1.AddressSecurity.high) {
            throw new dataError_1.DataError(`The security should be a number between ${addressSecurity_1.AddressSecurity.low} and ${addressSecurity_1.AddressSecurity.high}`);
        }
        if (!numberHelper_1.NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
            throw new dataError_1.DataError("The keyIndex should be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0) {
            throw new dataError_1.DataError("The balance should be a number >= 0");
        }
        const input = new Input();
        input.address = address;
        input.security = security;
        input.keyIndex = keyIndex;
        input.balance = balance;
        return input;
    }
}
exports.Input = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsdUNBQW9DO0FBQ3BDLHVEQUFvRDtBQUVwRDs7R0FFRztBQUNILE1BQWEsS0FBSztJQWtCZCxlQUFlO0lBQ2Y7SUFDQSxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBZ0IsRUFDaEIsUUFBeUIsRUFDekIsUUFBZ0IsRUFDaEIsT0FBZTtRQUNwQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFPLENBQUMsRUFBRTtZQUN4QyxNQUFNLElBQUkscUJBQVMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLEdBQUcsSUFBSSxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDeEcsTUFBTSxJQUFJLHFCQUFTLENBQUMsMkNBQTJDLGlDQUFlLENBQUMsR0FBRyxRQUFRLGlDQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNySDtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sSUFBSSxxQkFBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtZQUNqRCxNQUFNLElBQUkscUJBQVMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QixLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMxQixLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMxQixLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUF6REQsc0JBeURDIn0=