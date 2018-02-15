/**
 * Tests for Trits.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { Trits } from "../../src/data/trits";
import { Trytes } from "../../src/data/trytes";

describe("Trits", () => {
    describe("fromTrytes", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trits.fromTrytes(<any>undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trits.fromTrytes(<any>null)).to.throw(CoreError);
        });

        it("can succeed converting with trytes empty string", () => {
            chai.expect(Trits.fromTrytes(Trytes.create("")).toArray()).to.deep.equal([]);
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trits.fromTrytes(Trytes.create("ABCDEFG9999")).toArray()).to.deep.equal(
                [1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe("toTrytes", () => {
        it("can succeed converting with trytes empty string", () => {
            chai.expect(Trits.fromTrytes(Trytes.create("")).toTrytes().toString()).to.equal("");
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trits.fromTrytes(Trytes.create("ABCDEFG9999")).toTrytes().toString()).to.equal("ABCDEFG9999");
        });
    });

    describe("fromNumber", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trits.fromNumber(<any>undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trits.fromNumber(<any>null)).to.throw(CoreError);
        });

        it("can fail converting with NaN", () => {
            chai.expect(() => Trits.fromNumber(NaN)).to.throw(CoreError);
        });

        it("can fail converting with Infinity", () => {
            chai.expect(() => Trits.fromNumber(Infinity)).to.throw(CoreError);
        });

        it("can fail converting with float", () => {
            chai.expect(() => Trits.fromNumber(1.23)).to.throw(CoreError);
        });

        it("can succeed converting with zero", () => {
            chai.expect(Trits.fromNumber(0).toArray()).to.deep.equal([]);
        });

        it("can succeed converting with positive integer", () => {
            chai.expect(Trits.fromNumber(43).toArray()).to.deep.equal([1, -1, -1, -1, 1]);
        });

        it("can succeed converting with negative integer", () => {
            chai.expect(Trits.fromNumber(-43).toArray()).to.deep.equal([-1, 1, 1, 1, -1]);
        });

        it("can succeed converting with max positive integer", () => {
            chai.expect(Trits.fromNumber(Number.MAX_SAFE_INTEGER).toArray()).to.deep.equal(
                [1, 1, 1, 1, 0, 1, -1, -1, 1, 0, 0, 1, 1, 1, -1, 0, 0, -1, -1, -1, 0, -1, -1, 0, -1, -1, 1, -1, 1, -1, -1, 0, -1, -1, 1]);
        });

        it("can succeed converting with min negative integer", () => {
            chai.expect(Trits.fromNumber(Number.MIN_SAFE_INTEGER).toArray()).to.deep.equal(
                [-1, -1, -1, -1, -0, -1, 1, 1, -1, -0, -0, -1, -1, -1, 1, -0, -0, 1, 1, 1, -0, 1, 1, -0, 1, 1, -1, 1, -1, 1, 1, -0, 1, 1, -1]);
        });
    });

    describe("toNumber", () => {
        it("can succeed converting with zero", () => {
            chai.expect(Trits.fromNumber(0).toNumber()).to.equal(0);
        });

        it("can succeed converting with positive integer", () => {
            chai.expect(Trits.fromNumber(43).toNumber()).to.equal(43);
        });

        it("can succeed converting with negative integer", () => {
            chai.expect(Trits.fromNumber(-43).toNumber()).to.equal(-43);
        });

        it("can succeed converting with max positive integer", () => {
            chai.expect(Trits.fromNumber(Number.MAX_SAFE_INTEGER).toNumber()).to.equal(Number.MAX_SAFE_INTEGER);
        });

        it("can succeed converting with max negative integer", () => {
            chai.expect(Trits.fromNumber(Number.MIN_SAFE_INTEGER).toNumber()).to.equal(Number.MIN_SAFE_INTEGER);
        });
    });
});
