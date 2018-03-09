import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Address } from "./address";
import { AddressSecurity } from "./addressSecurity";

/**
 * A class for handling inputs.
 */
export class Input {
    /**
     * The address used for a transfer input.
     */
    public address: Address;
    /**
     * The security level of the address.
     */
    public security: AddressSecurity;
    /**
     * The index of the address from the seed.
     */
    public keyIndex: number;
    /**
     * The balance of the input.
     */
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
        if (!ObjectHelper.isType(address, Address)) {
            throw new DataError("The address should be a valid Address object");
        }

        if (!NumberHelper.isInteger(security) || security < AddressSecurity.low || security > AddressSecurity.high) {
            throw new DataError(`The security should be a number between ${AddressSecurity.low} and ${AddressSecurity.high}`);
        }

        if (!NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
            throw new DataError("The keyIndex should be a number >= 0");
        }

        if (!NumberHelper.isInteger(balance) || balance < 0) {
            throw new DataError("The balance should be a number >= 0");
        }

        const input = new Input();
        input.address = address;
        input.security = security;
        input.keyIndex = keyIndex;
        input.balance = balance;
        return input;
    }
}
