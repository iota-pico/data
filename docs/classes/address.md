[@iota-pico/data](../README.md) > [Address](../classes/address.md)



# Class: Address


A class for handling addresses.

## Index

### Properties

* [LENGTH](address.md#length)
* [LENGTH_WITH_CHECKSUM](address.md#length_with_checksum)


### Methods

* [hasChecksum](address.md#haschecksum)
* [toTrytes](address.md#totrytes)
* [create](address.md#create)



---
## Properties
<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in data/address.ts:9*





___

<a id="length_with_checksum"></a>

### «Static» LENGTH_WITH_CHECKSUM

**●  LENGTH_WITH_CHECKSUM**:  *`number`*  = 90

*Defined in data/address.ts:11*





___


## Methods
<a id="haschecksum"></a>

###  hasChecksum

► **hasChecksum**(): `boolean`



*Defined in data/address.ts:49*



Does the address have a checksum.




**Returns:** `boolean`
True if the address has a checksum.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in data/address.ts:41*



Convert the address to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the address.






___

<a id="create"></a>

### «Static» create

► **create**(address: *[Trytes](trytes.md)*): [Address](address.md)



*Defined in data/address.ts:29*



Create address from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Trytes](trytes.md)   |  The trytes to create the address from. |





**Returns:** [Address](address.md)
An instance of Address.






___


