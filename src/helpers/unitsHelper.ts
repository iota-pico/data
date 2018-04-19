import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { StringHelper } from "@iota-pico/core/dist/helpers/stringHelper";
import { DataError } from "../error/dataError";

/**
 * Helper class for units conversion.
 */
export class UnitsHelper {
    /**
     * Conversion table for units.
     */
    public static readonly UNIT_MAP: { [id: string]: number } = {
        i: 0,
        Ki: 3,
        Mi: 6,
        Gi: 9,
        Ti: 12,
        Pi: 15
    };

    /**
     * Convert from one unit to another.
     * https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51
     * @param value To convert the units.
     * @param unitFrom The source unit of the value.
     * @param unitTo The destination unit of the value.
     * @returns The converted value.
     */
    public static convertUnits(value: string, unitFrom: string, unitTo: string): string {
        if (!NumberHelper.isFloatString(value)) {
            throw new DataError("The value must be a number formatted as a string");
        }

        if (StringHelper.isEmpty(unitFrom)) {
            throw new DataError("The unitFrom can not be empty");
        }

        if (!(unitFrom in UnitsHelper.UNIT_MAP)) {
            throw new DataError(`The unitFrom must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
        }

        if (StringHelper.isEmpty(unitTo)) {
            throw new DataError("The unitTo can not be empty");
        }

        if (!(unitTo in UnitsHelper.UNIT_MAP)) {
            throw new DataError(`The unitTo must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
        }

        let workingValue = value;
        if (unitTo !== unitFrom) {
            // First strip and remember any negative
            const isNeg = value[0] === "-";
            workingValue = workingValue.replace("-", "");

            // If the first character is a dot then prepend 0
            if (workingValue[0] === ".") {
                workingValue = `0${workingValue}`;
            }

            // Now sanitize the number to make sure it has a dot
            const dotIndex = workingValue.indexOf(".");
            if (dotIndex < 0) {
                // There is no dot then add one
                workingValue = `${workingValue}.0`;
            }

            const dotFromEnd = workingValue.length - workingValue.indexOf(".");
            const moveDotBy = UnitsHelper.UNIT_MAP[unitFrom] - UnitsHelper.UNIT_MAP[unitTo];

            if (moveDotBy > 0) {
                // Pad the string by as many characters from its current dot position
                // so there is room to move the dot
                const additionalCharacters = moveDotBy - dotFromEnd + 1;
                if (additionalCharacters > 0) {
                    // Add additional characters only if we need them
                    workingValue = `${workingValue}${"0".repeat(additionalCharacters)}`;
                }
            } else {
                // Pad the string by as many characters from its current dot position
                // so there is room to move the dot
                const additionalCharacters = Math.abs(moveDotBy - dotFromEnd + 2);
                workingValue = `${"0".repeat(additionalCharacters)}${workingValue}`;
            }

            // Remove current dot and add moved dot back in
            const newDotIndex = workingValue.indexOf(".");
            workingValue = workingValue.replace(".", "");
            workingValue = `${workingValue.substr(0, newDotIndex + moveDotBy)}.${workingValue.substr(newDotIndex + moveDotBy)}`;

            // Strip any leading zeros
            workingValue = workingValue.replace(/^0+(?!\.|$)/, "");

            // Strip any trailing zeros and dot zeros
            workingValue = workingValue.replace(/(\.[0-9]*[1-9])0*|\.0*/, "$1");

            // Add the negative back if there was one
            if (isNeg) {
                workingValue = `-${workingValue}`;
            }
        }

        // If the to is 'i' then no decimal places allowed
        if (unitTo === "i") {
            const parts = workingValue.split(".");
            workingValue = parts[0];
        }

        return workingValue;
    }

    /**
     * Format the iota value as its best representation.
     * @param value The value in iotas to format.
     * @param maxDecimalPlaces The maximum number of decimal places to include.
     * @returns The iota value formatted with units.
     */
    public static format(value: string, maxDecimalPlaces: number = 0): string {
        if (!NumberHelper.isIntegerString(value)) {
            throw new DataError("The value must be a number formatted as a string");
        }

        if (!NumberHelper.isNumber(maxDecimalPlaces) || maxDecimalPlaces < 0) {
            throw new DataError("The maxDecimalPlaces must be a number >= 0");
        }

        const checkLength = value.length;

        let bestUnits = "i";
        if (checkLength > 15) {
            bestUnits = "Pi";
        } else if (checkLength > 12) {
            bestUnits = "Ti";
        } else if (checkLength > 9) {
            bestUnits = "Gi";
        } else if (checkLength > 6) {
            bestUnits = "Mi";
        } else if (checkLength > 3) {
            bestUnits = "Ki";
        }

        const converted = UnitsHelper.convertUnits(value, "i", bestUnits);

        const parts = converted.split(".");
        const major = parts[0];
        let minor = "";

        if (parts.length === 2 && maxDecimalPlaces > 0) {
            minor = parts[1];
            if (minor.length > maxDecimalPlaces) {
                minor = minor.substr(0, maxDecimalPlaces);
            }
        }

        return minor.length === 0 ? `${major} ${bestUnits}` : `${major}.${minor} ${bestUnits}`;
    }
}
