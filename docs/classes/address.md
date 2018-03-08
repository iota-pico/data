[@iota-pico/data](../README.md) > [Address](../classes/address.md)



# Class: Address


A class for handling addresses.

## Index

### Properties

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
<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in [data/address.ts:10](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L10)*





___

<a id="length_checksum"></a>

### «Static» LENGTH_CHECKSUM

**●  LENGTH_CHECKSUM**:  *`number`*  = 9

*Defined in [data/address.ts:12](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L12)*





___

<a id="length_with_checksum"></a>

### «Static» LENGTH_WITH_CHECKSUM

**●  LENGTH_WITH_CHECKSUM**:  *`number`*  =  Address.LENGTH + Address.LENGTH_CHECKSUM

*Defined in [data/address.ts:14](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L14)*





___


## Methods
<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/address.ts:75](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L75)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/address.ts:55](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L55)*



Convert the address to trytes with no checksum.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with no checksum.






___

<a id="totryteswithchecksum"></a>

###  toTrytesWithChecksum

► **toTrytesWithChecksum**(): [Trytes](trytes.md)



*Defined in [data/address.ts:63](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L63)*



Convert the address to trytes with a checksum, creating a blank one if needed.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with checksu,.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(address: *[Trytes](trytes.md)*): [Address](address.md)



*Defined in [data/address.ts:32](https://github.com/iotaeco/iota-pico-data/blob/94a854f/src/data/address.ts#L32)*



Create address from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Trytes](trytes.md)   |  The trytes to create the address from. |





**Returns:** [Address](address.md)
An instance of Address.






___


