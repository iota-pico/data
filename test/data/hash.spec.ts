/**
 * Tests for Hash.
 */
import * as chai from "chai";
import { Hash } from "../../src/data/hash";
import { Trytes } from "../../src/data/trytes";

describe("Hash", () => {
    describe("create", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Hash.create(undefined)).to.throw("The hash");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Hash.create(Trytes.create("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = Hash.create(Trytes.create("A".repeat(81)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
        });
    });
});
