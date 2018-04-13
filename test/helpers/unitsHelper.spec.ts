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

    describe("format", () => {
        it("can fail if not a number string", () => {
            chai.expect(() => UnitsHelper.format(undefined)).to.throw("number formatted as a string");
        });

        it("can fail if max decimal places < 0", () => {
            chai.expect(() => UnitsHelper.format("100", -1)).to.throw(">= 0");
        });

        it("can format", () => {
            const tests: { value: string; dp: number; expected: string }[] = [
                { value: "1", dp: 0, expected: "1 i"},
                { value: "1", dp: 1, expected: "1 i"},
                { value: "1", dp: 2, expected: "1 i"},
                { value: "12", dp: 0, expected: "12 i"},
                { value: "12", dp: 1, expected: "12 i"},
                { value: "12", dp: 2, expected: "12 i"},
                { value: "123", dp: 0, expected: "123 i"},
                { value: "123", dp: 1, expected: "123 i"},
                { value: "123", dp: 2, expected: "123 i"},
                { value: "1234", dp: 0, expected: "1 Ki"},
                { value: "1234", dp: 1, expected: "1.2 Ki"},
                { value: "1234", dp: 2, expected: "1.23 Ki"},
                { value: "12345", dp: 0, expected: "12 Ki"},
                { value: "12345", dp: 1, expected: "12.3 Ki"},
                { value: "12345", dp: 2, expected: "12.34 Ki"},
                { value: "123456", dp: 0, expected: "123 Ki"},
                { value: "123456", dp: 1, expected: "123.4 Ki"},
                { value: "123456", dp: 2, expected: "123.45 Ki"},
                { value: "1234567", dp: 0, expected: "1 Mi"},
                { value: "1234567", dp: 1, expected: "1.2 Mi"},
                { value: "1234567", dp: 2, expected: "1.23 Mi"},
                { value: "12345678", dp: 0, expected: "12 Mi"},
                { value: "12345678", dp: 1, expected: "12.3 Mi"},
                { value: "12345678", dp: 2, expected: "12.34 Mi"},
                { value: "123456789", dp: 0, expected: "123 Mi"},
                { value: "123456789", dp: 1, expected: "123.4 Mi"},
                { value: "123456789", dp: 2, expected: "123.45 Mi"},
                { value: "1234567891", dp: 0, expected: "1 Gi"},
                { value: "1234567891", dp: 1, expected: "1.2 Gi"},
                { value: "1234567891", dp: 2, expected: "1.23 Gi"},
                { value: "12345678912", dp: 0, expected: "12 Gi"},
                { value: "12345678912", dp: 1, expected: "12.3 Gi"},
                { value: "12345678912", dp: 2, expected: "12.34 Gi"},
                { value: "123456789123", dp: 0, expected: "123 Gi"},
                { value: "123456789123", dp: 1, expected: "123.4 Gi"},
                { value: "123456789123", dp: 2, expected: "123.45 Gi"},
                { value: "1234567891234", dp: 0, expected: "1 Ti"},
                { value: "1234567891234", dp: 1, expected: "1.2 Ti"},
                { value: "1234567891234", dp: 2, expected: "1.23 Ti"},
                { value: "12345678912345", dp: 0, expected: "12 Ti"},
                { value: "12345678912345", dp: 1, expected: "12.3 Ti"},
                { value: "12345678912345", dp: 2, expected: "12.34 Ti"},
                { value: "123456789123456", dp: 0, expected: "123 Ti"},
                { value: "123456789123456", dp: 1, expected: "123.4 Ti"},
                { value: "123456789123456", dp: 2, expected: "123.45 Ti"},
                { value: "1234567891234567", dp: 0, expected: "1 Pi"},
                { value: "1234567891234567", dp: 1, expected: "1.2 Pi"},
                { value: "1234567891234567", dp: 2, expected: "1.23 Pi"},
                { value: "12345678912345678", dp: 0, expected: "12 Pi"},
                { value: "12345678912345678", dp: 1, expected: "12.3 Pi"},
                { value: "12345678912345678", dp: 2, expected: "12.34 Pi"},
                { value: "123456789123456789", dp: 0, expected: "123 Pi"},
                { value: "123456789123456789", dp: 1, expected: "123.4 Pi"},
                { value: "123456789123456789", dp: 2, expected: "123.45 Pi"}
            ];
            tests.forEach(test => {
                // tslint:disable-next-line:no-console
                console.log(`\t\t\t${test.value} ${test.dp} = ${test.expected}`);
                chai.expect(UnitsHelper.format(test.value, test.dp)).to.be.equal(test.expected);
            });
        });
    });
});
