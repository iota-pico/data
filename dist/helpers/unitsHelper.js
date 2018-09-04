Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const stringHelper_1 = require("@iota-pico/core/dist/helpers/stringHelper");
const dataError_1 = require("../error/dataError");
/**
 * Helper class for units conversion.
 */
class UnitsHelper {
    /**
     * Convert from one unit to another.
     * https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51
     * @param value To convert the units.
     * @param unitFrom The source unit of the value.
     * @param unitTo The destination unit of the value.
     * @returns The converted value.
     */
    static convertUnits(value, unitFrom, unitTo) {
        if (!numberHelper_1.NumberHelper.isFloatString(value)) {
            throw new dataError_1.DataError("The value must be a number formatted as a string");
        }
        if (stringHelper_1.StringHelper.isEmpty(unitFrom)) {
            throw new dataError_1.DataError("The unitFrom can not be empty");
        }
        if (!(unitFrom in UnitsHelper.UNIT_MAP)) {
            throw new dataError_1.DataError(`The unitFrom must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
        }
        if (stringHelper_1.StringHelper.isEmpty(unitTo)) {
            throw new dataError_1.DataError("The unitTo can not be empty");
        }
        if (!(unitTo in UnitsHelper.UNIT_MAP)) {
            throw new dataError_1.DataError(`The unitTo must be one of [${Object.keys(UnitsHelper.UNIT_MAP).join(", ")}]`);
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
            }
            else {
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
    static format(value, maxDecimalPlaces = 0) {
        if (!numberHelper_1.NumberHelper.isIntegerString(value)) {
            throw new dataError_1.DataError("The value must be a number formatted as a string");
        }
        if (!numberHelper_1.NumberHelper.isNumber(maxDecimalPlaces) || maxDecimalPlaces < 0) {
            throw new dataError_1.DataError("The maxDecimalPlaces must be a number >= 0");
        }
        const checkLength = value.length;
        let bestUnits = "i";
        if (checkLength > 15) {
            bestUnits = "Pi";
        }
        else if (checkLength > 12) {
            bestUnits = "Ti";
        }
        else if (checkLength > 9) {
            bestUnits = "Gi";
        }
        else if (checkLength > 6) {
            bestUnits = "Mi";
        }
        else if (checkLength > 3) {
            bestUnits = "Ki";
        }
        const converted = UnitsHelper.convertUnits(value, "i", bestUnits);
        const parts = converted.split(".");
        const major = parts[0];
        let minor = "";
        if (parts.length === 2 && maxDecimalPlaces > 0) {
            minor = parts[1].substr(0, maxDecimalPlaces);
        }
        return minor.length === 0 ? `${major} ${bestUnits}` : `${major}.${minor} ${bestUnits}`;
    }
}
/**
 * Conversion table for units.
 */
UnitsHelper.UNIT_MAP = {
    i: 0,
    Ki: 3,
    Mi: 6,
    Gi: 9,
    Ti: 12,
    Pi: 15
};
exports.UnitsHelper = UnitsHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdHNIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy91bml0c0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFFL0M7O0dBRUc7QUFDSCxNQUFhLFdBQVc7SUFhcEI7Ozs7Ozs7T0FPRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUN0RSxJQUFJLENBQUMsMkJBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLHFCQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDckMsTUFBTSxJQUFJLHFCQUFTLENBQUMsZ0NBQWdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDeEc7UUFFRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlCLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxxQkFBUyxDQUFDLDhCQUE4QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RH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