/**
 * Tests for SignatureMessageFragment.
 */
import * as chai from "chai";
import { SignatureMessageFragment } from "../../src/data/signatureMessageFragment";
import { Trytes } from "../../src/data/trytes";

describe("SignatureMessageFragment", () => {
    describe("fromTrytes", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => SignatureMessageFragment.fromTrytes(undefined)).to.throw("The signatureMessageFragment");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => SignatureMessageFragment.fromTrytes(Trytes.fromString("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(2187));
        });
    });

    describe("toString", () => {
        it("can succeed", () => {
            const obj = SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187)));
            chai.expect(obj.toString()).to.equal("A".repeat(2187));
        });
    });
});
