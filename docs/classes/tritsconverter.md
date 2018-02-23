[@iota-pico/data](../README.md) > [TritsConverter](../classes/tritsconverter.md)



# Class: TritsConverter


Helper class to convert between trits and other number types. Converter from [https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java](https://github.com/iotaledger/iri/blob/dev/src/main/java/com/iota/iri/hash/Kerl.java)

## Index

### Methods

* [bigIntegerToBytes](tritsconverter.md#bigintegertobytes)
* [bigIntegerToTrits](tritsconverter.md#bigintegertotrits)
* [bytesToBigInteger](tritsconverter.md#bytestobiginteger)
* [tritsToBigInteger](tritsconverter.md#tritstobiginteger)



---
## Methods
<a id="bigintegertobytes"></a>

### «Static» bigIntegerToBytes

► **bigIntegerToBytes**(value: *`bigInteger.BigInteger`*, destination: *`Int8Array`*, offset: *`number`*): `void`



*Defined in [converters/tritsConverter.ts:168](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/converters/tritsConverter.ts#L168)*



Convert the bigInteger into bytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `bigInteger.BigInteger`   |  The value to convert. |
| destination | `Int8Array`   |  The destination array to store the bytes. |
| offset | `number`   |  The offset within the array to store the bytes. |





**Returns:** `void`





___

<a id="bigintegertotrits"></a>

### «Static» bigIntegerToTrits

► **bigIntegerToTrits**(value: *`bigInteger.BigInteger`*, trits: *`number`[]*, offset: *`number`*, length: *`number`*): `void`



*Defined in [converters/tritsConverter.ts:63](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/converters/tritsConverter.ts#L63)*



Convert bigInteger to trits.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `bigInteger.BigInteger`   |  The bigInteger to convert to trits. |
| trits | `number`[]   |  The array to receive the trits. |
| offset | `number`   |  The offset to place the trits in the array. |
| length | `number`   |  The length of the array. |





**Returns:** `void`





___

<a id="bytestobiginteger"></a>

### «Static» bytesToBigInteger

► **bytesToBigInteger**(source: *`Int8Array`*, offset: *`number`*, length: *`number`*): `bigInteger.BigInteger`



*Defined in [converters/tritsConverter.ts:112](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/converters/tritsConverter.ts#L112)*



Convert bytes to a bigInteger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| source | `Int8Array`   |  The source bytes. |
| offset | `number`   |  The offset within the bytes to start conversion. |
| length | `number`   |  The length of the bytes to use for conversion. |





**Returns:** `bigInteger.BigInteger`





___

<a id="tritstobiginteger"></a>

### «Static» tritsToBigInteger

► **tritsToBigInteger**(trits: *`number`[]*, offset: *`number`*, length: *`number`*): `bigInteger.BigInteger`



*Defined in [converters/tritsConverter.ts:30](https://github.com/iotaeco/iota-pico-data/blob/6301507/src/converters/tritsConverter.ts#L30)*



Convert trits to a bigInteger.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  The trits to convert. |
| offset | `number`   |  Offset within the array to start. |
| length | `number`   |  The length of the trits array to convert. |





**Returns:** `bigInteger.BigInteger`





___


