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

► **from**(trytes: *[Trytes](trytes.md)*): `T`



*Implementation of [ITrytesConverter](../interfaces/itrytesconverter.md).[from](../interfaces/itrytesconverter.md#from)*

*Defined in [converters/objectTrytesConverter.ts:39](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/converters/objectTrytesConverter.ts#L39)*



Convert trytes into a string value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)   |  to convert into a string value. |





**Returns:** `T`
The string value converted from the trytes.






___

<a id="to"></a>

###  to

► **to**(value: *`T`*): [Trytes](trytes.md)



*Implementation of [ITrytesConverter](../interfaces/itrytesconverter.md).[to](../interfaces/itrytesconverter.md#to)*

*Defined in [converters/objectTrytesConverter.ts:19](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/converters/objectTrytesConverter.ts#L19)*



Convert an object value into trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  - |





**Returns:** [Trytes](trytes.md)
The trytes representation of the object.






___


