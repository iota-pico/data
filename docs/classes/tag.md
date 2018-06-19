[@iota-pico/data](../README.md) > [Tag](../classes/tag.md)

# Class: Tag

A class for handling tags.

## Hierarchy

**Tag**

## Index

### Properties

* [EMPTY](tag.md#empty)
* [LENGTH](tag.md#length)

### Methods

* [toString](tag.md#tostring)
* [toTrytes](tag.md#totrytes)
* [fromTrytes](tag.md#fromtrytes)

---

## Properties

<a id="empty"></a>

### `<Static>` EMPTY

**● EMPTY**: *[Tag](tag.md)* =  Tag.fromTrytes(Trytes.fromString("9".repeat(Tag.LENGTH)))

*Defined in [data/tag.ts:16](https://github.com/iota-pico/data/blob/501a2d7/src/data/tag.ts#L16)*

An empty tag all 9s.

___
<a id="length"></a>

### `<Static>` LENGTH

**● LENGTH**: *`number`* = 27

*Defined in [data/tag.ts:12](https://github.com/iota-pico/data/blob/501a2d7/src/data/tag.ts#L12)*

The length of a valid tag (27).

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [data/tag.ts:61](https://github.com/iota-pico/data/blob/501a2d7/src/data/tag.ts#L61)*

Get the string view of the object.

**Returns:** `string`
string of the trytes.

___
<a id="totrytes"></a>

###  toTrytes

▸ **toTrytes**(): [Trytes](trytes.md)

*Defined in [data/tag.ts:53](https://github.com/iota-pico/data/blob/501a2d7/src/data/tag.ts#L53)*

Convert the tag to trytes.

**Returns:** [Trytes](trytes.md)
Trytes version of the tag.

___
<a id="fromtrytes"></a>

### `<Static>` fromTrytes

▸ **fromTrytes**(tag: *[Trytes](trytes.md)*): [Tag](tag.md)

*Defined in [data/tag.ts:31](https://github.com/iota-pico/data/blob/501a2d7/src/data/tag.ts#L31)*

Create tag from trytes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| tag | [Trytes](trytes.md) |  The trytes to create the tag from. |

**Returns:** [Tag](tag.md)
An instance of Tag.

___

