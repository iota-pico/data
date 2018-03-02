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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RhdGEvYnVuZGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsa0RBQStDO0FBRS9DLGlDQUE4QjtBQUM5Qix5RUFBc0U7QUFDdEUsK0JBQTRCO0FBQzVCLCtDQUE0QztBQUM1QywrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSDtJQUlJOztPQUVHO0lBQ0g7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLGVBQWUsQ0FBQyxzQkFBOEIsRUFBRSxPQUFnQixFQUFFLEtBQWEsRUFBRSxHQUFRLEVBQUUsU0FBaUI7UUFDL0csR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHlCQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUM1QyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQzFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFDcEMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNEJBQTRCLENBQUMseUJBQXFEO1FBQ3JGLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sSUFBSSxxQkFBUyxDQUFDLCtFQUErRSxDQUFDLENBQUM7UUFDekcsQ0FBQztRQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLElBQUksbURBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakgsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxXQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25ELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsV0FBSSxDQUFDLEtBQUssQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLHlCQUFXLENBQUMsT0FBTyxDQUFDO1lBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEdBQUcseUJBQVcsQ0FBQyxPQUFPLENBQUM7WUFDekUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBNkIsR0FBRyx5QkFBVyxDQUFDLE9BQU8sQ0FBQztZQUN6RSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFHLENBQUMsS0FBSyxDQUFDO1FBQzNDLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUEvQ0Qsd0JBK0NDIn0=