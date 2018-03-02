[@iota-pico/data](../README.md) > [TryteNumber](../classes/trytenumber.md)



# Class: TryteNumber


A class for handling tryte number.

## Index

### Properties

* [EMPTY_9](trytenumber.md#empty_9)
* [LENGTH_9](trytenumber.md#length_9)


### Methods

* [toNumber](trytenumber.md#tonumber)
* [toString](trytenumber.md#tostring)
* [toTrytes](trytenumber.md#totrytes)
* [valueOf](trytenumber.md#valueof)
* [fromNumber](trytenumber.md#fromnumber)
* [fromTrytes](trytenumber.md#fromtrytes)



---
## Properties
<a id="empty_9"></a>

### «Static» EMPTY_9

**●  EMPTY_9**:  *[TryteNumber](trytenumber.md)*  =  TryteNumber.fromNumber(0, TryteNumber.LENGTH_9)

*Defined in [data/tryteNumber.ts:14](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L14)*





___

<a id="length_9"></a>

### «Static» LENGTH_9

**●  LENGTH_9**:  *`number`*  = 9

*Defined in [data/tryteNumber.ts:12](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L12)*





___


## Methods
<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/tryteNumber.ts:95](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L95)*



Convert the tryte number to number.




**Returns:** `number`
number value of the tryte number.






___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/tryteNumber.ts:103](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L103)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/tryteNumber.ts:87](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L87)*



Convert the tryte number to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the tryte number.






___

<a id="valueof"></a>

###  valueOf

► **valueOf**(): `number`



*Defined in [data/tryteNumber.ts:111](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L111)*



Get the value of the object.




**Returns:** `number`
string of the trytes.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*, length?: *`number`*): [TryteNumber](trytenumber.md)



*Defined in [data/tryteNumber.ts:30](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L30)*



Create tryte number from number.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `number`  | - |   The number value to create the object from. |
| length | `number`  |  TryteNumber.LENGTH_9 |   The tryte length to pad the number with. |





**Returns:** [TryteNumber](trytenumber.md)
An instance of TryteNumber.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(value: *[Trytes](trytes.md)*, length?: *`number`*): [TryteNumber](trytenumber.md)



*Defined in [data/tryteNumber.ts:62](https://github.com/iotaeco/iota-pico-data/blob/20bfe09/src/data/tryteNumber.ts#L62)*



Create tryte number from trytes.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | [Trytes](trytes.md)  | - |   The number value to create the object from. |
| length | `number`  |  TryteNumber.LENGTH_9 |   The tryte length to pad the number with. |





**Returns:** [TryteNumber](trytenumber.md)
An instance of TryteNumber.






___


