/**
 * Tests for Tag.
 */
import * as chai from "chai";
import { Tag } from "../../src/data/tag";
import { Trytes } from "../../src/data/trytes";

describe("Tag", () => {
    describe("create", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Tag.create(undefined)).to.throw("The tag ");
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Tag.create(Trytes.create("AAAAAAAAAAAAAAAAAAAAAAAAAAAA"))).to.throw("at most");
        });

        it("can succeed with valid length", () => {
            const obj = Tag.create(Trytes.create("A".repeat(27)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(27));
        });

        it("can succeed with length too short", () => {
            const obj = Tag.create(Trytes.create("A".repeat(10)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(10) + "9".repeat(17));
        });
    });
});
