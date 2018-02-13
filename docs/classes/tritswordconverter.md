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

► **tritsToWords**(trits: *[Trits](trits.md)*): `Uint32Array`



*Defined in [converters/tritsWordConverter.ts:37](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/converters/tritsWordConverter.ts#L37)*



Convert trits to words.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | [Trits](trits.md)   |  The trits to convert. |





**Returns:** `Uint32Array`
Words array.






___

<a id="wordstotrits"></a>

### «Static» wordsToTrits

► **wordsToTrits**(words: *`Uint32Array`*): [Trits](trits.md)



*Defined in [converters/tritsWordConverter.ts:118](https://github.com/iotaeco/iota-pico-data/blob/bbc3047/src/converters/tritsWordConverter.ts#L118)*



Converts the given word array to trits.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| words | `Uint32Array`   |  The words to convert to trits |





**Returns:** [Trits](trits.md)
Trits array.






___


