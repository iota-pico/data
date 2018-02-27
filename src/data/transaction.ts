import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { DataError } from "../error/dataError";
import { Address } from "./address";
import { Hash } from "./hash";
import { SignatureFragment } from "./signatureFragment";
import { Tag } from "./tag";
import { TryteNumber } from "./tryteNumber";
import { Trytes } from "./trytes";

/**
 * A class for handling transactions.
 */
export class Transaction {
    /* The valid length for a transaction */
    public static readonly LENGTH: number = 2673;

    /* Additional check value always all 9s */
    public static readonly CHECK_VALUE: string = "9".repeat(16);

    /* @internal */
    private static readonly EMPTY_11: TryteNumber = TryteNumber.fromNumber(0, 11);

    public signatureMessageFragment: SignatureFragment;
    public address: Address;
    public value: TryteNumber;
    public obsoleteTag: Tag;
    public timestamp: TryteNumber;
    public currentIndex: TryteNumber;
    public lastIndex: TryteNumber;
    public bundle: Hash;
    public trunkTransaction: Hash;
    public branchTransaction: Hash;
    public tag: Tag;
    public attachmentTimestamp: TryteNumber;
    public attachmentTimestampLowerBound: TryteNumber;
    public attachmentTimestampUpperBound: TryteNumber;
    public nonce: Tag;

    /* @internal */
    private constructor() {
    }

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
    public static fromParams(signatureMessageFragment: SignatureFragment,
                             address: Address,
                             value: number,
                             obsoleteTag: Tag,
                             timestamp: number,
                             currentIndex: number,
                             lastIndex: number,
                             bundle: Hash,
                             trunkTransaction: Hash,
                             branchTransaction: Hash,
                             tag: Tag,
                             attachmentTimestamp: number,
                             attachmentTimestampLowerBound: number,
                             attachmentTimestampUpperBound: number,
                             nonce: Tag): Transaction {
        const tx = new Transaction();
        tx.signatureMessageFragment = signatureMessageFragment;
        tx.address = address;
        tx.value = TryteNumber.fromNumber(value, 11);
        tx.obsoleteTag = obsoleteTag;
        tx.timestamp = TryteNumber.fromNumber(timestamp);
        tx.currentIndex = TryteNumber.fromNumber(currentIndex);
        tx.lastIndex = TryteNumber.fromNumber(lastIndex);
        tx.bundle = bundle;
        tx.trunkTransaction = trunkTransaction;
        tx.branchTransaction = branchTransaction;
        tx.tag = tag;
        tx.attachmentTimestamp = TryteNumber.fromNumber(attachmentTimestamp);
        tx.attachmentTimestampLowerBound = TryteNumber.fromNumber(attachmentTimestampLowerBound);
        tx.attachmentTimestampUpperBound = TryteNumber.fromNumber(attachmentTimestampUpperBound);
        tx.nonce = nonce;
        return tx;
    }

    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */
    public static fromTrytes(trytes: Trytes): Transaction {
        if (!ObjectHelper.isType(trytes, Trytes)) {
            throw new DataError("The trytes should be a valid Trytes object");
        }

        const length = trytes.length();
        if (length !== Transaction.LENGTH) {
            throw new DataError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }

        const checkIndexStart = 2279;
        const checkIndexLength = 16;
        const check = trytes.sub(checkIndexStart, checkIndexLength).toString();

        if (check !== Transaction.CHECK_VALUE) {
            throw new DataError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }

        const tx = new Transaction();

        tx.signatureMessageFragment = SignatureFragment.fromTrytes(trytes.sub(0, SignatureFragment.LENGTH));
        tx.address = Address.fromTrytes(trytes.sub(2187, Address.LENGTH));
        tx.value = TryteNumber.fromTrytes(trytes.sub(2268, 11), 11);
        tx.obsoleteTag = Tag.fromTrytes(trytes.sub(2295, Tag.LENGTH));
        tx.timestamp = TryteNumber.fromTrytes(trytes.sub(2322, TryteNumber.LENGTH_9));
        tx.currentIndex = TryteNumber.fromTrytes(trytes.sub(2331, TryteNumber.LENGTH_9));
        tx.lastIndex = TryteNumber.fromTrytes(trytes.sub(2340, TryteNumber.LENGTH_9));
        tx.bundle = Hash.fromTrytes(trytes.sub(2349, Hash.LENGTH));
        tx.trunkTransaction = Hash.fromTrytes(trytes.sub(2430, Hash.LENGTH));
        tx.branchTransaction = Hash.fromTrytes(trytes.sub(2511, Hash.LENGTH));
        tx.tag = Tag.fromTrytes(trytes.sub(2592, Tag.LENGTH));
        tx.attachmentTimestamp = TryteNumber.fromTrytes(trytes.sub(2619, TryteNumber.LENGTH_9));
        tx.attachmentTimestampLowerBound = TryteNumber.fromTrytes(trytes.sub(2628, TryteNumber.LENGTH_9));
        tx.attachmentTimestampUpperBound = TryteNumber.fromTrytes(trytes.sub(2637, TryteNumber.LENGTH_9));
        tx.nonce = Tag.fromTrytes(trytes.sub(2646, Tag.LENGTH));

        return tx;
    }

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    public toTrytes(): Trytes {
        if (this.signatureMessageFragment === undefined || this.signatureMessageFragment === null) {
            throw new DataError(`The signatureMessageFragment must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }

        if (this.address === undefined || this.address === null) {
            throw new DataError(`The address must be set to create transaction trytes`, { address: this.address });
        }

        if (this.obsoleteTag === undefined || this.obsoleteTag === null) {
            throw new DataError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }

        if (this.bundle === undefined || this.bundle === null) {
            throw new DataError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }

        if (this.trunkTransaction === undefined || this.trunkTransaction === null) {
            throw new DataError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }

        if (this.branchTransaction === undefined || this.branchTransaction === null) {
            throw new DataError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }

        if (this.nonce === undefined || this.nonce === null) {
            throw new DataError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
        }

        const trytes = this.signatureMessageFragment.toTrytes().toString()
            + this.address.toTrytes().toString()
            + (this.value || Transaction.EMPTY_11).toTrytes().toString()
            + Transaction.CHECK_VALUE
            + this.obsoleteTag.toTrytes().toString()
            + (this.timestamp || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.currentIndex || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.lastIndex || TryteNumber.EMPTY_9).toTrytes().toString()
            + this.bundle.toTrytes().toString()
            + this.trunkTransaction.toTrytes().toString()
            + this.branchTransaction.toTrytes().toString()
            + (this.tag || this.obsoleteTag).toTrytes().toString()
            + (this.attachmentTimestamp || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampLowerBound || TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampUpperBound || TryteNumber.EMPTY_9).toTrytes().toString()
            + this.nonce.toTrytes().toString();

        const length = trytes.length;
        if (length !== Transaction.LENGTH) {
            throw new DataError(`The trytes must be ${Transaction.LENGTH} in length ${length}`, { length });
        }

        return Trytes.fromString(trytes);
    }

}
