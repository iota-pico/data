/**
 * Tests for SignatureFragment.
 */
import * as chai from "chai";
import { SignatureFragment } from "../../src/data/signatureFragment";
import { Trytes } from "../../src/data/trytes";

describe("SignatureFragment", () => {
    describe("create", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => SignatureFragment.create(undefined)).to.throw("The signatureFragment");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => SignatureFragment.create(Trytes.create("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = SignatureFragment.create(Trytes.create("A".repeat(2187)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(2187));
        });
    });
});
