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

*Defined in [data/transfer.ts:15](https://github.com/iotaeco/iota-pico-data/blob/0635260/src/data/transfer.ts#L15)*



The address to send the transfer to.




___

<a id="message"></a>

###  message

**●  message**:  *[Trytes](trytes.md)* 

*Defined in [data/transfer.ts:23](https://github.com/iotaeco/iota-pico-data/blob/0635260/src/data/transfer.ts#L23)*



Message to include with the transfer.




___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in [data/transfer.ts:27](https://github.com/iotaeco/iota-pico-data/blob/0635260/src/data/transfer.ts#L27)*



Tag for the transfer.




___

<a id="value"></a>

###  value

**●  value**:  *`number`* 

*Defined in [data/transfer.ts:19](https://github.com/iotaeco/iota-pico-data/blob/0635260/src/data/transfer.ts#L19)*



The value to send.




___


## Methods
<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(address: *[Address](address.md)*, value: *`number`*, message: *[Trytes](trytes.md)*, tag: *[Tag](tag.md)*): [Transfer](transfer.md)



*Defined in [data/transfer.ts:41](https://github.com/iotaeco/iota-pico-data/blob/0635260/src/data/transfer.ts#L41)*



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


