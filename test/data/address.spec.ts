/**
 * Tests for Address.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { Address } from "../../src/data/address";
import { Trytes } from "../../src/data/trytes";

describe("Address", () => {
    describe("create", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Address.create(undefined)).to.throw(CoreError);
        });

        it("can fail with invalid length", () => {
            chai.expect(() => Address.create(Trytes.create("A"))).to.throw(CoreError);
        });

        it("can succeed with valid length", () => {
            const obj = Address.create(Trytes.create("A".repeat(81)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(obj.toTrytesWithChecksum().toString()).to.equal("A".repeat(81) + "9".repeat(9));
        });

        it("can succeed with valid length with checksum", () => {
            const obj = Address.create(Trytes.create("A".repeat(90)));
            chai.expect(obj.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(obj.toTrytesWithChecksum().toString()).to.equal("A".repeat(90));
        });
    });
});
