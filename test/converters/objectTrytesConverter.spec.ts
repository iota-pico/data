/**
 * Tests for ObjectTrytesConverter.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { ObjectTrytesConverter } from "../../src/converters/objectTrytesConverter";
import { Trytes } from "../../src/data/trytes";

describe("ObjectTrytesConverter", () => {
    it("can be created", () => {
        const obj = new ObjectTrytesConverter();
        chai.should().exist(obj);
    });

    describe("to", () => {
        it("can fail to convert with undefined string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(() => obj.to(undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(() => obj.to(null)).to.throw(CoreError);
        });

        it("can succeed converting with empty string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to("").toString()).to.equal("GAGA");
        });

        it("can succeed with non ascii characters", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to("This is a test ℜ").toString()).to.equal("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDEAKCIDWAVAVARCGA");
        });

        it("can succeed converting with non-empty string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to("This is a test").toString()).to.equal("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDGA");
        });

        it("can succeed converting with multiline string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to("This is a test\r\nOn multiple lines").toString()).to.equal("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDKCFDKCBDYBBDEAADID9DHDXCDD9DTCEA9DXCBDTCGDGA");
        });

        it("can succeed converting with objects", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to({ a: "foo", b: [ 1, 2, 3], c: true}).toString()).to.equal("ODGAPCGADBGAUCCDCDGAQAGAQCGADBJCVAQAWAQAXALCQAGARCGADBHDFDIDTCQD");
        });

        it("can succeed converting with objects with non ASCII characters", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.to({ a: "foo", b: [ 1, 2, 3], c: "ℜ"}).toString()).to.equal("ODGAPCGADBGAUCCDCDGAQAGAQCGADBJCVAQAWAQAXALCQAGARCGADBGAKCIDWAVAVARCGAQD");
        });
    });

    describe("from", () => {
        it("can fail to convert with undefined string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(() => obj.from(undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(() => obj.from(null)).to.throw(CoreError);
        });

        it("can succeed converting with empty string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("GAGA"))).to.equal("");
        });

        it("can fail with odd length trytes", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(() => obj.from(Trytes.create("ABC"))).to.throw(CoreError);
        });

        it("can succeed with non ascii characters", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDEAKCIDWAVAVARCGA"))).to.equal("This is a test ℜ");
        });

        it("can succeed converting with non-empty string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDGA"))).to.equal("This is a test");
        });

        it("can succeed converting with multiline string", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("GACCWCXCGDEAXCGDEAPCEAHDTCGDHDKCFDKCBDYBBDEAADID9DHDXCDD9DTCEA9DXCBDTCGDGA"))).to.equal("This is a test\r\nOn multiple lines");
        });

        it("can succeed converting with objects", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("ODGAPCGADBGAUCCDCDGAQAGAQCGADBJCVAQAWAQAXALCQAGARCGADBHDFDIDTCQD"))).to.deep.equal({ a: "foo", b: [ 1, 2, 3], c: true});
        });

        it("can succeed converting with objects with non ASCII characters", () => {
            const obj = new ObjectTrytesConverter();
            chai.expect(obj.from(Trytes.create("ODGAPCGADBGAUCCDCDGAQAGAQCGADBJCVAQAWAQAXALCQAGARCGADBGAKCIDWAVAVARCGAQD"))).to.deep.equal({ a: "foo", b: [ 1, 2, 3], c: "ℜ"});
        });
    });
});
