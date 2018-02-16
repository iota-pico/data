import { Address } from "./address";
import { AddressSecurity } from "./addressSecurity";
/**
 * A class for handling inputs.
 */
export declare class Input {
    address: Address;
    security: AddressSecurity;
    keyIndex: number;
    balance: number;
    /**
     * Create instance of input from parameters.
     * @param address The address.
     * @param security The address security.
     * @param keyIndex The key index.
     * @param balance The balance of the address.
     * @return New instance of Input.
     */
    static fromParams(address: Address, security: AddressSecurity, keyIndex: number, balance: number): Input;
}
