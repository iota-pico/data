[@iota-pico/data](../README.md) > [Tag](../classes/tag.md)



# Class: Tag


A class for handling tags.

## Index

### Properties

* [EMPTY](tag.md#empty)
* [LENGTH](tag.md#length)


### Methods

* [toTrytes](tag.md#totrytes)
* [create](tag.md#create)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[Tag](tag.md)*  =  Tag.create(Trytes.create("9".repeat(Tag.LENGTH)))

*Defined in [data/tag.ts:11](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tag.ts#L11)*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 27

*Defined in [data/tag.ts:9](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tag.ts#L9)*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/tag.ts:48](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tag.ts#L48)*



Convert the tag to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the tag.






___

<a id="create"></a>

### «Static» create

► **create**(tag: *[Trytes](trytes.md)*): [Tag](tag.md)



*Defined in [data/tag.ts:26](https://github.com/iotaeco/iota-pico-data/blob/9a9a210/src/data/tag.ts#L26)*



Create tag from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| tag | [Trytes](trytes.md)   |  The trytes to create the tag from. |





**Returns:** [Tag](tag.md)
An instance of Tag.






___


