[@iota-pico/data](../README.md) > [Address](../classes/address.md)



# Class: Address


A class for handling addresses.

## Index

### Properties

* [LENGTH](address.md#length)
* [LENGTH_CHECKSUM](address.md#length_checksum)
* [LENGTH_WITH_CHECKSUM](address.md#length_with_checksum)


### Methods

* [toTrytes](address.md#totrytes)
* [toTrytesWithChecksum](address.md#totryteswithchecksum)
* [create](address.md#create)



---
## Properties
<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in [data/address.ts:9](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L9)*





___

<a id="length_checksum"></a>

### «Static» LENGTH_CHECKSUM

**●  LENGTH_CHECKSUM**:  *`number`*  = 9

*Defined in [data/address.ts:11](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L11)*





___

<a id="length_with_checksum"></a>

### «Static» LENGTH_WITH_CHECKSUM

**●  LENGTH_WITH_CHECKSUM**:  *`number`*  =  Address.LENGTH + Address.LENGTH_CHECKSUM

*Defined in [data/address.ts:13](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L13)*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/address.ts:54](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L54)*



Convert the address to trytes with no checksum.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with no checksum.






___

<a id="totryteswithchecksum"></a>

###  toTrytesWithChecksum

► **toTrytesWithChecksum**(): [Trytes](trytes.md)



*Defined in [data/address.ts:62](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L62)*



Convert the address to trytes with a checksum, creating a blank one if needed.




**Returns:** [Trytes](trytes.md)
Trytes version of the address with checksu,.






___

<a id="create"></a>

### «Static» create

► **create**(address: *[Trytes](trytes.md)*): [Address](address.md)



*Defined in [data/address.ts:31](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/address.ts#L31)*



Create address from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Trytes](trytes.md)   |  The trytes to create the address from. |





**Returns:** [Address](address.md)
An instance of Address.






___

