[@iota-pico/data](../README.md) > [Hash](../classes/hash.md)



# Class: Hash


A class for handling hashes.

## Index

### Properties

* [EMPTY](hash.md#empty)
* [LENGTH](hash.md#length)


### Methods

* [toTrytes](hash.md#totrytes)
* [create](hash.md#create)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[Hash](hash.md)*  =  Hash.create(Trytes.create("9".repeat(Hash.LENGTH)))

*Defined in [data/hash.ts:11](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/data/hash.ts#L11)*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 81

*Defined in [data/hash.ts:9](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/data/hash.ts#L9)*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/hash.ts:43](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/data/hash.ts#L43)*



Convert the hash to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the hash.






___

<a id="create"></a>

### «Static» create

► **create**(hash: *[Trytes](trytes.md)*): [Hash](hash.md)



*Defined in [data/hash.ts:26](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/data/hash.ts#L26)*



Create hash from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | [Trytes](trytes.md)   |  The trytes to create the hash from. |





**Returns:** [Hash](hash.md)
An instance of Hash.






___


