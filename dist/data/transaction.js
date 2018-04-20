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
     * @returns New instance of transaction.
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
     * @returns The transaction as trytes.
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