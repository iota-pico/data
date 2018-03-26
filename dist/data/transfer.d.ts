import { Address } from "./address";
import { Tag } from "./tag";
import { Trytes } from "./trytes";
/**
 * A class for handling transfers.
 */
export declare class Transfer {
    /**
     * The address to send the transfer to.
     */
    address: Address;
    /**
     * The value to send.
     */
    value: number;
    /**
     * Message to include with the transfer.
     */
    message: Trytes;
    /**
     * Tag for the transfer.
     */
    tag: Tag;
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @returns New instance of Transfer.
     */
    static fromParams(address: Address, value: number, message: Trytes, tag: Tag): Transfer;
}
