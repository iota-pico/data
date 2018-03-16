[@iota-pico/data](../README.md) > [Trits](../classes/trits.md)



# Class: Trits


A class for handling trits.

## Index

### Methods

* [length](trits.md#length)
* [sub](trits.md#sub)
* [toArray](trits.md#toarray)
* [toNumber](trits.md#tonumber)
* [toNumberArray](trits.md#tonumberarray)
* [toTrytes](trits.md#totrytes)
* [add](trits.md#add)
* [fromArray](trits.md#fromarray)
* [fromNumber](trits.md#fromnumber)
* [fromNumberArray](trits.md#fromnumberarray)
* [fromTrytes](trits.md#fromtrytes)



---
## Methods
<a id="length"></a>

###  length

► **length**(): `number`



*Defined in [data/trits.ts:256](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L256)*



What is the length of the trits.




**Returns:** `number`
Length of the trits.






___

<a id="sub"></a>

###  sub

► **sub**(start: *`number`*, length: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:266](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L266)*



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

► **toArray**(): `Int8Array`



*Defined in [data/trits.ts:204](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L204)*



Get the value of the trits array.




**Returns:** `Int8Array`
Array representation of the trits.






___

<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/trits.ts:242](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L242)*



Get the trits as a number.




**Returns:** `number`
The trits converted to a number.






___

<a id="tonumberarray"></a>

###  toNumberArray

► **toNumberArray**(): `number`[]



*Defined in [data/trits.ts:212](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L212)*



Get the value of the trits array as a number array.




**Returns:** `number`[]
Array representation of the trits.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/trits.ts:220](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L220)*



Get the trits as trytes.




**Returns:** [Trytes](trytes.md)
Instance of Trytes.






___

<a id="add"></a>

### «Static» add

► **add**(first: *[Trits](trits.md)*, second: *[Trits](trits.md)*): [Trits](trits.md)



*Defined in [data/trits.ts:132](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L132)*



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

► **fromArray**(value: *`Int8Array`*): [Trits](trits.md)



*Defined in [data/trits.ts:55](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L55)*



Create instance of trits from Int8Array array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `Int8Array`   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*): [Trits](trits.md)



*Defined in [data/trits.ts:99](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L99)*



Create instance of trits from number


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`   |  Number used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromnumberarray"></a>

### «Static» fromNumberArray

► **fromNumberArray**(value: *`number`[]*): [Trits](trits.md)



*Defined in [data/trits.ts:67](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L67)*



Create instance of trits from number array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `number`[]   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(value: *[Trytes](trytes.md)*): [Trits](trits.md)



*Defined in [data/trits.ts:79](https://github.com/iotaeco/iota-pico-data/blob/f0f6425/src/data/trits.ts#L79)*



Create instance of trits from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | [Trytes](trytes.md)   |  Trytes used to create trits. |





**Returns:** [Trits](trits.md)
An instance of Trits.






___


