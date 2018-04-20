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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdHNIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy91bml0c0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSxrREFBK0M7QUFFL0M7O0dBRUc7QUFDSDtJQWFJOzs7Ozs7O09BT0c7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFFLE1BQWM7UUFDdEUsSUFBSSxDQUFDLDJCQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLGdDQUFnQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hHO1FBRUQsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUkscUJBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQyxNQUFNLElBQUkscUJBQVMsQ0FBQyw4QkFBOEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0RztRQUVELElBQUks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