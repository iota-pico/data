import { Address } from "./address";
import { AddressSecurity } from "./addressSecurity";
/**
 * A class for handling inputs.
 */
export declare class Input {
    /**
     * The address used for a transfer input.
     */
    address: Address;
    /**
     * The security level of the address.
     */
    security: AddressSecurity;
    /**
     * The index of the address from the seed.
     */
    keyIndex: number;
    /**
     * The balance of the input.
     */
    balance: number;
    /**
     * Create instance of input from parameters.
     * @param address The address.
     * @param security The address security.
     * @param keyIndex The key index.
     * @param balance The balance of the address.
     * @returns New instance of Input.
     */
    static fromParams(address: Address, security: AddressSecurity, keyIndex: number, balance: number): Input;
}
