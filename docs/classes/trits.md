[@iota-pico/data](../README.md) > [Trits](../classes/trits.md)



# Class: Trits


A class for handling trits.

## Index

### Methods

* [fromArray](trits.md#fromarray)
* [length](trits.md#length)
* [sub](trits.md#sub)
* [toArray](trits.md#toarray)
* [toNumber](trits.md#tonumber)
* [toTrytes](trits.md#totrytes)
* [empty](trits.md#empty)
* [fromArray](trits.md#fromarray-1)
* [fromNumber](trits.md#fromnumber)
* [fromTrytes](trits.md#fromtrytes)



---
## Methods
<a id="fromarray"></a>

###  fromArray

► **fromArray**(value: *`number`[]*): `void`



*Defined in [data/trits.ts:134](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L134)*



Create instance of trits from number array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`[]   |  Trytes used to create trits. |





**Returns:** `void`
An instance of Trits.






___

<a id="length"></a>

###  length

► **length**(): `number`



*Defined in [data/trits.ts:181](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L181)*



What is the length of the trits.




**Returns:** `number`
Length of the trits.






___

<a id="sub"></a>

###  sub

► **sub**(start: *`number`*, length: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:191](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L191)*



Get a sub of the trits.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The start position to get the sub. |
| length | `number`   |  The length of the sub. |





**Returns:** [Trits](trits.md)
The trits sub.






___

<a id="toarray"></a>

###  toArray

► **toArray**(): `number`[]



*Defined in [data/trits.ts:125](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L125)*



Get the value of the trits array.




**Returns:** `number`[]
Array representation of the trits.






___

<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/trits.ts:167](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L167)*



Get the trits as a number.




**Returns:** `number`
The trits converted to a number.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/trits.ts:145](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L145)*



Get the trits as trytes.




**Returns:** [Trytes](trytes.md)
Instance of Trytes.






___

<a id="empty"></a>

### «Static» empty

► **empty**(): [Trits](trits.md)



*Defined in [data/trits.ts:53](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L53)*



Create empty trits.




**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromarray-1"></a>

### «Static» fromArray

► **fromArray**(value: *`number`[]*): [Trits](trits.md)



*Defined in [data/trits.ts:62](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L62)*



Create instance of trits from number array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`[]   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:94](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L94)*



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



*Defined in [data/trits.ts:74](https://github.com/iotaeco/iota-pico-data/blob/706d60c/src/data/trits.ts#L74)*



Create instance of trits from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [Trytes](trytes.md)   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___


