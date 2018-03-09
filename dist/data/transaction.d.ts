import { Address } from "./address";
import { Hash } from "./hash";
import { SignatureMessageFragment } from "./signatureMessageFragment";
import { Tag } from "./tag";
import { TryteNumber } from "./tryteNumber";
import { Trytes } from "./trytes";
/**
 * A class for handling transactions.
 */
export declare class Transaction {
    /**
     * The length of a valid transaction (2673).
     */
    static readonly LENGTH: number;
    /**
     * The length of a valid check value (16).
     */
    static readonly CHECK_VALUE_LENGTH: number;
    /**
     * The check value for bundles all 9s.
     */
    static readonly CHECK_VALUE: string;
    /**
     * The signature message fragment for the transaction.
     */
    signatureMessageFragment: SignatureMessageFragment;
    /**
     * The address for the transaction.
     */
    address: Address;
    /**
     * The value for the transaction.
     */
    value: TryteNumber;
    /**
     * The obsolete tag for the transaction.
     */
    obsoleteTag: Tag;
    /**
     * The timestamp for the transaction.
     */
    timestamp: TryteNumber;
    /**
     * The current index for the transaction.
     */
    currentIndex: TryteNumber;
    /**
     * The last index for the transaction bundle.
     */
    lastIndex: TryteNumber;
    /**
     * The bundle hash for the transaction.
     */
    bundle: Hash;
    /**
     * The trunk transaction for the transaction.
     */
    trunkTransaction: Hash;
    /**
     * The branch transaction for the transaction.
     */
    branchTransaction: Hash;
    /**
     * The tag for the transaction.
     */
    tag: Tag;
    /**
     * The attachment timestamp for the transaction.
     */
    attachmentTimestamp: TryteNumber;
    /**
     * The attachment timestamp lower bound for the transaction.
     */
    attachmentTimestampLowerBound: TryteNumber;
    /**
     * The attachment timestamp upper bound for the transaction.
     */
    attachmentTimestampUpperBound: TryteNumber;
    /**
     * The nonce for the transaction.
     */
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
    static fromParams(signatureMessageFragment: SignatureMessageFragment, address: Address, value: number, obsoleteTag: Tag, timestamp: number, currentIndex: number, lastIndex: number, bundle: Hash, trunkTransaction: Hash, branchTransaction: Hash, tag: Tag, attachmentTimestamp: number, attachmentTimestampLowerBound: number, attachmentTimestampUpperBound: number, nonce: Tag): Transaction;
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
    /**
     * Get the string view of the object.
     * @returns string of the trytes.
     */
    toString(): string;
}
