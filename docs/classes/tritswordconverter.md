[@iota-pico/data](../README.md) > [TritsWordConverter](../classes/tritswordconverter.md)



# Class: TritsWordConverter


Helper class to convert between trits and words. Converted from here [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/converter/words.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/converter/words.js)

## Index

### Methods

* [tritsToWords](tritswordconverter.md#tritstowords)
* [wordsToTrits](tritswordconverter.md#wordstotrits)



---
## Methods
<a id="tritstowords"></a>

### «Static» tritsToWords

► **tritsToWords**(trits: *`number`[]*): `Uint32Array`



*Defined in [converters/tritsWordConverter.ts:36](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/converters/tritsWordConverter.ts#L36)*



Convert trits to words.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  The trits to convert. |





**Returns:** `Uint32Array`
Words array.






___

<a id="wordstotrits"></a>

### «Static» wordsToTrits

► **wordsToTrits**(words: *`Uint32Array`*): `number`[]



*Defined in [converters/tritsWordConverter.ts:115](https://github.com/iotaeco/iota-pico-data/blob/fd25b7f/src/converters/tritsWordConverter.ts#L115)*



Converts the given word array to trits.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| words | `Uint32Array`   |  The words to convert to trits |





**Returns:** `number`[]
Trits array.






___


