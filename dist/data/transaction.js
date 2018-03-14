Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const address_1 = require("./address");
const hash_1 = require("./hash");
const signatureMessageFragment_1 = require("./signatureMessageFragment");
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
            throw new dataError_1.DataError("The trytes should be a valid Trytes object");
        }
        const length = trytes.length();
        if (length !== Transaction.LENGTH) {
            throw new dataError_1.DataError(`The trytes must be ${Transaction.LENGTH} in length`, { length });
        }
        const checkIndexStart = 2279;
        const checkIndexLength = 16;
        const check = trytes.sub(checkIndexStart, checkIndexLength).toString();
        if (check !== Transaction.CHECK_VALUE) {
            throw new dataError_1.DataError(`The trytes between ${checkIndexStart} and ${checkIndexStart + checkIndexLength} should be all 9s`, { check });
        }
        const tx = new Transaction();
        let startPos = 0;
        tx.signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes.sub(startPos, signatureMessageFragment_1.SignatureMessageFragment.LENGTH));
        startPos += signatureMessageFragment_1.SignatureMessageFragment.LENGTH;
        tx.address = address_1.Address.fromTrytes(trytes.sub(startPos, address_1.Address.LENGTH));
        startPos += address_1.Address.LENGTH;
        tx.value = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, 11), 11);
        startPos += 11;
        startPos += Transaction.CHECK_VALUE_LENGTH;
        tx.obsoleteTag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
        startPos += tag_1.Tag.LENGTH;
        tx.timestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.currentIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.lastIndex = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.bundle = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
        startPos += hash_1.Hash.LENGTH;
        tx.trunkTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
        startPos += hash_1.Hash.LENGTH;
        tx.branchTransaction = hash_1.Hash.fromTrytes(trytes.sub(startPos, hash_1.Hash.LENGTH));
        startPos += hash_1.Hash.LENGTH;
        tx.tag = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
        startPos += tag_1.Tag.LENGTH;
        tx.attachmentTimestamp = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromTrytes(trytes.sub(startPos, tryteNumber_1.TryteNumber.LENGTH_9));
        startPos += tryteNumber_1.TryteNumber.LENGTH_9;
        tx.nonce = tag_1.Tag.fromTrytes(trytes.sub(startPos, tag_1.Tag.LENGTH));
        return tx;
    }
    /**
     * Convert the transaction to trytes.
     * @return The transaction as trytes.
     */
    toTrytes() {
        if (!objectHelper_1.ObjectHelper.isType(this.signatureMessageFragment, signatureMessageFragment_1.SignatureMessageFragment)) {
            throw new dataError_1.DataError(`The signatureMessageFragment must be set to create transaction trytes`, { signatureMessageFragment: this.signatureMessageFragment });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.address, address_1.Address)) {
            throw new dataError_1.DataError(`The address must be set to create transaction trytes`, { address: this.address });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.obsoleteTag, tag_1.Tag)) {
            throw new dataError_1.DataError(`The obsoleteTag must be set to create transaction trytes`, { obsoleteTag: this.obsoleteTag });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.bundle, hash_1.Hash)) {
            throw new dataError_1.DataError(`The bundle must be set to create transaction trytes`, { bundle: this.bundle });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.trunkTransaction, hash_1.Hash)) {
            throw new dataError_1.DataError(`The trunkTransaction must be set to create transaction trytes`, { trunkTransaction: this.trunkTransaction });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.branchTransaction, hash_1.Hash)) {
            throw new dataError_1.DataError(`The branchTransaction must be set to create transaction trytes`, { branchTransaction: this.branchTransaction });
        }
        if (!objectHelper_1.ObjectHelper.isType(this.nonce, tag_1.Tag)) {
            throw new dataError_1.DataError(`The nonce must be set to create transaction trytes`, { nonce: this.nonce });
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
            throw new dataError_1.DataError(`The trytes must be ${Transaction.LENGTH} in length ${length}`, { length });
        }
        return trytes_1.Trytes.fromString(trytes);
    }
    /**
     * Get the string view of the object.
     * @returns string view of the object.
     */
    toString() {
        return `{
\tsignatureMessageFragment: "${(this.signatureMessageFragment || signatureMessageFragment_1.SignatureMessageFragment.EMPTY).toTrytes().toString()}"
\taddress: "${(this.address || address_1.Address.EMPTY).toTrytes().toString()}"
\tvalue: ${(this.value || Transaction.EMPTY_11).toNumber()}
\tobsoleteTag: "${(this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString()}"
\ttimestamp: ${(this.timestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tcurrentIndex: ${(this.currentIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tlastIndex: ${(this.lastIndex || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tbundle: "${(this.bundle || hash_1.Hash.EMPTY).toTrytes().toString()}"
\ttrunkTransaction: "${(this.trunkTransaction || hash_1.Hash.EMPTY).toTrytes().toString()}"
\tbranchTransaction: "${(this.branchTransaction || hash_1.Hash.EMPTY).toTrytes().toString()}"
\ttag: "${(this.tag || this.obsoleteTag || tag_1.Tag.EMPTY).toTrytes().toString()}"
\tattachmentTimestamp: ${(this.attachmentTimestamp || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tattachmentTimestampLowerBound: ${(this.attachmentTimestampLowerBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tattachmentTimestampUpperBound: ${(this.attachmentTimestampUpperBound || tryteNumber_1.TryteNumber.EMPTY_9).toNumber()}
\tnonce: "${(this.nonce || tag_1.Tag.EMPTY).toTrytes().toString()}"
}`;
    }
}
/**
 * The length of a valid transaction (2673).
 */
Transaction.LENGTH = 2673;
/**
 * The length of a valid check value (16).
 */
Transaction.CHECK_VALUE_LENGTH = 16;
/**
 * The check value for bundles all 9s.
 */
Transaction.CHECK_VALUE = "9".repeat(Transaction.CHECK_VALUE_LENGTH);
/* @internal */
Transaction.EMPTY_11 = tryteNumber_1.TryteNumber.fromNumber(0, 11);
exports.Transaction = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLGtEQUErQztBQUMvQyx1Q0FBb0M7QUFDcEMsaUNBQThCO0FBQzlCLHlFQUFzRTtBQUN0RSwrQkFBNEI7QUFDNUIsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBZ0ZJLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0JHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyx3QkFBa0QsRUFDbEQsT0FBZ0IsRUFDaEIsS0FBYSxFQUNiLFdBQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLFlBQW9CLEVBQ3BCLFNBQWlCLEVBQ2pCLE1BQVksRUFDWixnQkFBc0IsRUFDdEIsaUJBQXVCLEVBQ3ZCLEdBQVEsRUFDUixtQkFBMkIsRUFDM0IsNkJBQXFDLEVBQ3JDLDZCQUFxQyxFQUNyQyxLQUFVO1FBQy9CLE1BQU0sRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsRUFBRSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxTQUFTLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakQsRUFBRSxDQUFDLFlBQVksR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsU0FBUyxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxD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