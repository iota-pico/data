[@iota-pico/data](../README.md) > [Trytes](../classes/trytes.md)



# Class: Trytes


A class for handling trytes.

## Index

### Properties

* [ALPHABET](trytes.md#alphabet)


### Methods

* [toString](trytes.md#tostring)
* [create](trytes.md#create)
* [isValid](trytes.md#isvalid)



---
## Properties
<a id="alphabet"></a>

### «Static» ALPHABET

**●  ALPHABET**:  *`string`*  = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"

*Defined in [data/trytes.ts:8](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/data/trytes.ts#L8)*





___


## Methods
<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/trytes.ts:49](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/data/trytes.ts#L49)*



Convert the trytes to a string.




**Returns:** `string`
String representation of the trytes.






___

<a id="create"></a>

### «Static» create

► **create**(value: *`string`*, length?: *`number`*): [Trytes](trytes.md)



*Defined in [data/trytes.ts:24](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/data/trytes.ts#L24)*



Create trytes from a string.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `string`  | - |   A string to create the trytes from. |
| length | `number`  | 0 |   An optional validation length for the trytes, 0 means ignore length. |





**Returns:** [Trytes](trytes.md)
An instance of Trytes.






___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(value: *`string`*, length?: *`number`*): `boolean`



*Defined in [data/trytes.ts:37](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/data/trytes.ts#L37)*



Does the value contain valid trytes.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `string`  | - |   A string to validate as trytes. |
| length | `number`  | 0 |   An optional validation length for the trytes, 0 means ignore length. |





**Returns:** `boolean`
True if the input was valid trytes.






___


