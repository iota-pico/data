[@iota-pico/data](../README.md) > [AsciiTrytesConverter](../classes/asciitrytesconverter.md)

# Class: AsciiTrytesConverter

Trytes converter that converts to and from a string.

## Hierarchy

**AsciiTrytesConverter**

## Implements

* [ITrytesConverter](../interfaces/itrytesconverter.md)<`string`>

## Index

### Methods

* [from](asciitrytesconverter.md#from)
* [to](asciitrytesconverter.md#to)

---

## Methods

<a id="from"></a>

###  from

▸ **from**(trytes: *[Trytes](trytes.md)*): `string`

*Implementation of [ITrytesConverter](../interfaces/itrytesconverter.md).[from](../interfaces/itrytesconverter.md#from)*

*Defined in [converters/asciiTrytesConverter.ts:44](https://github.com/iota-pico/data/blob/501a2d7/src/converters/asciiTrytesConverter.ts#L44)*

Convert trytes into a string value.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md) |  to convert into a string value. |

**Returns:** `string`
The string value converted from the trytes.

___
<a id="to"></a>

###  to

▸ **to**(value: *`string`*): [Trytes](trytes.md)

*Defined in [converters/asciiTrytesConverter.ts:16](https://github.com/iota-pico/data/blob/501a2d7/src/converters/asciiTrytesConverter.ts#L16)*

Convert a string value into trytes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  value to convert into trytes. |

**Returns:** [Trytes](trytes.md)
The trytes representation of the value.

___

