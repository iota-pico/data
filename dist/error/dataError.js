Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * A data implementation of an error.
 */
class DataError extends coreError_1.CoreError {
    /**
     * Create an instance of DataError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Data";
    }
}
exports.DataError = DataError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Vycm9yL2RhdGFFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBRWpFOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEscUJBQVM7SUFDcEM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQWUsRUFBRSxVQUFrQyxFQUFFLFVBQWtCO1FBQy9FLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQVhELDhCQVdDIn0=