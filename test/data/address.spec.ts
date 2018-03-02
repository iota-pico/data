/**
 * Tests for Address.
 */
import * as chai from "chai";
import { Address } from "../../src/data/address";
import { Trytes } from "../../src/data/trytes";

describe("Address", () => {
    describe("fromTrytes", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Address.fromTrytes(undefined)).to.throw("The address");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Address.fromTrytes(Trytes.fromString("A"))).to.throw("characters in length");
        });

        it("can succeed with valid length", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(() => obj.toTrytesWithChecksum()).to.throw("has no checksum");
        });

        it("can succeed with valid length with checksum", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81) + "B".repeat(9)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(obj.toTrytesWithChecksum().toString()).to.equal("A".repeat(81) + "B".repeat(9));
        });
    });

    describe("toTrytes", () => {
        it("can succeed", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
        });
    });

    describe("toTrytesWithChecksum", () => {
        it("can fail if no checksum", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(() => obj.toTrytesWithChecksum()).to.throw("no checksum");
        });
        it("can succeed", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81) + "B".repeat(9)));
            chai.expect(obj.toTrytesWithChecksum().toString()).to.equal("A".repeat(81) + "B".repeat(9));
        });
    });

    describe("toString", () => {
        it("can succeed without checksum", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            chai.expect(obj.toString()).to.equal("A".repeat(81));
        });

        it("can succeed with checksum", () => {
            const obj = Address.fromTrytes(Trytes.fromString("A".repeat(81) + "B".repeat(9)));
            chai.expect(obj.toString()).to.equal("A".repeat(81) + "B".repeat(9));
        });
    });
});
