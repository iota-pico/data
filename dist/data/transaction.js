"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const address_1 = require("./address");
const tag_1 = require("./tag");
const trits_1 = require("./trits");
const trytes_1 = require("./trytes");
/**
 * A class for handling transactions.
 */
class Transaction {
    /* @internal */
    constructor() {
    }
    /**
     * Create instance of transaction from parameters.
     * @param address The address for the transaction.
     * @param value The value for the transaction.
     * @param obsoleteTag The obsolete tag for the transaction/
     * @returns An instance of this.
     */
    static fromParams(address, value, obsoleteTag, tag, timestamp) {
        if (address === null || address === undefined) {
            throw new coreError_1.CoreError("The address can not be undefined or null");
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
    static fromTrytes(trytes) {
        if (trytes === null || trytes === undefined) {
            throw new coreError_1.CoreError("The trytes can not be undefined or null");
        }
        const length = trytes.length();
        if (length !== Transaction.LENGTH) {
            throw new coreError_1.CoreError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }
        const checkIndexStart = 2279;
        const checkIndexLength = 16;
        const check = trytes.sub(checkIndexStart, checkIndexLength).toString();
        const checkRegEx = new RegExp(`^9{${checkIndexLength}}$`);
        if (!checkRegEx.test(check)) {
            throw new coreError_1.CoreError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }
        const transactionTrits = trits_1.Trits.fromTrytes(trytes);
        const tx = new Transaction();
        tx.signatureMessageFragment = trytes.sub(0, 2187);
        tx.address = address_1.Address.create(trytes.sub(2187, address_1.Address.LENGTH));
        tx.value = transactionTrits.sub(6804, 33).toNumber();
        tx.obsoleteTag = tag_1.Tag.create(trytes.sub(2295, tag_1.Tag.LENGTH));
        tx.timestamp = transactionTrits.sub(6966, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.currentIndex = transactionTrits.sub(6993, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.lastIndex = transactionTrits.sub(7020, Transaction.NUMBER_TRITS_LENGTH).toNumber();
        tx.bundle = trytes.sub(2349, 81);
        tx.trunkTransaction = trytes.sub(2430, 81);
        tx.branchTransaction = trytes.sub(2511, 81);
        tx.tag = tag_1.Tag.create(trytes.sub(2592, tag_1.Tag.LENGTH));
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
    toTrytes() {
        if (!this.signatureMessageFragment) {
            throw new coreError_1.CoreError(`The hash must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }
        if (!this.address) {
            throw new coreError_1.CoreError(`The address must be set to create transaction trytes`, { address: this.address });
        }
        if (!this.obsoleteTag) {
            throw new coreError_1.CoreError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }
        if (!this.bundle) {
            throw new coreError_1.CoreError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }
        if (!this.trunkTransaction) {
            throw new coreError_1.CoreError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }
        if (!this.branchTransaction) {
            throw new coreError_1.CoreError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }
        if (!this.nonce) {
            throw new coreError_1.CoreError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
        }
        const valueTrits = trits_1.Trits.fromNumber(this.value || 0).toTritsArray();
        while (valueTrits.length < 81) {
            valueTrits[valueTrits.length] = 0;
        }
        const timestampTrits = trits_1.Trits.fromNumber(this.timestamp || 0).toTritsArray();
        while (timestampTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            timestampTrits[timestampTrits.length] = 0;
        }
        const currentIndexTrits = trits_1.Trits.fromNumber(this.currentIndex || 0).toTritsArray();
        while (currentIndexTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            currentIndexTrits[currentIndexTrits.length] = 0;
        }
        const lastIndexTrits = trits_1.Trits.fromNumber(this.lastIndex).toTritsArray();
        while (lastIndexTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            lastIndexTrits[lastIndexTrits.length] = 0;
        }
        const attachmentTimestampTrits = trits_1.Trits.fromNumber(this.attachmentTimestamp || 0).toTritsArray();
        while (attachmentTimestampTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampTrits[attachmentTimestampTrits.length] = 0;
        }
        const attachmentTimestampLowerBoundTrits = trits_1.Trits.fromNumber(this.attachmentTimestampLowerBound || 0).toTritsArray();
        while (attachmentTimestampLowerBoundTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampLowerBoundTrits[attachmentTimestampLowerBoundTrits.length] = 0;
        }
        const attachmentTimestampUpperBoundTrits = trits_1.Trits.fromNumber(this.attachmentTimestampUpperBound || 0).toTritsArray();
        while (attachmentTimestampUpperBoundTrits.length < Transaction.NUMBER_TRITS_LENGTH) {
            attachmentTimestampUpperBoundTrits[attachmentTimestampUpperBoundTrits.length] = 0;
        }
        const trytes = this.signatureMessageFragment.toString()
            + this.address.toTrytes().toString()
            + trits_1.Trits.fromTritsArray(valueTrits).toTrytes().toString()
            + this.obsoleteTag.toTrytes().toString()
            + trits_1.Trits.fromTritsArray(timestampTrits).toTrytes().toString()
            + trits_1.Trits.fromTritsArray(currentIndexTrits).toTrytes().toString()
            + trits_1.Trits.fromTritsArray(lastIndexTrits).toTrytes().toString()
            + this.bundle.toString()
            + this.trunkTransaction.toString()
            + this.branchTransaction.toString()
            + (this.tag || this.obsoleteTag).toTrytes().toString()
            + trits_1.Trits.fromTritsArray(attachmentTimestampTrits).toTrytes().toString()
            + trits_1.Trits.fromTritsArray(attachmentTimestampLowerBoundTrits).toTrytes().toString()
            + trits_1.Trits.fromTritsArray(attachmentTimestampUpperBoundTrits).toTrytes().toString()
            + this.nonce.toString();
        const length = trytes.length;
        if (length !== Transaction.LENGTH) {
            throw new coreError_1.CoreError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }
        return trytes_1.Trytes.create(trytes);
    }
}
/* The valid length for a tag without a checksum */
Transaction.LENGTH = 2673;
/* @internal */
Transaction.NUMBER_TRITS_LENGTH = 27;
exports.Transaction = Transaction;
