Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const dataError_1 = require("../error/dataError");
const hash_1 = require("./hash");
const signatureMessageFragment_1 = require("./signatureMessageFragment");
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
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */
    addSignatureMessageFragments(signatureMessageFragments) {
        if (objectHelper_1.ObjectHelper.isEmpty(signatureMessageFragments)) {
            throw new dataError_1.DataError("The signatureMessageFragments should be an array of SignatureMessageFragments");
        }
        for (let i = 0; i < this.transactions.length; i++) {
            this.transactions[i].signatureMessageFragment = (signatureMessageFragments[i] || signatureMessageFragment_1.SignatureMessageFragment.EMPTY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBRS9DLGlDQUE4QjtBQUM5Qix5RUFBc0U7QUFDdEUsK0JBQTRCO0FBQzVCLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxNQUFhLE1BQU07SUFVZjs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxlQUFlLENBQUMsc0JBQThCLEVBQUUsT0FBZ0IsRUFBRSxLQUFhLEVBQUUsR0FBUSxFQUFFLFNBQWlCO1FBQy9HLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFDNUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUMxQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQ3BDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBNEIsQ0FBQyx5QkFBcUQ7UUFDckYsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2pELE1BQU0sSUFBSSxxQkFBUyxDQUFDLCtFQUErRSxDQUFDLENBQUM7U0FDeEc7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxJQUFJLG1EQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pILElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLFdBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyx5QkFBVyxDQUFDLE9BQU8sQ0FBQztZQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixHQUFHLHlCQUFXLENBQUMsT0FBTyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUM7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBRyxDQUFDLEtBQUssQ0FBQztTQUMxQztJQUNMLENBQUM7Q0FDSjtBQXJERCx3QkFxREMifQ==