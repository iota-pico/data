"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A class for handling transfers.
 */
class Transfer {
    /* @internal */
    constructor() {
    }
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @return New instance of Transfer.
     */
    static fromParams(address, value, message, tag) {
        const transfer = new Transfer();
        transfer.address = address;
        transfer.value = value;
        transfer.message = message;
        transfer.tag = tag;
        return transfer;
    }
}
exports.Transfer = Transfer;
