"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const trytes_1 = require("./trytes");
/**
 * A class for handling signature fragments.
 */
class SignatureFragment {
    /* @internal */
    constructor(trytes) {
        this._trytes = trytes;
    }
    /**
     * Create signature fragment from trytes.
     * @param signatureFragment The trytes to create the signature fragment from.
     * @returns An instance of SignatureFragment.
     */
    static create(signatureFragment) {
        if (signatureFragment === undefined || signatureFragment === null) {
            throw new coreError_1.CoreError("The signatureFragment should not be undefined or null");
        }
        const length = signatureFragment.length();
        if (length !== SignatureFragment.LENGTH) {
            throw new coreError_1.CoreError(`The signatureFragment should be ${SignatureFragment.LENGTH} characters in length`, { length });
        }
        return new SignatureFragment(signatureFragment);
    }
    /**
     * Convert the signature fragment to trytes.
     * @returns Trytes version of the signature fragment.
     */
    toTrytes() {
        return this._trytes;
    }
}
/* The valid length for a signature fragment */
SignatureFragment.LENGTH = 2187;
/* An empty signature fragment */
SignatureFragment.EMPTY = SignatureFragment.create(trytes_1.Trytes.create("9".repeat(SignatureFragment.LENGTH)));
exports.SignatureFragment = SignatureFragment;
