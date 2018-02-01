[@iota-pico/data](../README.md) > [Trits](../classes/trits.md)



# Class: Trits


A class for handling trits.

## Index

### Methods

* [toNumber](trits.md#tonumber)
* [toTrytes](trits.md#totrytes)
* [toValue](trits.md#tovalue)
* [fromNumber](trits.md#fromnumber)
* [fromTrytes](trits.md#fromtrytes)



---
## Methods
<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/trits.ts:131](https://github.com/iotaeco/iota-pico-data/blob/142ff7f/src/data/trits.ts#L131)*



Get the trits as a number.




**Returns:** `number`
The trits converted to a number.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/trits.ts:109](https://github.com/iotaeco/iota-pico-data/blob/142ff7f/src/data/trits.ts#L109)*



Get the trits as trytes.




**Returns:** [Trytes](trytes.md)
Instance of Trytes.






___

<a id="tovalue"></a>

###  toValue

► **toValue**(): `number`[]



*Defined in [data/trits.ts:101](https://github.com/iotaeco/iota-pico-data/blob/142ff7f/src/data/trits.ts#L101)*



Get the value of the trits array.




**Returns:** `number`[]
Array representation of the trits.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:70](https://github.com/iotaeco/iota-pico-data/blob/142ff7f/src/data/trits.ts#L70)*



Create instance of trits from number


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`   |  Number used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(value: *[Trytes](trytes.md)*): [Trits](trits.md)



*Defined in [data/trits.ts:50](https://github.com/iotaeco/iota-pico-data/blob/142ff7f/src/data/trits.ts#L50)*



Create instance of trits from trytes


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [Trytes](trytes.md)   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___


