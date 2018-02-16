[@iota-pico/data](../README.md) > [Input](../classes/input.md)



# Class: Input


A class for handling inputs.

## Index

### Properties

* [address](input.md#address)
* [balance](input.md#balance)
* [keyIndex](input.md#keyindex)
* [security](input.md#security)


### Methods

* [fromParams](input.md#fromparams)



---
## Properties
<a id="address"></a>

###  address

**●  address**:  *[Address](address.md)* 

*Defined in data/input.ts:8*





___

<a id="balance"></a>

###  balance

**●  balance**:  *`number`* 

*Defined in data/input.ts:11*





___

<a id="keyindex"></a>

###  keyIndex

**●  keyIndex**:  *`number`* 

*Defined in data/input.ts:10*





___

<a id="security"></a>

###  security

**●  security**:  *[AddressSecurity](../enums/addresssecurity.md)* 

*Defined in data/input.ts:9*





___


## Methods
<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(address: *[Address](address.md)*, security: *[AddressSecurity](../enums/addresssecurity.md)*, keyIndex: *`number`*, balance: *`number`*): [Input](input.md)



*Defined in data/input.ts:25*



Create instance of input from parameters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Address](address.md)   |  The address. |
| security | [AddressSecurity](../enums/addresssecurity.md)   |  The address security. |
| keyIndex | `number`   |  The key index. |
| balance | `number`   |  The balance of the address. |





**Returns:** [Input](input.md)
New instance of Input.






___


