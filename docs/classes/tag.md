[@iota-pico/data](../README.md) > [Tag](../classes/tag.md)



# Class: Tag


A class for handling tags.

## Index

### Properties

* [LENGTH](tag.md#length)


### Methods

* [toTrytes](tag.md#totrytes)
* [create](tag.md#create)



---
## Properties
<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 27

*Defined in data/tag.ts:9*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in data/tag.ts:36*



Convert the tag to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the tag.






___

<a id="create"></a>

### «Static» create

► **create**(tag: *[Trytes](trytes.md)*): [Tag](tag.md)



*Defined in data/tag.ts:24*



Create tag from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| tag | [Trytes](trytes.md)   |  The trytes to create the tag from. |





**Returns:** [Tag](tag.md)
An instance of Address.






___


