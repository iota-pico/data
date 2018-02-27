[@iota-pico/data](../README.md) > [Hash](../classes/hash.md)



# Class: Hash


A class for handling hashes.

## Index

### Properties

* [EMPTY](hash.md#empty)
* [LENGTH](hash.md#length)


### Methods

* [toTrytes](hash.md#totrytes)
* [fromTrytes](hash.md#fromtrytes)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[Hash](hash.md)*  =  Hash.fromTrytes(Trytes.fromString("9".repeat(Hash.LENGTH)))

*Defined in [data/hash.ts:12](https://github.com/iotaeco/iota-pico-data/blob/6f61d65/src/data/hash.ts#L12)*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in [data/hash.ts:10](https://github.com/iotaeco/iota-pico-data/blob/6f61d65/src/data/hash.ts#L10)*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/hash.ts:44](https://github.com/iotaeco/iota-pico-data/blob/6f61d65/src/data/hash.ts#L44)*



Convert the hash to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the hash.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(hash: *[Trytes](trytes.md)*): [Hash](hash.md)



*Defined in [data/hash.ts:27](https://github.com/iotaeco/iota-pico-data/blob/6f61d65/src/data/hash.ts#L27)*



Create hash from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | [Trytes](trytes.md)   |  The trytes to create the hash from. |





**Returns:** [Hash](hash.md)
An instance of Hash.






___


