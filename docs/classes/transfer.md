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

*Defined in data/transfer.ts:9*





___

<a id="message"></a>

###  message

**●  message**:  *[Trytes](trytes.md)* 

*Defined in data/transfer.ts:11*





___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in data/transfer.ts:12*





___

<a id="value"></a>

###  value

**●  value**:  *`number`* 

*Defined in data/transfer.ts:10*





___


## Methods
<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(address: *[Address](address.md)*, value: *`number`*, message: *[Trytes](trytes.md)*, tag: *[Tag](tag.md)*): [Transfer](transfer.md)



*Defined in data/transfer.ts:26*



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


