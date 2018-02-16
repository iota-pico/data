"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const hash_1 = require("./hash");
const signatureFragment_1 = require("./signatureFragment");
const tag_1 = require("./tag");
const transaction_1 = require("./transaction");
const tryteNumber_1 = require("./tryteNumber");
/**
 * A class for handling bundles.
 */
class Bundle {
    /**
     * Create a new instance of Bundle.
     */
    constructor() {
        this.transactions = [];
    }
    /**
     * Add new transactions to the bundle.
     * @param signatureMessageLength The number of transactions to add.
     * @param address The address for the transactions.
     * @param value The value for the first of the transactions.
     * @param tag The tag to include in the transactions.
     * @param timestamp The timestamp for the transactions.
     */
    addTransactions(signatureMessageLength, address, value, tag, timestamp) {
        for (let i = 0; i < signatureMessageLength; i++) {
            this.transactions.push(transaction_1.Transaction.fromParams(undefined, address, i === 0 ? value : 0, tag, timestamp, undefined, undefined, undefined, undefined, undefined, tag, undefined, undefined, undefined, undefined));
        }
    }
    /**
     * Add signature fragments to the bundle.
     * @param signatureFragments The signature fragments to add to the bundle transactions.
     */
    addSignatureFragments(signatureFragments) {
        if (signatureFragments === undefined || signatureFragments === null) {
            throw new coreError_1.CoreError("The signatureFragments should not be undefined or null");
        }
        for (let i = 0; i < this.transactions.length; i++) {
            this.transactions[i].signatureMessageFragment = (signatureFragments[i] || signatureFragment_1.SignatureFragment.EMPTY);
            this.transactions[i].trunkTransaction = hash_1.Hash.EMPTY;
            this.transactions[i].branchTransaction = hash_1.Hash.EMPTY;
            this.transactions[i].attachmentTimestamp = tryteNumber_1.TryteNumber.EMPTY_9;
            this.transactions[i].attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.EMPTY_9;
            this.transactions[i].attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.EMPTY_9;
            this.transactions[i].nonce = tag_1.Tag.EMPTY;
        }
    }
}
exports.Bundle = Bundle;
