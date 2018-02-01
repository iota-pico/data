/**
 * Tests for AsciiTrytesConverter.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { AsciiTrytesConverter } from "../../src/converters/asciiTrytesConverter";
import { Trytes } from "../../src/data/trytes";

describe("AsciiTrytesConverter", () => {
    it("can be created", () => {
        const obj = new AsciiTrytesConverter();
        chai.should().exist(obj);
    });

    describe("to", () => {
        it("can fail to convert with undefined string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.to(undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.to(null)).to.throw(CoreError);
        });

        it("can succeed converting with empty string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.to("").toString()).to.equal("");
        });

        it("can fail with non ascii characters", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.to("This is a test ℜ")).to.throw(CoreError);
        });

        it("can succeed converting with non-empty string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.to("This is a test").toString()).to.equal("CCWCXCGDEAXCGDEAPCEAHDTCGDHD");
        });

        it("can succeed converting with multiline string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.to("This is a test\r\nOn multiple lines").toString()).to.equal("CCWCXCGDEAXCGDEAPCEAHDTCGDHDM9J9YBBDEAADID9DHDXCDD9DTCEA9DXCBDTCGD");
        });
    });

    describe("from", () => {
        it("can fail to convert with undefined string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.from(undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.from(null)).to.throw(CoreError);
        });

        it("can succeed converting with empty string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.from(Trytes.create(""))).to.equal("");
        });

        it("can fail with odd length trytes", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(() => obj.from(Trytes.create("ABC"))).to.throw(CoreError);
        });

        it("can succeed converting with non-empty string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.from(Trytes.create("CCWCXCGDEAXCGDEAPCEAHDTCGDHD"))).to.equal("This is a test");
        });

        it("can succeed converting with multiline string", () => {
            const obj = new AsciiTrytesConverter();
            chai.expect(obj.from(Trytes.create("CCWCXCGDEAXCGDEAPCEAHDTCGDHDM9J9YBBDEAADID9DHDXCDD9DTCEA9DXCBDTCGD"))).to.equal("This is a test\r\nOn multiple lines");
        });
    });
});
