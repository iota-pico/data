[@iota-pico/data](../README.md) > [Address](../classes/address.md)



# Class: Address


A class for handling addresses.

## Index

### Properties

* [EMPTY](address.md#empty)
* [LENGTH](address.md#length)
* [LENGTH_CHECKSUM](address.md#length_checksum)
* [LENGTH_WITH_CHECKSUM](address.md#length_with_checksum)


### Methods

* [toString](address.md#tostring)
* [toTrytes](address.md#totrytes)
* [toTrytesWithChecksum](address.md#totryteswithchecksum)
* [fromTrytes](address.md#fromtrytes)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[Address](address.md)*  =  Address.fromTrytes(Trytes.fromString("9".repeat(Address.LENGTH)))

*Defined in [data/address.ts:25](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L25)*



An empty hash all 9s.




___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in [data/address.ts:12](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L12)*



The length for a valid address without checksum (81).




___

<a id="length_checksum"></a>

### «Static» LENGTH_CHECKSUM

**●  LENGTH_CHECKSUM**:  *`number`*  = 9

*Defined in [data/address.ts:16](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L16)*



The length for an address checksum (9).




___

<a id="length_with_checksum"></a>

### «Static» LENGTH_WITH_CHECKSUM

**●  LENGTH_WITH_CHECKSUM**:  *`number`*  =  Address.LENGTH + Address.LENGTH_CHECKSUM

*Defined in [data/address.ts:20](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L20)*



The length for valid address with checksum (90).




___


## Methods
<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/address.ts:86](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L86)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/address.ts:66](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L66)*



Convert the address to trytes with no checksum.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with no checksum.






___

<a id="totryteswithchecksum"></a>

###  toTrytesWithChecksum

► **toTrytesWithChecksum**(): [Trytes](trytes.md)



*Defined in [data/address.ts:74](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L74)*



Convert the address to trytes with a checksum, creating a blank one if needed.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with checksu,.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(address: *[Trytes](trytes.md)*): [Address](address.md)



*Defined in [data/address.ts:43](https://github.com/iotaeco/iota-pico-data/blob/830c7c0/src/data/address.ts#L43)*



Create address from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Trytes](trytes.md)   |  The trytes to create the address from. |





**Returns:** [Address](address.md)
An instance of Address.






___


