import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
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
        if (!ObjectHelper.isType(address, Address)) {
            throw new CoreError("The address should be a valid Address object");
        }

        if (!NumberHelper.isInteger(value) || value < 0) {
            throw new CoreError("The value should be a number >= 0");
        }

        if (!ObjectHelper.isType(message, Trytes)) {
            throw new CoreError("The message should be a valid Trytes object");
        }

        if (!ObjectHelper.isType(tag, Tag)) {
            throw new CoreError("The tag should be a valid Tag object");
        }

        const transfer = new Transfer();
        transfer.address = address;
        transfer.value = value;
        transfer.message = message;
        transfer.tag = tag;
        return transfer;
    }
}
