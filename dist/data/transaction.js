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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLGtEQUErQztBQUMvQyx1Q0FBb0M7QUFDcEMsaUNBQThCO0FBQzlCLHlFQUFzRTtBQUN0RSwrQkFBNEI7QUFDNUIsK0NBQTRDO0FBQzVDLHFDQUFrQztBQUVsQzs7R0FFRztBQUNILE1BQWEsV0FBVztJQWdGcEIsZUFBZTtJQUNmO0lBQ0EsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLHdCQUFrRCxFQUNsRCxPQUFnQixFQUNoQixLQUFhLEVBQ2IsV0FBZ0IsRUFDaEIsU0FBaUIsRUFDakIsWUFBb0IsRUFDcEIsU0FBaUIsRUFDakIsTUFBWSxFQUNaLGdCQUFzQixFQUN0QixpQkFBdUIsRUFDdkIsR0FBUSxFQUNSLG1CQUEyQixFQUMzQiw2QkFBcUMsRUFDckMsNkJBQXFDLEVBQ3JDLEtBQVU7UUFDL0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QixFQUFFLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDdkQsRUFBRSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDckIsRUFBRSxDQUFDLEtBQUssR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDN0IsRUFBRSxDQUFDLFNBQVMsR0FBRyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsWUFBWSxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxTQUFTLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUMs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