[@iota-pico/data](../README.md) > [Trits](../classes/trits.md)



# Class: Trits


A class for handling trits.

## Index

### Methods

* [length](trits.md#length)
* [sub](trits.md#sub)
* [toArray](trits.md#toarray)
* [toNumber](trits.md#tonumber)
* [toTrytes](trits.md#totrytes)
* [add](trits.md#add)
* [fromArray](trits.md#fromarray)
* [fromNumber](trits.md#fromnumber)
* [fromTrytes](trits.md#fromtrytes)



---
## Methods
<a id="length"></a>

###  length

► **length**(): `number`



*Defined in [data/trits.ts:236](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L236)*



What is the length of the trits.




**Returns:** `number`
Length of the trits.






___

<a id="sub"></a>

###  sub

► **sub**(start: *`number`*, length: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:246](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L246)*



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



*Defined in [data/trits.ts:192](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L192)*



Get the value of the trits array.




**Returns:** `number`[]
Array representation of the trits.






___

<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/trits.ts:222](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L222)*



Get the trits as a number.




**Returns:** `number`
The trits converted to a number.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/trits.ts:200](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L200)*



Get the trits as trytes.




**Returns:** [Trytes](trytes.md)
Instance of Trytes.






___

<a id="add"></a>

### «Static» add

► **add**(first: *[Trits](trits.md)*, second: *[Trits](trits.md)*): [Trits](trits.md)



*Defined in [data/trits.ts:120](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L120)*



Add two trits together.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| first | [Trits](trits.md)   |  The first trit. |
| second | [Trits](trits.md)   |  The second trit. |





**Returns:** [Trits](trits.md)
New trit which is the addition of the a + b.






___

<a id="fromarray"></a>

### «Static» fromArray

► **fromArray**(value: *`number`[]*): [Trits](trits.md)



*Defined in [data/trits.ts:55](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L55)*



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



*Defined in [data/trits.ts:87](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L87)*



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



*Defined in [data/trits.ts:67](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/data/trits.ts#L67)*



Create instance of trits from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [Trytes](trytes.md)   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___


