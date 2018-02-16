import { Address } from "./address";
import { Tag } from "./tag";
import { Trytes } from "./trytes";

/**
 * A class for handling transfers.
 */
export class Transfer {
    public address: Address;
    public value: number;
    public message: Trytes;
    public tag: Tag;

    /* @internal */
    private constructor() {
    }

    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @return New instance of Transfer.
     */
    public static fromParams(address: Address,
                             value: number,
                             message: Trytes,
                             tag: Tag): Transfer {
        const transfer = new Transfer();
        transfer.address = address;
        transfer.value = value;
        transfer.message = message;
        transfer.tag = tag;
        return transfer;
    }
}
