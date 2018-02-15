/**
 * Tests for Bundle.
 */
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import * as chai from "chai";
import { Address } from "../../src/data/address";
import { Bundle } from "../../src/data/bundle";
import { SignatureFragment } from "../../src/data/signatureFragment";
import { Tag } from "../../src/data/tag";
import { Trytes } from "../../src/data/trytes";

describe("Bundle", () => {
    describe("constructor", () => {
        it("can be created", () => {
            const obj = new Bundle();
            chai.expect(obj).to.not.be.equal(undefined);
        });
    });

    describe("addTransactions", () => {
        it("can succeed adding transactions", () => {
            const obj = new Bundle();

            obj.addTransactions(2, Address.create(
                Trytes.create("A".repeat(81))),
                                100,
                                Tag.create(Trytes.create("B".repeat(27))),
                                2345);

            chai.expect(obj.transactions.length).to.be.equal(2);
            chai.expect(obj.transactions[0].address.toTrytes().toString()).to.be.equal("A".repeat(81));
            chai.expect(obj.transactions[0].obsoleteTag.toTrytes().toString()).to.be.equal("B".repeat(27));
            chai.expect(obj.transactions[0].tag.toTrytes().toString()).to.be.equal("B".repeat(27));
            chai.expect(obj.transactions[0].value.toNumber()).to.be.equal(100);
            chai.expect(obj.transactions[0].timestamp.toNumber()).to.be.equal(2345);

            chai.expect(obj.transactions[1].address.toTrytes().toString()).to.be.equal("A".repeat(81));
            chai.expect(obj.transactions[1].obsoleteTag.toTrytes().toString()).to.be.equal("B".repeat(27));
            chai.expect(obj.transactions[1].tag.toTrytes().toString()).to.be.equal("B".repeat(27));
            chai.expect(obj.transactions[1].value.toNumber()).to.be.equal(0);
            chai.expect(obj.transactions[1].timestamp.toNumber()).to.be.equal(2345);
        });
    });

    describe("addSignatureFragments", () => {
        it("can fail to add signatures", () => {
            const obj = new Bundle();
            chai.expect(() => obj.addSignatureFragments(undefined)).to.throw(CoreError);
        });

        it("can fail to add signatures of different length", () => {
            const obj = new Bundle();

            obj.addTransactions(2, Address.create(
                Trytes.create("A".repeat(81))),
                                100,
                                Tag.create(Trytes.create("B".repeat(27))),
                                2345);

            chai.expect(() => obj.addSignatureFragments([])).to.throw(CoreError);
        });

        it("can succeed adding signatures", () => {
            const obj = new Bundle();

            obj.addTransactions(2, Address.create(
                Trytes.create("A".repeat(81))),
                                100,
                                Tag.create(Trytes.create("B".repeat(27))),
                                2345);

            obj.addSignatureFragments([
                SignatureFragment.create(Trytes.create("A".repeat(2187))),
                undefined
            ]);

            chai.expect(obj.transactions[0].signatureMessageFragment.toTrytes().toString()).to.be.equal("A".repeat(2187));
            chai.expect(obj.transactions[0].trunkTransaction.toTrytes().toString()).to.be.equal("9".repeat(81));
            chai.expect(obj.transactions[0].branchTransaction.toTrytes().toString()).to.be.equal("9".repeat(81));
            chai.expect(obj.transactions[0].attachmentTimestamp.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[0].attachmentTimestampLowerBound.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[0].attachmentTimestampUpperBound.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[0].nonce.toTrytes().toString()).to.be.equal("9".repeat(27));

            chai.expect(obj.transactions[1].signatureMessageFragment.toTrytes().toString()).to.be.equal("9".repeat(2187));
            chai.expect(obj.transactions[1].trunkTransaction.toTrytes().toString()).to.be.equal("9".repeat(81));
            chai.expect(obj.transactions[1].branchTransaction.toTrytes().toString()).to.be.equal("9".repeat(81));
            chai.expect(obj.transactions[1].attachmentTimestamp.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[1].attachmentTimestampLowerBound.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[1].attachmentTimestampUpperBound.toTrytes().toString()).to.be.equal("9".repeat(9));
            chai.expect(obj.transactions[1].nonce.toTrytes().toString()).to.be.equal("9".repeat(27));
        });
    });
});
