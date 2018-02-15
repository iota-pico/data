/**
 * Tests for TryteNumber.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { Trits } from "../../src/data/trits";
import { TryteNumber } from "../../src/data/tryteNumber";

describe("TryteNumber", () => {
    describe("fromNumber", () => {
        it("can fail with not a number params", () => {
            chai.expect(() => TryteNumber.fromNumber(Number.NaN)).to.throw(CoreError);
        });

        it("can succeed with undefined params", () => {
            const obj = TryteNumber.fromNumber(undefined);
            chai.expect(obj.toNumber()).to.equal(0);
            chai.expect(obj.toTrytes().toString()).to.equal("9".repeat(9));
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toArray()).to.deep
                .equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with default length", () => {
            const obj = TryteNumber.fromNumber(0);
            chai.expect(obj.toNumber()).to.equal(0);
            chai.expect(obj.toTrytes().toString()).to.equal("9".repeat(9));
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toArray()).to.deep
                .equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with value and default length", () => {
            const obj = TryteNumber.fromNumber(20);
            chai.expect(obj.toNumber()).to.equal(20);
            chai.expect(obj.toTrytes().toString()).to.equal("TA9999999");
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toArray()).to.deep
                .equal([-1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });

        it("can succeed with value and custom length", () => {
            const obj = TryteNumber.fromNumber(30, 12);
            chai.expect(obj.toNumber()).to.equal(30);
            chai.expect(obj.toTrytes().toString()).to.equal("CA9999999999");
            chai.expect(Trits.fromTrytes(obj.toTrytes()).toArray()).to.deep
                .equal([0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });
});
