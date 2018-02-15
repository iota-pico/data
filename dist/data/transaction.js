"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const address_1 = require("./address");
const hash_1 = require("./hash");
const signatureFragment_1 = require("./signatureFragment");
const tag_1 = require("./tag");
const tryteNumber_1 = require("./tryteNumber");
const trytes_1 = require("./trytes");
/**
 * A class for handling transactions.
 */
class Transaction {
    /* @internal */
    constructor() {
    }
    /**
     * * Create instance of transaction from parameters.
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
    static fromParams(signatureMessageFragment, address, value, obsoleteTag, timestamp, currentIndex, lastIndex, bundle, trunkTransaction, branchTransaction, tag, attachmentTimestamp, attachmentTimestampLowerBound, attachmentTimestampUpperBound, nonce) {
        const tx = new Transaction();
        tx.signatureMessageFragment = signatureMessageFragment;
        tx.address = address;
        tx.value = tryteNumber_1.TryteNumber.fromNumber(value, 11);
        tx.obsoleteTag = obsoleteTag;
        tx.timestamp = tryteNumber_1.TryteNumber.fromNumber(timestamp);
        tx.currentIndex = tryteNumber_1.TryteNumber.fromNumber(currentIndex);
        tx.lastIndex = tryteNumber_1.TryteNumber.fromNumber(lastIndex);
        tx.bundle = bundle;
        tx.trunkTransaction = trunkTransaction;
        tx.branchTransaction = branchTransaction;
        tx.tag = tag;
        tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestamp);
        tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampLowerBound);
        tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(attachmentTimestampUpperBound);
        tx.nonce = nonce;
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
        if (check !== Transaction.CHECK_VALUE) {
            throw new coreError_1.CoreError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }
        const tx = new Transaction();
        tx.signatureMessageFragment = signatureFragment_1.SignatureFragment.create(trytes.sub(0, signatureFragment_1.SignatureFragment.LENGTH));
        tx.address = address_1.Address.create(trytes.sub(2187, address_1.Address.LENGTH));
        tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2268, 11), 11);
        tx.obsoleteTag = tag_1.Tag.create(trytes.sub(2295, tag_1.Tag.LENGTH));
        tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2322, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2331, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2340, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.bundle = hash_1.Hash.create(trytes.sub(2349, hash_1.Hash.LENGTH));
        tx.trunkTransaction = hash_1.Hash.create(trytes.sub(2430, hash_1.Hash.LENGTH));
        tx.branchTransaction = hash_1.Hash.create(trytes.sub(2511, hash_1.Hash.LENGTH));
        tx.tag = tag_1.Tag.create(trytes.sub(2592, tag_1.Tag.LENGTH));
        tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2619, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2628, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(2637, tryteNumber_1.TryteNumber.LENGTH_9));
        tx.nonce = tag_1.Tag.create(trytes.sub(2646, tag_1.Tag.LENGTH));
        return tx;
    }
    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    toTrytes() {
        if (this.signatureMessageFragment === undefined || this.signatureMessageFragment === null) {
            throw new coreError_1.CoreError(`The hash must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }
        if (this.address === undefined || this.address === null) {
            throw new coreError_1.CoreError(`The address must be set to create transaction trytes`, { address: this.address });
        }
        if (this.obsoleteTag === undefined || this.obsoleteTag === null) {
            throw new coreError_1.CoreError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }
        if (this.bundle === undefined || this.bundle === null) {
            throw new coreError_1.CoreError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }
        if (this.trunkTransaction === undefined || this.trunkTransaction === null) {
            throw new coreError_1.CoreError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }
        if (this.branchTransaction === undefined || this.branchTransaction === null) {
            throw new coreError_1.CoreError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }
        if (this.nonce === undefined || this.nonce === null) {
            throw new coreError_1.CoreError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
        }
        const trytes = this.signatureMessageFragment.toTrytes().toString()
            + this.address.toTrytes().toString()
            + (this.value || Transaction.EMPTY_11).toTrytes().toString()
            + Transaction.CHECK_VALUE
            + this.obsoleteTag.toTrytes().toString()
            + (this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + this.bundle.toTrytes().toString()
            + this.trunkTransaction.toTrytes().toString()
            + this.branchTransaction.toTrytes().toString()
            + (this.tag || this.obsoleteTag).toTrytes().toString()
            + (this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + (this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toTrytes().toString()
            + this.nonce.toTrytes().toString();
        const length = trytes.length;
        if (length !== Transaction.LENGTH) {
            throw new coreError_1.CoreError(`The trytes must be ${Transaction.LENGTH} in length ${length}`, { length });
        }
        return trytes_1.Trytes.create(trytes);
    }
}
/* The valid length for a transaction */
Transaction.LENGTH = 2673;
/* @internal */
Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
/* @internal */
Transaction.CHECK_VALUE = "9".repeat(16);
exports.Transaction = Transaction;
