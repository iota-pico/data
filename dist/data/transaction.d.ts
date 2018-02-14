import { Address } from "./address";
import { Tag } from "./tag";
import { Trytes } from "./trytes";
/**
 * A class for handling transactions.
 */
export declare class Transaction {
    static readonly LENGTH: number;
    signatureMessageFragment: Trytes;
    address: Address;
    value: number;
    obsoleteTag: Tag;
    timestamp: number;
    currentIndex: number;
    lastIndex: number;
    bundle: Trytes;
    trunkTransaction: Trytes;
    branchTransaction: Trytes;
    tag: Tag;
    attachmentTimestamp: number;
    attachmentTimestampLowerBound: number;
    attachmentTimestampUpperBound: number;
    nonce: Trytes;
    /**
     * Create instance of transaction from parameters.
     * @param address The address for the transaction.
     * @param value The value for the transaction.
     * @param obsoleteTag The obsolete tag for the transaction/
     * @returns An instance of this.
     */
    static fromParams(address: Address, value: number, obsoleteTag: Tag, tag: Tag, timestamp: number): Transaction;
    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */
    static fromTrytes(trytes: Trytes): Transaction;
    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    toTrytes(): Trytes;
}
