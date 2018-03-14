/**
 * Tests for TryteNumber.
 */
import * as chai from "chai";
import { Trits } from "../../src/data/trits";
import { TryteNumber } from "../../src/data/tryteNumber";
import { Trytes } from "../../src/data/trytes";

describe("TryteNumber", () => {
    describe("fromNumber", () => {
        it("can fail with not a number params", () => {
            chai.expect(() => TryteNumber.fromNumber(Number.NaN)).to.throw("The value");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => TryteNumber.fromNumber(0, 0)).to.throw("The length");
        });

        it("can succeed with undefined params", () => {
            const obj = TryteNumber.fromNumber(undefined);
            chai.expect(obj.toNumber()).to.equal(0);
            chai.expect(obj.toTrytes().toString()).to.equal("9".repeat(9));
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toNumberArray()).to.deep
                .equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with default length", () => {
            const obj = TryteNumber.fromNumber(0);
            chai.expect(obj.toNumber()).to.equal(0);
            chai.expect(obj.toTrytes().toString()).to.equal("9".repeat(9));
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toNumberArray()).to.deep
                .equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with value and default length", () => {
            const obj = TryteNumber.fromNumber(20);
            chai.expect(obj.toNumber()).to.equal(20);
            chai.expect(obj.toTrytes().toString()).to.equal("TA9999999");
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toNumberArray()).to.deep
                .equal([-1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with value and custom length", () => {
            const obj = TryteNumber.fromNumber(30, 12);
            chai.expect(obj.toNumber()).to.equal(30);
            chai.expect(obj.toTrytes().toString()).to.equal("CA9999999999");
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toNumberArray()).to.deep
                .equal([0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe("fromTrytes", () => {
        it("can fail with not a trytes params", () => {
            chai.expect(() => TryteNumber.fromTrytes(undefined)).to.throw("The value");
        });
        it("can fail with invalid length", () => {
            chai.expect(() => TryteNumber.fromTrytes(Trytes.fromString("A".repeat(10)), 0)).to.throw("The length");
        });
        it("can fail with too long trytes params", () => {
            chai.expect(() => TryteNumber.fromTrytes(Trytes.fromString("A".repeat(10)))).to.throw("too many");
        });
        it("can suceed with too few trytes", () => {
            chai.expect(TryteNumber.fromTrytes(Trytes.fromString("A".repeat(3))).toTrytes().toString()).to.equal("A".repeat(3) + "9".repeat(6));
        });
    });

    describe("toString", () => {
        it("can succeed", () => {
            const obj = TryteNumber.fromNumber(20);
            chai.expect(obj.toString()).to.equal("TA9999999");
        });
    });

    describe("valueOf", () => {
        it("can succeed", () => {
            const obj = TryteNumber.fromNumber(20);
            chai.expect(obj.valueOf()).to.equal(20);
        });
    });
});
