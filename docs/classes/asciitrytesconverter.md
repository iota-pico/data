[@iota-pico/data](../README.md) > [AsciiTrytesConverter](../classes/asciitrytesconverter.md)



# Class: AsciiTrytesConverter


Trytes converter that converts to and from a string.

## Implements

* [ITrytesConverter](../interfaces/itrytesconverter.md)`string`

## Index

### Methods

* [from](asciitrytesconverter.md#from)
* [to](asciitrytesconverter.md#to)



---
## Methods
<a id="from"></a>

###  from

► **from**(trytes: *[Trytes](trytes.md)⎮`null`⎮`undefined`*): `string`



*Defined in [converters/asciiTrytesConverter.ts:43](https://github.com/iotaeco/iota-pico-data/blob/bba235e/src/converters/asciiTrytesConverter.ts#L43)*



Convert trytes into a string value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)⎮`null`⎮`undefined`   |  to convert into a string value. |





**Returns:** `string`
The string value converted from the trytes.






___

<a id="to"></a>

###  to

► **to**(value: *`string`⎮`null`⎮`undefined`*): [Trytes](trytes.md)



*Defined in [converters/asciiTrytesConverter.ts:15](https://github.com/iotaeco/iota-pico-data/blob/bba235e/src/converters/asciiTrytesConverter.ts#L15)*



Convert a string value into trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `string`⎮`null`⎮`undefined`   |  - |





**Returns:** [Trytes](trytes.md)
The trytes representation of the value.






___


