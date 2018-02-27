/**
 * Tests for DataError.
 */
import * as chai from "chai";
import { DataError } from "../../src/error/dataError";

describe("DataError", () => {
    it("can be created", () => {
        const obj = new DataError("message");
        chai.should().exist(obj);
    });
});
