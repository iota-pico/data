[@iota-pico/data](../README.md) > [ObjectTrytesConverter](../classes/objecttrytesconverter.md)



# Class: ObjectTrytesConverter


Trytes converter that converts to and from an object.

## Type parameters
#### T 

The generic type for the conversion methods.

## Implements

* [ITrytesConverter](../interfaces/itrytesconverter.md)`T`

## Index

### Methods

* [from](objecttrytesconverter.md#from)
* [to](objecttrytesconverter.md#to)



---
## Methods
<a id="from"></a>

###  from

► **from**(trytes: *[Trytes](trytes.md)⎮`null`⎮`undefined`*): `T`



*Defined in [converters/objectTrytesConverter.ts:45](https://github.com/iotaeco/iota-pico-data/blob/bba235e/src/converters/objectTrytesConverter.ts#L45)*



Convert trytes into a string value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)⎮`null`⎮`undefined`   |  to convert into a string value. |





**Returns:** `T`
The string value converted from the trytes.






___

<a id="to"></a>

###  to

► **to**(value: *`T`⎮`null`⎮`undefined`*): [Trytes](trytes.md)



*Defined in [converters/objectTrytesConverter.ts:18](https://github.com/iotaeco/iota-pico-data/blob/bba235e/src/converters/objectTrytesConverter.ts#L18)*



Convert an object value into trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`⎮`null`⎮`undefined`   |  - |





**Returns:** [Trytes](trytes.md)
The trytes representation of the object.






___


