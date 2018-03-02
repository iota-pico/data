import { Address } from "./address";
import { SignatureMessageFragment } from "./signatureMessageFragment";
import { Tag } from "./tag";
import { Transaction } from "./transaction";
/**
 * A class for handling bundles.
 */
export declare class Bundle {
    transactions: Transaction[];
    inclusionState: boolean;
    /**
     * Create a new instance of Bundle.
     */
    constructor();
    /**
     * Add new transactions to the bundle.
     * @param signatureMessageLength The number of transactions to add.
     * @param address The address for the transactions.
     * @param value The value for the first of the transactions.
     * @param tag The tag to include in the transactions.
     * @param timestamp The timestamp for the transactions.
     */
    addTransactions(signatureMessageLength: number, address: Address, value: number, tag: Tag, timestamp: number): void;
    /**
     * Add signature fragments to the bundle.
     * @param signatureMessageFragments The signature fragments to add to the bundle transactions.
     */
    addSignatureMessageFragments(signatureMessageFragments: SignatureMessageFragment[]): void;
}
