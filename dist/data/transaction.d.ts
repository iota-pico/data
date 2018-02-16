import { Address } from "./address";
import { Hash } from "./hash";
import { SignatureFragment } from "./signatureFragment";
import { Tag } from "./tag";
import { TryteNumber } from "./tryteNumber";
import { Trytes } from "./trytes";
/**
 * A class for handling transactions.
 */
export declare class Transaction {
    static readonly LENGTH: number;
    static readonly CHECK_VALUE: string;
    signatureMessageFragment: SignatureFragment;
    address: Address;
    value: TryteNumber;
    obsoleteTag: Tag;
    timestamp: TryteNumber;
    currentIndex: TryteNumber;
    lastIndex: TryteNumber;
    bundle: Hash;
    trunkTransaction: Hash;
    branchTransaction: Hash;
    tag: Tag;
    attachmentTimestamp: TryteNumber;
    attachmentTimestampLowerBound: TryteNumber;
    attachmentTimestampUpperBound: TryteNumber;
    nonce: Tag;
    /**
     * Create instance of transaction from parameters.
     * @param signatureMessageFragment The signature message fragment.
     * @param address The address.
     * @param value The value.
     * @param obsoleteTag Obsolete transaction tag.
     * @param timestamp The timestamp.
     * @param currentIndex The current index.
     * @param lastIndex The last index.
     * @param bundle The bundle.
     * @param trunkTransaction The trunk transaction.
     * @param branchTransaction The branch transaction.
     * @param tag The tag.
     * @param attachmentTimestamp The attachment timestamp.
     * @param attachmentTimestampLowerBound The attachment timestamp lower bound.
     * @param attachmentTimestampUpperBound  The attachment timestamp upper bound.
     * @param nonce The nonce.
     * @return New instance of transaction.
     */
    static fromParams(signatureMessageFragment: SignatureFragment, address: Address, value: number, obsoleteTag: Tag, timestamp: number, currentIndex: number, lastIndex: number, bundle: Hash, trunkTransaction: Hash, branchTransaction: Hash, tag: Tag, attachmentTimestamp: number, attachmentTimestampLowerBound: number, attachmentTimestampUpperBound: number, nonce: Tag): Transaction;
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
