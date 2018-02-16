[@iota-pico/data](../README.md) > [ITrytesConverter](../interfaces/itrytesconverter.md)



# Interface: ITrytesConverter


Represents a converter which can convert to and from trytes.
*__interface__*: 


## Type parameters
#### T 

The generic type for the conversion methods.

## Implemented by

* [AsciiTrytesConverter](../classes/asciitrytesconverter.md)
* [ObjectTrytesConverter](../classes/objecttrytesconverter.md)


## Methods
<a id="from"></a>

###  from

► **from**(trytes: *[Trytes](../classes/trytes.md)*): `T`



*Defined in [interfaces/ITrytesConverter.ts:21](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/interfaces/ITrytesConverter.ts#L21)*



Convert a trytes into a value.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](../classes/trytes.md)   |  to convert into value. |





**Returns:** `T`
The value converted from the trytes.






___

<a id="to"></a>

###  to

► **to**(value: *`T`*): [Trytes](../classes/trytes.md)



*Defined in [interfaces/ITrytesConverter.ts:14](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/interfaces/ITrytesConverter.ts#L14)*



Convert a value into trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `T`   |  to convert into trytes. |





**Returns:** [Trytes](../classes/trytes.md)
The trytes representation of the value.






___


