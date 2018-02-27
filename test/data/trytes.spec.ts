/**
 * Tests for Trytes.
 */
import * as chai from "chai";
import { Trytes } from "../../src/data/trytes";

describe("Trytes", () => {
    it("can be created", () => {
        const obj = Trytes.fromString("");
        chai.should().exist(obj);
    });

    describe("fromString", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trytes.fromString(undefined)).to.throw("The value");
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trytes.fromString(null)).to.throw("The value");
        });

        it("can fail to convert with non string", () => {
            chai.expect(() => Trytes.fromString(<any>123)).to.throw("The value");
        });

        it("can fail with non tryte characters", () => {
            chai.expect(() => Trytes.fromString("12345")).to.throw("The value");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Trytes.fromString("AAA", -1)).to.throw("The length");
        });

        it("can succeed converting with empty string", () => {
            chai.expect(Trytes.fromString("").toString()).to.equal("");
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trytes.fromString("ABCDEFG9999").toString()).to.equal("ABCDEFG9999");
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
            chai.expect(() => Trytes.fromString("AAA").sub(undefined, 1)).to.throw("The start");
        });

        it("can fail with negative start", () => {
            chai.expect(() => Trytes.fromString("AAA").sub(-1, 1)).to.throw("The start");
        });

        it("can fail with undefined length", () => {
            chai.expect(() => Trytes.fromString("AAA").sub(0, undefined)).to.throw("The start + length");
        });

        it("can fail with length too much", () => {
            chai.expect(() => Trytes.fromString("AAA").sub(0, 4)).to.throw("The start + length");
        });

        it("can fail with start + length too much", () => {
            chai.expect(() => Trytes.fromString("AAA").sub(1, 3)).to.throw("The start + length");
        });

        it("can succeed getting all data", () => {
            chai.expect(Trytes.fromString("AAA").sub(0, 3).toString()).to.equal("AAA");
        });
    });
});
