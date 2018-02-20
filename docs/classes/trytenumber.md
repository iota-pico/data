[@iota-pico/data](../README.md) > [TryteNumber](../classes/trytenumber.md)



# Class: TryteNumber


A class for handling tryte number.

## Index

### Properties

* [EMPTY_9](trytenumber.md#empty_9)
* [LENGTH_9](trytenumber.md#length_9)


### Methods

* [toNumber](trytenumber.md#tonumber)
* [toTrytes](trytenumber.md#totrytes)
* [fromNumber](trytenumber.md#fromnumber)
* [fromTrytes](trytenumber.md#fromtrytes)



---
## Properties
<a id="empty_9"></a>

### «Static» EMPTY_9

**●  EMPTY_9**:  *[TryteNumber](trytenumber.md)*  =  TryteNumber.fromNumber(0, TryteNumber.LENGTH_9)

*Defined in [data/tryteNumber.ts:13](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L13)*





___

<a id="length_9"></a>

### «Static» LENGTH_9

**●  LENGTH_9**:  *`number`*  = 9

*Defined in [data/tryteNumber.ts:11](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L11)*





___


## Methods
<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/tryteNumber.ts:86](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L86)*



Convert the tryte number to number.




**Returns:** `number`
number value of the tryte number.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/tryteNumber.ts:78](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L78)*



Convert the tryte number to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the tryte number.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*, length?: *`number`*): [TryteNumber](trytenumber.md)



*Defined in [data/tryteNumber.ts:29](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L29)*



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



*Defined in [data/tryteNumber.ts:57](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tryteNumber.ts#L57)*



Create tryte number from trytes.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | [Trytes](trytes.md)  | - |   The number value to create the object from. |
| length | `number`  |  TryteNumber.LENGTH_9 |   The tryte length to pad the number with. |





**Returns:** [TryteNumber](trytenumber.md)
An instance of TryteNumber.






___

