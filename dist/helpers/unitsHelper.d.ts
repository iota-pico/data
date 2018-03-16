/**
 * Helper class for units conversion.
 */
export declare class UnitsHelper {
    /**
     * Conversion table for units.
     */
    static readonly UNIT_MAP: {
        [id: string]: number;
    };
    /**
     * Convert from one unit to another.
     * https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51
     * @param value To convert the units.
     * @param unitFrom The source unit of the value.
     * @param unitTo The destination unit of the value.
     * @returns The converted value.
     */
    static convertUnits(value: string, unitFrom: string, unitTo: string): string;
}
