import { Address } from "./address";
import { Tag } from "./tag";
import { Trytes } from "./trytes";
/**
 * A class for handling transfers.
 */
export declare class Transfer {
    address: Address;
    value: number;
    message: Trytes;
    tag: Tag;
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @return New instance of Transfer.
     */
    static fromParams(address: Address, value: number, message: Trytes, tag: Tag): Transfer;
}
