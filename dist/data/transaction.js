Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
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
        if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
            throw new coreError_1.CoreError("The trytes should be a valid Trytes object");
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
            throw new coreError_1.CoreError(`The signatureMessageFragment must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
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
/* Additional check value always all 9s */
Transaction.CHECK_VALUE = "9".repeat(16);
/* @internal */
Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLDRFQUF5RTtBQUN6RSx1Q0FBb0M7QUFDcEMsaUNBQThCO0FBQzlCLDJEQUF3RDtBQUN4RCwrQkFBNEI7QUFDNUIsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBMEJJLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyx3QkFBMkMsRUFDM0MsT0FBZ0IsRUFDaEIsS0FBYSxFQUNiLFdBQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE1BQVksRUFDWixnQkFBc0IsRUFDdEIsaUJBQXVCLEVBQ3ZCLEdBQVEsRUFDUixtQkFBMkIsRUFDM0IsNkJBQXFDLEVBQ3JDLDZCQUFxQyxFQUNyQyxLQUFVO1FBQy9CLE1BQU0sRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxTQUFTLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLFlBQVksR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsU0FBUyxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxD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