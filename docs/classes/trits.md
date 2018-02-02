[@iota-pico/data](../README.md) > [Trits](../classes/trits.md)



# Class: Trits


A class for handling trits.

## Index

### Methods

* [length](trits.md#length)
* [toNumber](trits.md#tonumber)
* [toTrytes](trits.md#totrytes)
* [toValue](trits.md#tovalue)
* [empty](trits.md#empty)
* [fromNumber](trits.md#fromnumber)
* [fromTrytes](trits.md#fromtrytes)
* [fromValue](trits.md#fromvalue)



---
## Methods
<a id="length"></a>

###  length

► **length**(): `number`



*Defined in [data/trits.ts:166](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L166)*



What is the length of the trits.




**Returns:** `number`
Length of the trits.






___

<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/trits.ts:152](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L152)*



Get the trits as a number.




**Returns:** `number`
The trits converted to a number.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/trits.ts:130](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L130)*



Get the trits as trytes.




**Returns:** [Trytes](trytes.md)
Instance of Trytes.






___

<a id="tovalue"></a>

###  toValue

► **toValue**(): `number`[]



*Defined in [data/trits.ts:122](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L122)*



Get the value of the trits array.




**Returns:** `number`[]
Array representation of the trits.






___

<a id="empty"></a>

### «Static» empty

► **empty**(): [Trits](trits.md)



*Defined in [data/trits.ts:50](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L50)*



Create empty trits.




**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:91](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L91)*



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



*Defined in [data/trits.ts:71](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L71)*



Create instance of trits from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [Trytes](trytes.md)   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromvalue"></a>

### «Static» fromValue

► **fromValue**(value: *`number`[]*): [Trits](trits.md)



*Defined in [data/trits.ts:59](https://github.com/iotaeco/iota-pico-data/blob/fb98133/src/data/trits.ts#L59)*



Create instance of trits from number array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`[]   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___


