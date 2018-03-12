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

*Defined in [data/tryteNumber.ts:18](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L18)*



An emnpty 9 length tryte number.




___

<a id="length_9"></a>

### «Static» LENGTH_9

**●  LENGTH_9**:  *`number`*  = 9

*Defined in [data/tryteNumber.ts:14](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L14)*



Length of a number that uses 9 trytes.




___


## Methods
<a id="tonumber"></a>

###  toNumber

► **toNumber**(): `number`



*Defined in [data/tryteNumber.ts:99](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L99)*



Convert the tryte number to number.




**Returns:** `number`
number value of the tryte number.






___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/tryteNumber.ts:107](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L107)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/tryteNumber.ts:91](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L91)*



Convert the tryte number to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the tryte number.






___

<a id="valueof"></a>

###  valueOf

► **valueOf**(): `number`



*Defined in [data/tryteNumber.ts:115](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L115)*



Get the value of the object.




**Returns:** `number`
string of the trytes.






___

<a id="fromnumber"></a>

### «Static» fromNumber

► **fromNumber**(value: *`number`*, length?: *`number`*): [TryteNumber](trytenumber.md)



*Defined in [data/tryteNumber.ts:34](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L34)*



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



*Defined in [data/tryteNumber.ts:66](https://github.com/iotaeco/iota-pico-data/blob/e821738/src/data/tryteNumber.ts#L66)*



Create tryte number from trytes.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | [Trytes](trytes.md)  | - |   The number value to create the object from. |
| length | `number`  |  TryteNumber.LENGTH_9 |   The tryte length to pad the number with. |





**Returns:** [TryteNumber](trytenumber.md)
An instance of TryteNumber.






___


