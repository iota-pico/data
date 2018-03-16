/**
 * Tests for UnitsHelper.
 */
import * as chai from "chai";
import { UnitsHelper } from "../../src/helpers/unitsHelper";
import convertUnitsJson from "./convert-units.json";

describe("UnitsHelper", () => {
    it("can be created", () => {
        const obj = new UnitsHelper();
        chai.should().exist(obj);
    });

    describe("convertUnits", () => {
        it("can fail if not a number", () => {
            chai.expect(() => UnitsHelper.convertUnits(undefined, undefined, undefined)).to.throw("number formatted as a string");
        });

        it("can fail if not a valid number", () => {
            chai.expect(() => UnitsHelper.convertUnits("", undefined, undefined)).to.throw("number formatted as a string");
        });

        it("can fail if no unit from", () => {
            chai.expect(() => UnitsHelper.convertUnits("1", undefined, undefined)).to.throw("unitFrom");
        });

        it("can fail if not a valid unit from", () => {
            chai.expect(() => UnitsHelper.convertUnits("1", "x", undefined)).to.throw("unitFrom must be");
        });

        it("can fail if no unit to", () => {
            chai.expect(() => UnitsHelper.convertUnits("1", "i", undefined)).to.throw("unitTo");
        });

        it("can fail if not a valid unit to", () => {
            chai.expect(() => UnitsHelper.convertUnits("1", "i", "x")).to.throw("unitTo must be");
        });

        it("can convert from and to", () => {
            const tests: { value: string; from: string; to: string; expected: string }[] = [
                { value: "1234.5678", from: "i", to: "i", expected: "1234.5678"},
                { value: "100", from: "Gi", to: "i", expected: "100000000000"},
                { value: "10.1", from: "Gi", to: "i", expected: "10100000000"},
                { value: "1", from: "i", to: "Ti", expected: "0.000000000001"},
                { value: "1", from: "Ti", to: "i", expected: "1000000000000"},
                { value: "1000", from: "Gi", to: "Ti", expected: "1"},
                { value: ".1", from: "Gi", to: "Ti", expected: "0.0001"}
            ];
            tests.forEach(test => {
                chai.expect(UnitsHelper.convertUnits(test.value, test.from, test.to)).to.be.equal(test.expected);
            });
        });

        it("can convert from and to json", () => {
            const numTestRounds = convertUnitsJson.length;
            for (let i = 0; i < numTestRounds; i++) {
                if (i % (numTestRounds / 10) === 0) {
                    // tslint:disable-next-line:no-console
                    console.log(`\t\t\t${i} of ${numTestRounds}`);
                }
                chai.expect(UnitsHelper.convertUnits(convertUnitsJson[i].value, convertUnitsJson[i].from, convertUnitsJson[i].to)).to.be.equal(convertUnitsJson[i].expected);
            }
        });
    });
});
