/**
 * Tests for Transfer.
 */
import * as chai from "chai";
import { Address } from "../../src/data/address";
import { Tag } from "../../src/data/tag";
import { Transfer } from "../../src/data/transfer";
import { Trytes } from "../../src/data/trytes";

describe("Transfer", () => {
    describe("create", () => {
        it("can fail with undefined params", () => {
            chai.expect(() => Transfer.fromParams(undefined, undefined, undefined, undefined)).to.throw("The address");
        });

        it("can fail with undefined value", () => {
            chai.expect(() => Transfer.fromParams(Address.create(Trytes.create("A".repeat(81))), undefined, undefined, undefined)).to.throw("The value");
        });

        it("can fail with value < 0", () => {
            chai.expect(() => Transfer.fromParams(Address.create(Trytes.create("A".repeat(81))), -1, undefined, undefined)).to.throw("The value");
        });

        it("can fail with undefined trytes", () => {
            chai.expect(() => Transfer.fromParams(Address.create(Trytes.create("A".repeat(81))), 0, undefined, undefined)).to.throw("The message");
        });

        it("can fail with undefined tag", () => {
            chai.expect(() => Transfer.fromParams(Address.create(Trytes.create("A".repeat(81))), 0, Trytes.create("B".repeat(81)), undefined)).to.throw("The tag");
        });

        it("can succeed with valid parameters", () => {
            const input = Transfer.fromParams(Address.create(Trytes.create("A".repeat(81))), 3, Trytes.create("B".repeat(81)), Tag.create(Trytes.create("C".repeat(27))));
            chai.expect(input.address.toTrytes().toString()).to.equal("A".repeat(81));
            chai.expect(input.value).to.equal(3);
            chai.expect(input.message.toString()).to.equal("B".repeat(81));
            chai.expect(input.tag.toTrytes().toString()).to.equal("C".repeat(27));
        });
    });
});
