Object.defineProperty(exports, "__esModule", { value: true });
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
     * @return New instance of Input.
     */
    static fromParams(address, security, keyIndex, balance) {
        const input = new Input();
        input.address = address;
        input.security = security;
        input.keyIndex = keyIndex;
        input.balance = balance;
        return input;
    }
}
exports.Input = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS9pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7O0dBRUc7QUFDSDtJQU1JLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFnQixFQUNoQixRQUF5QixFQUN6QixRQUFnQixFQUNoQixPQUFlO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBQ0o7QUE3QkQsc0JBNkJDIn0=