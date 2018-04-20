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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFDL0MsdUNBQW9DO0FBQ3BDLHVEQUFvRDtBQUVwRDs7R0FFRztBQUNIO0lBa0JJLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFnQixFQUNoQixRQUF5QixFQUN6QixRQUFnQixFQUNoQixPQUFlO1FBQ3BDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLGlDQUFlLENBQUMsR0FBRyxJQUFJLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLElBQUksRUFBRTtZQUN4RyxNQUFNLElBQUkscUJBQVMsQ0FBQywyQ0FBMkMsaUNBQWUsQ0FBQyxHQUFHLFFBQVEsaUNBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3JIO1FBRUQsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxJQUFJLHFCQUFTLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzFCLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Q0FDSjtBQXpERCxzQkF5REMifQ==