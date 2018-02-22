/**
 * Tests for TritsConverter.
 */
import bigInteger from "big-integer";
import * as chai from "chai";
import { TritsConverter } from "../../src/converters/tritsConverter";

describe("TritsConverter", () => {
    it("can be created", () => {
        const obj = new TritsConverter();
        chai.should().exist(obj);
    });

    describe("tritsToWords", () => {
        it("can fail to convert with undefined array", () => {
            chai.expect(() => TritsConverter.tritsToWords(undefined)).to.throw("non empty number");
        });

        it("can fail to convert with null array", () => {
            chai.expect(() => TritsConverter.tritsToWords(null)).to.throw("non empty number");
        });

        it("can fail to convert with empty array", () => {
            chai.expect(() => TritsConverter.tritsToWords([])).to.throw("non empty number");
        });

        it("can fail to convert with invalid array length", () => {
            chai.expect(() => TritsConverter.tritsToWords([1, 2, 3])).to.throw("Invalid trits length");
        });

        it("can succeed conversion all -1", () => {
            const trits = Array(243).fill(-1);
            trits[242] = 0;
            const words = TritsConverter.tritsToWords(trits);
            console.log("words", JSON.stringify(words));

            const trits2 = TritsConverter.wordsToTrits(words);
            console.log("trits", JSON.stringify(trits2));
            // chai.expect(Array.from(words))
            //     .to.deep.equal([269718945, 542343255, 4200003925, 1954482518, 3377546167, 4248328838, 2825021359, 2427902707, 637477061, 2947513067, 2508783456, 2624991578]);

            chai.expect(trits).to.deep.equal(trits2);
        });

        // it("can succeed conversion", () => {
        //     // tslint:disable-next-line:max-line-length
        //     const trits = [1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
        //     chai.expect(Array.from(TritsConverter.tritsToWords(trits)))
        //         .to.deep.equal([2354642196, 2665826127, 3297300288, 2043467568, 174813637, 2075823538, 1521955477, 2292515230, 3176161102, 3540858614, 2533589309, 560029539]);
        // });
    });

    // describe("wordsToTrits", () => {
    //     it("can fail to convert with undefined array", () => {
    //         chai.expect(() => TritsConverter.wordsToTrits(undefined)).to.throw("non empty Uint32Array");
    //     });

    //     it("can fail to convert with null array", () => {
    //         chai.expect(() => TritsConverter.wordsToTrits(null)).to.throw("non empty Uint32Array");
    //     });

    //     it("can fail to convert with empty array", () => {
    //         chai.expect(() => TritsConverter.wordsToTrits(Uint32Array.from([]))).to.throw("non empty Uint32Array");
    //     });

    //     it("can fail to convert with invalid array length", () => {
    //         chai.expect(() => TritsConverter.wordsToTrits(Uint32Array.from([1]))).to.throw("Invalid words length");
    //     });

    //     it("can succeed conversion all -1", () => {
    //         // tslint:disable-next-line:max-line-length
    //         chai.expect(TritsConverter.wordsToTrits(Uint32Array.from([269718945, 542343255, 4200003925, 1954482518, 3377546167, 4248328838, 2825021359, 2427902707, 637477061, 2947513067, 2508783456, 2624991578])))
    //             // tslint:disable-next-line:max-line-length
    //             .to.deep.equal([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0]);
    //     });

    //     it("can succeed conversion", () => {
    //         // tslint:disable-next-line:max-line-length
    //         chai.expect(TritsConverter.wordsToTrits(Uint32Array.from([2354642196, 2665826127, 3297300288, 2043467568, 174813637, 2075823538, 1521955477, 2292515230, 3176161102, 3540858614, 2533589309, 560029539])))
    //             // tslint:disable-next-line:max-line-length
    //             .to.deep.equal([1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, -1, 1, 0, 0, 1, 0, 1, 1, 0, -1, -1, 1, 0, -1, 1, 1, -1, 1, -1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
    //     });
    // });

    describe("tritsToBigInteger", () => {
        it("can convert a trits to a big integer fixed -1", () => {
            // tslint:disable-next-line:max-line-length
            const trits = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
            const bitInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bitInt.toString()).to.be.equal("-43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
        });
        it("can convert a trits to a big integer fixed 0", () => {
            // tslint:disable-next-line:max-line-length
            const trits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const bitInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bitInt.toString()).to.be.equal("0");
        });
        it("can convert a trits to a big integer fixed 1", () => {
            // tslint:disable-next-line:max-line-length
            const trits = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            const bitInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bitInt.toString()).to.be.equal("43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
        });
        it("can convert a trits to a big integer random", () => {
            // tslint:disable-next-line:max-line-length
            const trits = [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, -1];
            const bitInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);
            chai.expect(bitInt.toString()).to.be.equal("-14904212390762556957762576168523208837087875624740470100089781100511276426277511101448811949885757797742060722336005");
        });
    });

    describe("bigIntegerToTrits", () => {
        it("can convert a trits to a big integer fixed -1", () => {
            const trits = Array(243);
            const bigInt = bigInteger("-43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
            TritsConverter.bigIntegerToTrits(bigInt, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(trits).to.be.deep.equal([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
        });
        it("can convert a trits to a big integer fixed 0", () => {
            const trits = Array(243);
            const bigInt = bigInteger("0");
            TritsConverter.bigIntegerToTrits(bigInt, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(trits).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it("can convert a trits to a big integer fixed 1", () => {
            const trits = Array(243);
            const bigInt = bigInteger("43594821242980479101455535292930385848482036202365875042762609718995483546861719971737774953415841558395527612832813");
            TritsConverter.bigIntegerToTrits(bigInt, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(trits).to.be.deep.equal([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        });
        it("can convert a trits to a big integer random", () => {
            const trits = Array(243);
            const bigInt = bigInteger("-14904212390762556957762576168523208837087875624740470100089781100511276426277511101448811949885757797742060722336005");
            TritsConverter.bigIntegerToTrits(bigInt, trits, 0, trits.length);
            // tslint:disable-next-line:max-line-length
            chai.expect(trits).to.be.deep.equal([1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, -1]);
        });
    });

    describe("bigIntegerToBytes", () => {
        it("can convert a big integer to bytes random", () => {
            const bytes = Array(48);
            TritsConverter.bigIntegerToBytes(bigInteger("12345678901234567890"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(bytes).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -85, 84, -87, -116, -21, 31, 10, -46]);
        });

        it("can convert a big integer to bytes negative random", () => {
            const bytes = Array(48);
            TritsConverter.bigIntegerToBytes(bigInteger("-12345678901234567890"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(bytes).to.be.deep.equal([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, -85, 86, 115, 20, -32, -11, 46]);
        });

        it("can convert a big integer to bytes zero", () => {
            const bytes = Array(48);
            TritsConverter.bigIntegerToBytes(bigInteger("0"), bytes, 0);
            // tslint:disable-next-line:max-line-length
            chai.expect(bytes).to.be.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe("bytesToBigInteger", () => {
        it("can convert a random bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -85, 84, -87, -116, -21, 31, 10, -46];
            const bigInt = TritsConverter.bytesToBigInteger(bytes, 0, bytes.length);
            chai.expect(bigInt.toString()).to.be.equal("12345678901234567890");
        });

        it("can convert a negative random bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 84, -85, 86, 115, 20, -32, -11, 46];
            const bigInt = TritsConverter.bytesToBigInteger(bytes, 0, bytes.length);
            chai.expect(bigInt.toString()).to.be.equal("-12345678901234567890");
        });

        it("can convert a 0 bytes to biginteger", () => {
            // tslint:disable-next-line:max-line-length
            const bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const bigInt = TritsConverter.bytesToBigInteger(bytes, 0, bytes.length);
            chai.expect(bigInt.toString()).to.be.equal("0");
        });
    });

    // describe("multiple conversion", () => {
    //     it("can convert lots of randoms trits to and from bigIntegers", () => {
    //         const numRounds = 10000;
    //         for (let c = 0; c < numRounds; c++) {
    //             const trits: number[] = Array(243);
    //             for (let i = 0; i < trits.length; i++) {
    //                 // tslint:disable-next-line:insecure-random
    //                 trits[i] = Math.floor(Math.random() * 3) - 1;
    //             }

    //             const bigInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);

    //             const trits2: number[] = Array(243);
    //             TritsConverter.bigIntegerToTrits(bigInt, trits2, 0, trits2.length);

    //             chai.expect(trits).to.be.deep.equal(trits2);

    //             if (c % 1000 === 0) {
    //                 // tslint:disable-next-line:no-console
    //                 console.log(`           ${c} of ${numRounds}`);
    //             }
    //         }
    //     });

    //     it("can convert lots of randoms trits to and from bytes and bigIntegers", () => {
    //         const numRounds = 10000;
    //         for (let c = 0; c < numRounds; c++) {
    //             const trits: number[] = Array(243);
    //             for (let i = 0; i < trits.length; i++) {
    //                 // tslint:disable-next-line:insecure-random
    //                 trits[i] = Math.floor(Math.random() * 3) - 1;
    //             }
    //             trits[242] = 0;
    //             let failMessage = `trits: ${JSON.stringify(trits)}\n`;

    //             const bigInt = TritsConverter.tritsToBigInteger(trits, 0, trits.length);
    //             failMessage += `bitInt: ${bigInt.toString()}\n`;

    //             const bytes = Array(48);
    //             TritsConverter.bigIntegerToBytes(bigInt, bytes, 0);
    //             const bigInt2 = TritsConverter.bytesToBigInteger(bytes, 0, bytes.length);
    //             const trits2: number[] = Array(243);
    //             TritsConverter.bigIntegerToTrits(bigInt2, trits2, 0, trits2.length);

    //             chai.expect(trits).to.be.deep.equal(trits2, failMessage);

    //             if (c % 1000 === 0) {
    //                 // tslint:disable-next-line:no-console
    //                 console.log(`           ${c} of ${numRounds}`);
    //             }
    //         }
    //     });
    // });
});
