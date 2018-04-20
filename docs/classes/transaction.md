[@iota-pico/data](../README.md) > [Transaction](../classes/transaction.md)

# Class: Transaction

A class for handling transactions.

## Hierarchy

**Transaction**

## Index

### Properties

* [address](transaction.md#address)
* [attachmentTimestamp](transaction.md#attachmenttimestamp)
* [attachmentTimestampLowerBound](transaction.md#attachmenttimestamplowerbound)
* [attachmentTimestampUpperBound](transaction.md#attachmenttimestampupperbound)
* [branchTransaction](transaction.md#branchtransaction)
* [bundle](transaction.md#bundle)
* [currentIndex](transaction.md#currentindex)
* [lastIndex](transaction.md#lastindex)
* [nonce](transaction.md#nonce)
* [obsoleteTag](transaction.md#obsoletetag)
* [signatureMessageFragment](transaction.md#signaturemessagefragment)
* [tag](transaction.md#tag)
* [timestamp](transaction.md#timestamp)
* [trunkTransaction](transaction.md#trunktransaction)
* [value](transaction.md#value)
* [CHECK_VALUE](transaction.md#check_value)
* [CHECK_VALUE_LENGTH](transaction.md#check_value_length)
* [LENGTH](transaction.md#length)

### Methods

* [toString](transaction.md#tostring)
* [toTrytes](transaction.md#totrytes)
* [fromParams](transaction.md#fromparams)
* [fromTrytes](transaction.md#fromtrytes)

---

## Properties

<a id="address"></a>

###  address

**●  address**:  *[Address](address.md)* 

*Defined in [data/transaction.ts:39](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L39)*

The address for the transaction.

___

<a id="attachmenttimestamp"></a>

###  attachmentTimestamp

**●  attachmentTimestamp**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:79](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L79)*

The attachment timestamp for the transaction.

___

<a id="attachmenttimestamplowerbound"></a>

###  attachmentTimestampLowerBound

**●  attachmentTimestampLowerBound**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:83](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L83)*

The attachment timestamp lower bound for the transaction.

___

<a id="attachmenttimestampupperbound"></a>

###  attachmentTimestampUpperBound

**●  attachmentTimestampUpperBound**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:87](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L87)*

The attachment timestamp upper bound for the transaction.

___

<a id="branchtransaction"></a>

###  branchTransaction

**●  branchTransaction**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:71](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L71)*

The branch transaction for the transaction.

___

<a id="bundle"></a>

###  bundle

**●  bundle**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:63](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L63)*

The bundle hash for the transaction.

___

<a id="currentindex"></a>

###  currentIndex

**●  currentIndex**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:55](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L55)*

The current index for the transaction.

___

<a id="lastindex"></a>

###  lastIndex

**●  lastIndex**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:59](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L59)*

The last index for the transaction bundle.

___

<a id="nonce"></a>

###  nonce

**●  nonce**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:91](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L91)*

The nonce for the transaction.

___

<a id="obsoletetag"></a>

###  obsoleteTag

**●  obsoleteTag**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:47](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L47)*

The obsolete tag for the transaction.

___

<a id="signaturemessagefragment"></a>

###  signatureMessageFragment

**●  signatureMessageFragment**:  *[SignatureMessageFragment](signaturemessagefragment.md)* 

*Defined in [data/transaction.ts:35](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L35)*

The signature message fragment for the transaction.

___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in [data/transaction.ts:75](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L75)*

The tag for the transaction.

___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:51](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L51)*

The timestamp for the transaction.

___

<a id="trunktransaction"></a>

###  trunkTransaction

**●  trunkTransaction**:  *[Hash](hash.md)* 

*Defined in [data/transaction.ts:67](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L67)*

The trunk transaction for the transaction.

___

<a id="value"></a>

###  value

**●  value**:  *[TryteNumber](trytenumber.md)* 

*Defined in [data/transaction.ts:43](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L43)*

The value for the transaction.

___

<a id="check_value"></a>

### `<Static>` CHECK_VALUE

**●  CHECK_VALUE**:  *`string`*  =  "9".repeat(Transaction.CHECK_VALUE_LENGTH)

*Defined in [data/transaction.ts:27](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L27)*

The check value for bundles all 9s.

___

<a id="check_value_length"></a>

### `<Static>` CHECK_VALUE_LENGTH

**●  CHECK_VALUE_LENGTH**:  *`number`*  = 16

*Defined in [data/transaction.ts:22](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L22)*

The length of a valid check value (16).

___

<a id="length"></a>

### `<Static>` LENGTH

**●  LENGTH**:  *`number`*  = 2673

*Defined in [data/transaction.ts:17](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L17)*

The length of a valid transaction (2673).

___

## Methods

<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [data/transaction.ts:272](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L272)*

Get the string view of the object.

**Returns:** `string`
string view of the object.

___

<a id="totrytes"></a>

###  toTrytes

▸ **toTrytes**(): [Trytes](trytes.md)

*Defined in [data/transaction.ts:214](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L214)*

Convert the transaction to trytes.

**Returns:** [Trytes](trytes.md)
The transaction as trytes.

___

<a id="fromparams"></a>

### `<Static>` fromParams

▸ **fromParams**(signatureMessageFragment: *[SignatureMessageFragment](signaturemessagefragment.md)*, address: *[Address](address.md)*, value: *`number`*, obsoleteTag: *[Tag](tag.md)*, timestamp: *`number`*, currentIndex: *`number`*, lastIndex: *`number`*, bundle: *[Hash](hash.md)*, trunkTransaction: *[Hash](hash.md)*, branchTransaction: *[Hash](hash.md)*, tag: *[Tag](tag.md)*, attachmentTimestamp: *`number`*, attachmentTimestampLowerBound: *`number`*, attachmentTimestampUpperBound: *`number`*, nonce: *[Tag](tag.md)*): [Transaction](transaction.md)

*Defined in [data/transaction.ts:116](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L116)*

Create instance of transaction from parameters.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureMessageFragment | [SignatureMessageFragment](signaturemessagefragment.md)   |  The signature message fragment. |
| address | [Address](address.md)   |  The address. |
| value | `number`   |  The value. |
| obsoleteTag | [Tag](tag.md)   |  Obsolete transaction tag. |
| timestamp | `number`   |  The timestamp. |
| currentIndex | `number`   |  The current index. |
| lastIndex | `number`   |  The last index. |
| bundle | [Hash](hash.md)   |  The bundle. |
| trunkTransaction | [Hash](hash.md)   |  The trunk transaction. |
| branchTransaction | [Hash](hash.md)   |  The branch transaction. |
| tag | [Tag](tag.md)   |  The tag. |
| attachmentTimestamp | `number`   |  The attachment timestamp. |
| attachmentTimestampLowerBound | `number`   |  The attachment timestamp lower bound. |
| attachmentTimestampUpperBound | `number`   |  The attachment timestamp upper bound. |
| nonce | [Tag](tag.md)   |  The nonce. |

**Returns:** [Transaction](transaction.md)
New instance of transaction.

___

<a id="fromtrytes"></a>

### `<Static>` fromTrytes

▸ **fromTrytes**(trytes: *[Trytes](trytes.md)*): [Transaction](transaction.md)

*Defined in [data/transaction.ts:155](https://github.com/iotaeco/iota-pico-data/blob/ecbfc47/src/data/transaction.ts#L155)*

Create instance of transaction from trytes.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)   |  The trytes for the this. |

**Returns:** [Transaction](transaction.md)
An instance of this.

___

