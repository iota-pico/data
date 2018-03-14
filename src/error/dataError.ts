import { CoreError } from "@iota-pico/core/dist/error/coreError";

/**
 * A data implementation of an error.
 */
export class DataError extends CoreError {
    /**
     * Create an instance of DataError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: { [id: string]: any }, innerError?: Error) {
        super(message, additional, innerError);
        this.domain = "Data";
    }
}
