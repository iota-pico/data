[@iota-pico/data](../README.md) > [UnitsHelper](../classes/unitshelper.md)



# Class: UnitsHelper


Helper class for units conversion.

## Index

### Methods

* [convertUnits](unitshelper.md#convertunits)


### Object literals

* [UNIT_MAP](unitshelper.md#unit_map)



---
## Methods
<a id="convertunits"></a>

### «Static» convertUnits

► **convertUnits**(value: *`string`*, unitFrom: *`string`*, unitTo: *`string`*): `string`



*Defined in helpers/unitsHelper.ts:29*



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


<a id="unit_map"></a>

## Object literal: UNIT_MAP


Conversion table for units.


<a id="unit_map.gi"></a>

###  Gi

**●  Gi**:  *`number`*  = 9

*Defined in helpers/unitsHelper.ts:16*





___
<a id="unit_map.ki"></a>

###  Ki

**●  Ki**:  *`number`*  = 3

*Defined in helpers/unitsHelper.ts:14*





___
<a id="unit_map.mi"></a>

###  Mi

**●  Mi**:  *`number`*  = 6

*Defined in helpers/unitsHelper.ts:15*





___
<a id="unit_map.pi"></a>

###  Pi

**●  Pi**:  *`number`*  = 15

*Defined in helpers/unitsHelper.ts:18*





___
<a id="unit_map.ti"></a>

###  Ti

**●  Ti**:  *`number`*  = 12

*Defined in helpers/unitsHelper.ts:17*





___
<a id="unit_map.i"></a>

###  i

**●  i**:  *`number`*  = 0

*Defined in helpers/unitsHelper.ts:13*





___


