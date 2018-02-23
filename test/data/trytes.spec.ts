/**
 * Tests for Trytes.
 */
import * as chai from "chai";
import { Trytes } from "../../src/data/trytes";

describe("Trytes", () => {
    it("can be created", () => {
        const obj = Trytes.create("");
        chai.should().exist(obj);
    });

    describe("create", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trytes.create(undefined)).to.throw("The value");
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trytes.create(null)).to.throw("The value");
        });

        it("can fail to convert with non string", () => {
            chai.expect(() => Trytes.create(<any>123)).to.throw("The value");
        });

        it("can fail with non tryte characters", () => {
            chai.expect(() => Trytes.create("12345")).to.throw("The value");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Trytes.create("AAA", -1)).to.throw("The length");
        });

        it("can succeed converting with empty string", () => {
            chai.expect(Trytes.create("").toString()).to.equal("");
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trytes.create("ABCDEFG9999").toString()).to.equal("ABCDEFG9999");
        });
    });

    describe("isValid", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(Trytes.isValid(undefined)).to.equal(false);
        });

        it("can fail to convert with null string", () => {
            chai.expect(Trytes.isValid(null)).to.equal(false);
        });

        it("can fail to convert with non string", () => {
            chai.expect(Trytes.isValid(<any>123)).to.equal(false);
        });

        it("can fail with non tryte characters", () => {
            chai.expect(Trytes.isValid("12345")).to.equal(false);
        });

        it("can fail converting with non-empty string and larger length", () => {
            chai.expect(Trytes.isValid("ABCDEFG9999", 15)).to.equal(false);
        });

        it("can succeed converting with empty string", () => {
            chai.expect(Trytes.isValid("")).to.equal(true);
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trytes.isValid("ABCDEFG9999")).to.equal(true);
        });

        it("can succeed converting with non-empty string and length", () => {
            chai.expect(Trytes.isValid("ABCDEFG9999", 11)).to.equal(true);
        });
    });

    describe("sub", () => {
        it("can fail with undefined start", () => {
            chai.expect(() => Trytes.create("AAA").sub(undefined, 1)).to.throw("The start");
        });

        it("can fail with negative start", () => {
            chai.expect(() => Trytes.create("AAA").sub(-1, 1)).to.throw("The start");
        });

        it("can fail with undefined length", () => {
            chai.expect(() => Trytes.create("AAA").sub(0, undefined)).to.throw("The start + length");
        });

        it("can fail with length too much", () => {
            chai.expect(() => Trytes.create("AAA").sub(0, 4)).to.throw("The start + length");
        });

        it("can fail with start + length too much", () => {
            chai.expect(() => Trytes.create("AAA").sub(1, 3)).to.throw("The start + length");
        });

        it("can succeed getting all data", () => {
            chai.expect(Trytes.create("AAA").sub(0, 3).toString()).to.equal("AAA");
        });
    });
});
