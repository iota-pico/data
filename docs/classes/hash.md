[@iota-pico/data](../README.md) > [Hash](../classes/hash.md)

# Class: Hash

A class for handling hashes.

## Hierarchy

**Hash**

## Index

### Properties

* [EMPTY](hash.md#empty)
* [LENGTH](hash.md#length)

### Methods

* [toString](hash.md#tostring)
* [toTrytes](hash.md#totrytes)
* [fromTrytes](hash.md#fromtrytes)

---

## Properties

<a id="empty"></a>

### `<Static>` EMPTY

**● EMPTY**: *[Hash](hash.md)* =  Hash.fromTrytes(Trytes.fromString("9".repeat(Hash.LENGTH)))

*Defined in [data/hash.ts:16](https://github.com/iota-pico/data/blob/a9ecaa2/src/data/hash.ts#L16)*

An empty hash all 9s.

___
<a id="length"></a>

### `<Static>` LENGTH

**● LENGTH**: *`number`* = 81

*Defined in [data/hash.ts:12](https://github.com/iota-pico/data/blob/a9ecaa2/src/data/hash.ts#L12)*

The length for a valid hash (81).

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [data/hash.ts:56](https://github.com/iota-pico/data/blob/a9ecaa2/src/data/hash.ts#L56)*

Get the string view of the object.

**Returns:** `string`
string of the trytes.

___
<a id="totrytes"></a>

###  toTrytes

▸ **toTrytes**(): [Trytes](trytes.md)

*Defined in [data/hash.ts:48](https://github.com/iota-pico/data/blob/a9ecaa2/src/data/hash.ts#L48)*

Convert the hash to trytes.

**Returns:** [Trytes](trytes.md)
Trytes version of the hash.

___
<a id="fromtrytes"></a>

### `<Static>` fromTrytes

▸ **fromTrytes**(hash: *[Trytes](trytes.md)*): [Hash](hash.md)

*Defined in [data/hash.ts:31](https://github.com/iota-pico/data/blob/a9ecaa2/src/data/hash.ts#L31)*

Create hash from trytes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hash | [Trytes](trytes.md) |  The trytes to create the hash from. |

**Returns:** [Hash](hash.md)
An instance of Hash.

___

