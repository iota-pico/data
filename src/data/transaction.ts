import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { Address } from "./address";
import { Tag } from "./tag";
import { Trits } from "./trits";
import { Trytes } from "./trytes";

/**
 * A class for handling transactions.
 */
export class Transaction {
    /* The valid length for a tag without a checksum */
    public static readonly LENGTH: number = 2673;

    /* @internal */
    private static readonly NUMBER_TRITS_LENGTH: number = 27;

    public signatureMessageFragment: Trytes;
    public address: Address;
    public value: number;
    public obsoleteTag: Tag;
    public timestamp: number;
    public currentIndex: number;
    public lastIndex: number;
    public bundle: Trytes;
    public trunkTransaction: Trytes;
    public branchTransaction: Trytes;

    public tag: Tag;
    public attachmentTimestamp: number;
    public attachmentTimestampLowerBound: number;
    public attachmentTimestampUpperBound: number;
    public nonce: Trytes;

    /* @internal */
    private constructor() {
    }

    /**
     * Create instance of transaction from parameters.
     * @param address The address for the transaction.
     * @param value The value for the transaction.
     * @param obsoleteTag The obsolete tag for the transaction/
     * @returns An instance of this.
     */
    public static fromParams(address: Address, value: number, obsoleteTag: Tag, tag: Tag, timestamp: number): Transaction {
        if (address === null || address === undefined) {
            throw new CoreError("The address can not be undefined or null");
        }

        const tx = new Transaction();
        tx.address = address;
        tx.value = value;
        tx.obsoleteTag = obsoleteTag;
        tx.tag = tag;
        tx.timestamp = timestamp;
        return tx;
    }

    /**
     * Create instance of transaction from trytes.
     * @param trytes The trytes for the this.
     * @returns An instance of this.
     */
    public static fromTrytes(trytes: Trytes): Transaction {
        if (trytes === null || trytes === undefined) {
            throw new CoreError("The trytes can not be undefined or null");
        }

        const length = trytes.length();
        if (length !== Transaction.LENGTH) {
            throw new CoreError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }

        const checkIndexStart = 2279;
        const checkIndexLength = 16;
        const check = trytes.sub(checkIndexStart, checkIndexLength).toString();

        const checkRegEx = new RegExp(`^9{${checkIndexLength}}$`);
        if (!checkRegEx.test(check)) {
            throw new CoreError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }

        const transactionTrits = Trits.fromTrytes(trytes);

        const tx = new Transaction();
        tx.signatureMessageFragment = trytes.sub(0, 2187);
        tx.address = Address.create(trytes.sub(2187, Address.LENGTH));
        tx.value = transactionTrits.sub(6804, 33).toNumber();
        tx.obsoleteTag = Tag.create(trytes.sub(2295, Tag.LENGTH));
        tx.timestamp = transactionTrits.sub(6966, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.currentIndex = transactionTrits.sub(6993, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.lastIndex = transactionTrits.sub(7020, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.bundle = trytes.sub(2349, 81);
        tx.trunkTransaction = trytes.sub(2430, 81);
        tx.branchTransaction = trytes.sub(2511, 81);

        tx.tag = Tag.create(trytes.sub(2592, Tag.LENGTH));
        tx.attachmentTimestamp = transactionTrits.sub(7857, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.attachmentTimestampLowerBound = transactionTrits.sub(7884, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.attachmentTimestampUpperBound = transactionTrits.sub(7911, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.nonce = trytes.sub(2646, 27);

        return tx;
    }

    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    public toTrytes(): Trytes {
        if (!this.signatureMessageFragment) {
            throw new CoreError(`The hash must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }

        if (!this.address) {
            throw new CoreError(`The address must be set to create transaction trytes`, { address: this.address });
        }

        if (!this.obsoleteTag) {
            throw new CoreError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }

        if (!this.bundle) {
            throw new CoreError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }

        if (!this.trunkTransaction) {
            throw new CoreError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }

        if (!this.branchTransaction) {
            throw new CoreError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }

        if (!this.nonce) {
            throw new CoreError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
        }

        const valueTrits = Trits.fromNumber(this.value || 0).toTritsArray();
        while (valueTrits.length < 81) {
            valueTrits[valueTrits.length] = 0;
        }

        const timestampTrits = Trits.fromNumber(this.timestamp || 0).toTritsArray();
        while (timestampTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            timestampTrits[timestampTrits.length] = 0;
        }

        const currentIndexTrits = Trits.fromNumber(this.currentIndex || 0).toTritsArray();
        while (currentIndexTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            currentIndexTrits[currentIndexTrits.length] = 0;
        }

        const lastIndexTrits = Trits.fromNumber(this.lastIndex).toTritsArray();
        while (lastIndexTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            lastIndexTrits[lastIndexTrits.length] = 0;
        }

        const attachmentTimestampTrits = Trits.fromNumber(this.attachmentTimestamp || 0).toTritsArray();
        while (attachmentTimestampTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampTrits[attachmentTimestampTrits.length] = 0;
        }

        const attachmentTimestampLowerBoundTrits = Trits.fromNumber(this.attachmentTimestampLowerBound || 0).toTritsArray();
        while (attachmentTimestampLowerBoundTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampLowerBoundTrits[attachmentTimestampLowerBoundTrits.length] = 0;
        }

        const attachmentTimestampUpperBoundTrits = Trits.fromNumber(this.attachmentTimestampUpperBound || 0).toTritsArray();
        while (attachmentTimestampUpperBoundTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampUpperBoundTrits[attachmentTimestampUpperBoundTrits.length] = 0;
        }

        const trytes = this.signatureMessageFragment.toString()
                + this.address.toTrytes().toString()
                + Trits.fromTritsArray(valueTrits).toTrytes().toString()
                + this.obsoleteTag.toTrytes().toString()
                + Trits.fromTritsArray(timestampTrits).toTrytes().toString()
                + Trits.fromTritsArray(currentIndexTrits).toTrytes().toString()
                + Trits.fromTritsArray(lastIndexTrits).toTrytes().toString()
                + this.bundle.toString()
                + this.trunkTransaction.toString()
                + this.branchTransaction.toString()
                + (this.tag || this.obsoleteTag).toTrytes().toString()
                + Trits.fromTritsArray(attachmentTimestampTrits).toTrytes().toString()
                + Trits.fromTritsArray(attachmentTimestampLowerBoundTrits).toTrytes().toString()
                + Trits.fromTritsArray(attachmentTimestampUpperBoundTrits).toTrytes().toString()
                + this.nonce.toString();

        const length = trytes.length;
        if (length !== Transaction.LENGTH) {
            throw new CoreError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }

        return Trytes.create(trytes);
    }

}
