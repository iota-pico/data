[@iota-pico/data](../README.md) > [Input](../classes/input.md)

# Class: Input

A class for handling inputs.

## Hierarchy

**Input**

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

*Defined in [data/input.ts:14](https://github.com/iota-pico/data/blob/619b016/src/data/input.ts#L14)*

The address used for a transfer input.

___

<a id="balance"></a>

###  balance

**●  balance**:  *`number`* 

*Defined in [data/input.ts:26](https://github.com/iota-pico/data/blob/619b016/src/data/input.ts#L26)*

The balance of the input.

___

<a id="keyindex"></a>

###  keyIndex

**●  keyIndex**:  *`number`* 

*Defined in [data/input.ts:22](https://github.com/iota-pico/data/blob/619b016/src/data/input.ts#L22)*

The index of the address from the seed.

___

<a id="security"></a>

###  security

**●  security**:  *[AddressSecurity](../enums/addresssecurity.md)* 

*Defined in [data/input.ts:18](https://github.com/iota-pico/data/blob/619b016/src/data/input.ts#L18)*

The security level of the address.

___

## Methods

<a id="fromparams"></a>

### `<Static>` fromParams

▸ **fromParams**(address: *[Address](address.md)*, security: *[AddressSecurity](../enums/addresssecurity.md)*, keyIndex: *`number`*, balance: *`number`*): [Input](input.md)

*Defined in [data/input.ts:40](https://github.com/iota-pico/data/blob/619b016/src/data/input.ts#L40)*

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

