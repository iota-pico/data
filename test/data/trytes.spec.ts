/**
 * Tests for Trytes.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { Trytes } from "../../src/data/trytes";

describe("Trytes", () => {
    it("can be created", () => {
        const obj = Trytes.create("");
        chai.should().exist(obj);
    });

    describe("create", () => {
        it("can fail to convert with undefined string", () => {
            chai.expect(() => Trytes.create(<any>undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            chai.expect(() => Trytes.create(<any>null)).to.throw(CoreError);
        });

        it("can fail to convert with non string", () => {
            chai.expect(() => Trytes.create(<any>123)).to.throw(CoreError);
        });

        it("can fail with non tryte characters", () => {
            chai.expect(() => Trytes.create("12345")).to.throw(CoreError);
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
            chai.expect(Trytes.isValid(<any>undefined)).to.equal(false);
        });

        it("can fail to convert with null string", () => {
            chai.expect(Trytes.isValid(<any>null)).to.equal(false);
        });

        it("can fail to convert with non string", () => {
            chai.expect(Trytes.isValid(<any>123)).to.equal(false);
        });

        it("can fail with non tryte characters", () => {
            chai.expect(Trytes.isValid("12345")).to.equal(false);
        });

        it("can succeed converting with empty string", () => {
            chai.expect(Trytes.isValid("")).to.equal(true);
        });

        it("can succeed converting with non-empty string", () => {
            chai.expect(Trytes.isValid("ABCDEFG9999")).to.equal(true);
        });
    });
});
