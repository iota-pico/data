import { Address } from "./address";
import { AddressSecurity } from "./addressSecurity";

/**
 * A class for handling inputs.
 */
export class Input {
    public address: Address;
    public security: AddressSecurity;
    public keyIndex: number;
    public balance: number;

    /* @internal */
    private constructor() {
    }

    /**
     * Create instance of input from parameters.
     * @param address The address.
     * @param security The address security.
     * @param keyIndex The key index.
     * @param balance The balance of the address.
     * @return New instance of Input.
     */
    public static fromParams(address: Address,
                             security: AddressSecurity,
                             keyIndex: number,
                             balance: number): Input {
        const input = new Input();
        input.address = address;
        input.security = security;
        input.keyIndex = keyIndex;
        input.balance = balance;
        return input;
    }
}
