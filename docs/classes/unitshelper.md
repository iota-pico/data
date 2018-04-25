[@iota-pico/data](../README.md) > [UnitsHelper](../classes/unitshelper.md)

# Class: UnitsHelper

Helper class for units conversion.

## Hierarchy

**UnitsHelper**

## Index

### Methods

* [convertUnits](unitshelper.md#convertunits)
* [format](unitshelper.md#format)

### Object literals

* [UNIT_MAP](unitshelper.md#unit_map)

---

## Methods

<a id="convertunits"></a>

### `<Static>` convertUnits

▸ **convertUnits**(value: *`string`*, unitFrom: *`string`*, unitTo: *`string`*): `string`

*Defined in [helpers/unitsHelper.ts:29](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L29)*

Convert from one unit to another. [https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51](https://github.com/iotaledger/iota.lib.js/blob/a1b2e9e05d7cab3ef394900e5ca75fb46464e608/lib/utils/utils.js#L16-L51)

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`   |  To convert the units. |
| unitFrom | `string`   |  The source unit of the value. |
| unitTo | `string`   |  The destination unit of the value. |

**Returns:** `string`
The converted value.

___

<a id="format"></a>

### `<Static>` format

▸ **format**(value: *`string`*, maxDecimalPlaces?: *`number`*): `string`

*Defined in [helpers/unitsHelper.ts:118](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L118)*

Format the iota value as its best representation.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `string`  | - |   The value in iotas to format. |
| maxDecimalPlaces | `number`  | 0 |   The maximum number of decimal places to include. |

**Returns:** `string`
The iota value formatted with units.

___

## Object literals

<a id="unit_map"></a>

### `<Static>` UNIT_MAP

** UNIT_MAP**:  *`object`* 

*Defined in [helpers/unitsHelper.ts:12](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L12)*

Conversion table for units.

<a id="unit_map.gi"></a>

####  Gi

**●  Gi**:  *`number`*  = 9

*Defined in [helpers/unitsHelper.ts:16](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L16)*

___
<a id="unit_map.ki"></a>

####  Ki

**●  Ki**:  *`number`*  = 3

*Defined in [helpers/unitsHelper.ts:14](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L14)*

___
<a id="unit_map.mi"></a>

####  Mi

**●  Mi**:  *`number`*  = 6

*Defined in [helpers/unitsHelper.ts:15](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L15)*

___
<a id="unit_map.pi"></a>

####  Pi

**●  Pi**:  *`number`*  = 15

*Defined in [helpers/unitsHelper.ts:18](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L18)*

___
<a id="unit_map.ti"></a>

####  Ti

**●  Ti**:  *`number`*  = 12

*Defined in [helpers/unitsHelper.ts:17](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L17)*

___
<a id="unit_map.i"></a>

####  i

**●  i**:  *`number`*  = 0

*Defined in [helpers/unitsHelper.ts:13](https://github.com/iota-pico/data/blob/619b016/src/helpers/unitsHelper.ts#L13)*

___

___

