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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFFakUsaUNBQThCO0FBQzlCLDJEQUF3RDtBQUN4RCwrQkFBNEI7QUFDNUIsK0NBQTRDO0FBQzVDLCtDQUE0QztBQUU1Qzs7R0FFRztBQUNIO0lBSUk7O09BRUc7SUFDSDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksZUFBZSxDQUFDLHNCQUE4QixFQUFFLE9BQWdCLEVBQUUsS0FBYSxFQUFFLEdBQVEsRUFBRSxTQUFpQjtRQUMvRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFzQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQzVDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFDMUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUNwQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxxQkFBcUIsQ0FBQyxrQkFBdUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsa0JBQWtCLEtBQUssU0FBUyxJQUFJLGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxJQUFJLHFCQUFTLENBQUMsd0RBQXdELENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLFdBQUksQ0FBQyxLQUFLLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUM7WUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBNkIsR0FBRyx5QkFBVyxDQUFDLE9BQU8sQ0FBQztZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixHQUFHLHlCQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQUcsQ0FBQyxLQUFLLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQS9DRCx3QkErQ0MifQ==