/**
 * Tests for TritsWordConverter.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { TritsWordConverter } from "../../src/converters/tritsWordConverter";
import { Trits } from "../../src/data/trits";

describe("TritsWordConverter", () => {
    it("can be created", () => {
        const obj = new TritsWordConverter();
        chai.should().exist(obj);
    });

    describe("tritsToWords", () => {
        it("can fail to convert with undefined array", () => {
            chai.expect(() => TritsWordConverter.tritsToWords(<any>undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null array", () => {
            chai.expect(() => TritsWordConverter.tritsToWords(<any>null)).to.throw(CoreError);
        });

        it("can fail to convert with invalid array length", () => {
            chai.expect(() => TritsWordConverter.tritsToWords(Trits.fromTritsArray([]))).to.throw(CoreError);
        });

        it("can succeed conversion", () => {
            // tslint:disable-next-line:max-line-length
            const trits = Trits.fromTritsArray([1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
            chai.expect(Array.from(TritsWordConverter.tritsToWords(trits)))
                .to.deep.equal([2354707732, 2682603343, 3314143040, 2060310320, 174813893, 2092666546, 1538732949, 2309292702, 3176161102, 3540858870, 2533654845, 560029539]);
        });
    });

    describe("tritsToWords", () => {
        it("can fail to convert with undefined array", () => {
            chai.expect(() => TritsWordConverter.wordsToTrits(<any>undefined)).to.throw(CoreError);
        });

        it("can fail to convert with null array", () => {
            chai.expect(() => TritsWordConverter.wordsToTrits(<any>null)).to.throw(CoreError);
        });

        it("can fail to convert with invalid array length", () => {
            chai.expect(() => TritsWordConverter.wordsToTrits(Uint32Array.from([]))).to.throw(CoreError);
        });

        it("can succeed conversion", () => {
            // tslint:disable-next-line:max-line-length
            chai.expect(TritsWordConverter.wordsToTrits(Uint32Array.from([2354707732, 2682603343, 3314143040, 2060310320, 174813893, 2092666546, 1538732949, 2309292702, 3176161102, 3540858870, 2533654845, 560029539])))
                // tslint:disable-next-line:max-line-length
                .to.deep.equal(Trits.fromTritsArray([0, 1, 0, -1, 1, 1, -1, 1, 1, -1, 1, -1, -1, 1, 0, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, -1, 1, -1, 1, 0, 1, 0, -1, -1, -1, -1, -1, 0, 0, 0, 1, -1, -1, 0, 0, -1, 0, -1, -1, 0, -1, 1, 1, 1, 1, -1, -1, 0, 0, 0, 0, -1, 1, 1, -1, 1, 1, -1, -1, 1, 0, 1, 0, -1, 0, 0, 1, 1, 0, -1, -1, 0, -1, -1, 1, 1, 1, 1, 0, -1, -1, -1, 0, 1, 0, -1, 0, 1, 1, 0, 0, -1, -1, 0, 0, -1, -1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, -1, 0, 0, 0, 0, -1, 0, -1, -1, 1, 0, 0, -1, 0, 1, -1, -1, -1, 1, 0, 0, 1, 1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 0, -1, 1, 0, 0, 0, 0, -1, -1, 0, 0, -1, 1, -1, -1, 0, -1, -1, 1, 0, 1, -1, -1, -1, -1, 0, 1, -1, 1, 1, -1, 0, 1, 1, -1, -1, -1, 0, 1, 1, 1, -1, -1, 0, 0, 1, 0, 0, -1, 1, -1, -1, 1, -1, -1, 1, 0, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 1, 1, 1, -1, -1, 0, 1, 0, 1, 1, 1, -1, 0, 1, 0, 0, -1, -1, -1, 1, 1, 1, 1, 0, 1, 0]));
        });
    });
});
