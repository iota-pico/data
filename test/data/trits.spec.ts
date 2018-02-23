/**
 * Tests for Trits.
 */
import * as chai from "chai";
import { Trits } from "../../src/data/trits";
import { Trytes } from "../../src/data/trytes";

describe("Trits", () => {
    describe("fromArray", () => {
        it("can fail to convert with undefined array", () => {
            chai.expect(() => Trits.fromArray(undefined)).to.throw("The value");
        });

        it("can fail to convert with undefined array", () => {
            chai.expect(() => Trits.fromArray(undefined)).to.throw("The value");
        });
    });

    describe("fromTrytes", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trits.fromTrytes(undefined)).to.throw("The value");
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trits.fromTrytes(null)).to.throw("The value");
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
            chai.expect(() => Trits.fromNumber(undefined)).to.throw("The value");
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trits.fromNumber(null)).to.throw("The value");
        });

        it("can fail converting with NaN", () => {
            chai.expect(() => Trits.fromNumber(NaN)).to.throw("The value");
        });

        it("can fail converting with Infinity", () => {
            chai.expect(() => Trits.fromNumber(Infinity)).to.throw("The value");
        });

        it("can fail converting with float", () => {
            chai.expect(() => Trits.fromNumber(1.23)).to.throw("The value");
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

    describe("length", () => {
        it("can succeed getting trits length", () => {
            chai.expect(Trits.fromArray([1, 0, 1]).length()).to.equal(3);
        });
    });

    describe("sub", () => {
        it("can fail with undefined start", () => {
            chai.expect(() => Trits.fromArray([1, 0, 1]).sub(undefined, 1)).to.throw("The start");
        });

        it("can fail with negative start", () => {
            chai.expect(() => Trits.fromArray([1, 0, 1]).sub(-1, 1)).to.throw("The start");
        });

        it("can fail with undefined length", () => {
            chai.expect(() => Trits.fromArray([1, 0, 1]).sub(0, undefined)).to.throw("The start + length");
        });

        it("can fail with length too much", () => {
            chai.expect(() => Trits.fromArray([1, 0, 1]).sub(0, 4)).to.throw("The start + length");
        });

        it("can fail with start + length too much", () => {
            chai.expect(() => Trits.fromArray([1, 0, 1]).sub(1, 3)).to.throw("The start + length");
        });

        it("can succeed getting all data", () => {
            chai.expect(Trits.fromArray([1, 0, 1]).sub(0, 3).toArray()).to.deep.equal([1, 0, 1]);
        });
    });

    describe("add", () => {
        it("can fail with undefined first", () => {
            chai.expect(() => Trits.add(undefined, undefined)).to.throw("The first");
        });
        it("can fail with undefined second", () => {
            chai.expect(() => Trits.add(Trits.fromArray([1, 0, 1]), undefined)).to.throw("The second");
        });
        it("can succeed adding trits first shorter", () => {
            const added = Trits.add(Trits.fromArray([1, 0, 1]), Trits.fromArray([0, 1, 0, 0, 0, 0]));
            chai.expect(added.toArray()).to.deep.equal([1, 1, 1, 0, 0, 0]);
        });
        it("can succeed adding trits second shorter", () => {
            const added = Trits.add(Trits.fromArray([1, 0, 1, 1, 1, 1]), Trits.fromArray([0, 1, 0]));
            chai.expect(added.toArray()).to.deep.equal([1, 1, 1, 1, 1, 1]);
        });
        it("can succeed adding trits with overflow", () => {
            const added = Trits.add(Trits.fromArray([1, 0, 1]), Trits.fromArray([0, 1, 1]));
            chai.expect(added.toArray()).to.deep.equal([1, 1, -1]);
        });
        it("can succeed adding trits with underflow", () => {
            const added = Trits.add(Trits.fromArray([1, 0, -1]), Trits.fromArray([0, 1, -1]));
            chai.expect(added.toArray()).to.deep.equal([1, 1, 1]);
        });
        it("can succeed adding trits", () => {
            const added = Trits.add(Trits.fromArray([1, 0, 1]), Trits.fromArray([0, 1, 0]));
            chai.expect(added.toArray()).to.deep.equal([1, 1, 1]);
        });
    });
});
