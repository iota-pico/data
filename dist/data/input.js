"use strict";
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
