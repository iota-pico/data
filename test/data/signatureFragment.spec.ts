/**
 * Tests for SignatureFragment.
 */
import * as chai from "chai";
import { SignatureFragment } from "../../src/data/signatureFragment";
import { Trytes } from "../../src/data/trytes";

describe("SignatureFragment", () => {
    describe("fromTrytes", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => SignatureFragment.fromTrytes(undefined)).to.throw("The signatureFragment");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => SignatureFragment.fromTrytes(Trytes.fromString("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = SignatureFragment.fromTrytes(Trytes.fromString("A".repeat(2187)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(2187));
        });
    });
});
