[@iota-pico/data](../README.md) > [Trytes](../classes/trytes.md)



# Class: Trytes


A class for handling trytes.

## Index

### Properties

* [ALPHABET](trytes.md#alphabet)


### Methods

* [length](trytes.md#length)
* [sub](trytes.md#sub)
* [toString](trytes.md#tostring)
* [fromString](trytes.md#fromstring)
* [isValid](trytes.md#isvalid)



---
## Properties
<a id="alphabet"></a>

### «Static» ALPHABET

**●  ALPHABET**:  *`string`*  = "9ABCDEFGHIJKLMNOPQRSTUVWXYZ"

*Defined in [data/trytes.ts:12](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L12)*



All the characters that can be used in trytes.




___


## Methods
<a id="length"></a>

###  length

► **length**(): `number`



*Defined in [data/trytes.ts:67](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L67)*



Get the length of the trytes.




**Returns:** `number`
The length of the trytes.






___

<a id="sub"></a>

###  sub

► **sub**(start: *`number`*, length: *`number`*): [Trytes](trytes.md)



*Defined in [data/trytes.ts:77](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L77)*



Get a sub of the trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The start position to get the sub. |
| length | `number`   |  The length of the sub. |





**Returns:** [Trytes](trytes.md)
The trytes sub.






___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/trytes.ts:59](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L59)*



Convert the trytes to a string.




**Returns:** `string`
String representation of the trytes.






___

<a id="fromstring"></a>

### «Static» fromString

► **fromString**(value: *`string`*, length?: *`number`*): [Trytes](trytes.md)



*Defined in [data/trytes.ts:28](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L28)*



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



*Defined in [data/trytes.ts:47](https://github.com/iotaeco/iota-pico-data/blob/e9b7969/src/data/trytes.ts#L47)*



Does the value contain valid trytes.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `string`  | - |   A string to validate as trytes. |
| length | `number`  | 0 |   An optional validation length for the trytes, 0 means ignore length. |





**Returns:** `boolean`
True if the input was valid trytes.






___


