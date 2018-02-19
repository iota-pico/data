Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A class for handling transfers.
 */
class Transfer {
    /* @internal */
    constructor() {
    }
    /**
     * Create instance of transfer from parameters.
     * @param address The address.
     * @param value The value.
     * @param messsage The message for the transfer.
     * @param tag The tag.
     * @return New instance of Transfer.
     */
    static fromParams(address, value, message, tag) {
        const transfer = new Transfer();
        transfer.address = address;
        transfer.value = value;
        transfer.message = message;
        transfer.tag = tag;
        return transfer;
    }
}
exports.Transfer = Transfer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YS90cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7O0dBRUc7QUFDSDtJQU1JLGVBQWU7SUFDZjtJQUNBLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFnQixFQUNoQixLQUFhLEVBQ2IsT0FBZSxFQUNmLEdBQVE7UUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNoQyxRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQTdCRCw0QkE2QkMifQ==