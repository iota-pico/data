/**
 * Tests for Hash.
 */
import * as chai from "chai";
import { Hash } from "../../src/data/hash";
import { Trytes } from "../../src/data/trytes";

describe("Hash", () => {
    describe("fromTrytes", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Hash.fromTrytes(undefined)).to.throw("The hash");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Hash.fromTrytes(Trytes.fromString("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = Hash.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
        });
    });

    describe("toString", () => {
        it("can succeed", () => {
            const obj = Hash.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(obj.toString()).to.equal("A".repeat(81));
        });
    });
});
