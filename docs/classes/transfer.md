[@iota-pico/data](../README.md) > [Transfer](../classes/transfer.md)



# Class: Transfer


A class for handling transfers.

## Index

### Properties

* [address](transfer.md#address)
* [message](transfer.md#message)
* [tag](transfer.md#tag)
* [value](transfer.md#value)


### Methods

* [fromParams](transfer.md#fromparams)



---
## Properties
<a id="address"></a>

###  address

**●  address**:  *[Address](address.md)* 

*Defined in [data/transfer.ts:12](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/transfer.ts#L12)*





___

<a id="message"></a>

###  message

**●  message**:  *[Trytes](trytes.md)* 

*Defined in [data/transfer.ts:14](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/transfer.ts#L14)*





___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in [data/transfer.ts:15](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/transfer.ts#L15)*





___

<a id="value"></a>

###  value

**●  value**:  *`number`* 

*Defined in [data/transfer.ts:13](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/transfer.ts#L13)*





___


## Methods
<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(address: *[Address](address.md)*, value: *`number`*, message: *[Trytes](trytes.md)*, tag: *[Tag](tag.md)*): [Transfer](transfer.md)



*Defined in [data/transfer.ts:29](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/transfer.ts#L29)*



Create instance of transfer from parameters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Address](address.md)   |  The address. |
| value | `number`   |  The value. |
| message | [Trytes](trytes.md)   |  - |
| tag | [Tag](tag.md)   |  The tag. |





**Returns:** [Transfer](transfer.md)
New instance of Transfer.






___


