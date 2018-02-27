/**
 * Tests for Input.
 */
import * as chai from "chai";
import { Address } from "../../src/data/address";
import { Input } from "../../src/data/input";
import { Trytes } from "../../src/data/trytes";

describe("Input", () => {
    describe("fromTrytes", () => {
        it("can fail with undefined address", () => {
            chai.expect(() => Input.fromParams(undefined, undefined, undefined, undefined)).to.throw("The address");
        });

        it("can fail with undefined security", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), undefined, undefined, undefined)).to.throw("The security");
        });

        it("can fail with invalid security 0", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 0, undefined, undefined)).to.throw("The security");
        });

        it("can fail with invalid security 4", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 4, undefined, undefined)).to.throw("The security");
        });

        it("can fail with invalid keyIndex", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 3, undefined, undefined)).to.throw("The keyIndex");
        });

        it("can fail with invalid keyIndex -1", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 3, -1, undefined)).to.throw("The keyIndex");
        });

        it("can fail with invalid balance", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 3, 0, undefined)).to.throw("The balance");
        });

        it("can fail with invalid balance -1", () => {
            chai.expect(() => Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 3, 0, -1)).to.throw("The balance");
        });

        it("can succeed with valid parameters", () => {
            const input = Input.fromParams(Address.fromTrytes(Trytes.fromString("A".repeat(81))), 3, 1, 10);
            chai.expect(input.address.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(input.security).to.equal(3);
            chai.expect(input.keyIndex).to.equal(1);
            chai.expect(input.balance).to.equal(10);
        });
    });
});
