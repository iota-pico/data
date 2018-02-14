[@iota-pico/data](../README.md) > [Transaction](../classes/transaction.md)



# Class: Transaction


A class for handling transactions.

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
* [LENGTH](transaction.md#length)


### Methods

* [toTrytes](transaction.md#totrytes)
* [fromParams](transaction.md#fromparams)
* [fromTrytes](transaction.md#fromtrytes)



---
## Properties
<a id="address"></a>

###  address

**●  address**:  *[Address](address.md)* 

*Defined in data/transaction.ts:18*





___

<a id="attachmenttimestamp"></a>

###  attachmentTimestamp

**●  attachmentTimestamp**:  *`number`* 

*Defined in data/transaction.ts:29*





___

<a id="attachmenttimestamplowerbound"></a>

###  attachmentTimestampLowerBound

**●  attachmentTimestampLowerBound**:  *`number`* 

*Defined in data/transaction.ts:30*





___

<a id="attachmenttimestampupperbound"></a>

###  attachmentTimestampUpperBound

**●  attachmentTimestampUpperBound**:  *`number`* 

*Defined in data/transaction.ts:31*





___

<a id="branchtransaction"></a>

###  branchTransaction

**●  branchTransaction**:  *[Trytes](trytes.md)* 

*Defined in data/transaction.ts:26*





___

<a id="bundle"></a>

###  bundle

**●  bundle**:  *[Trytes](trytes.md)* 

*Defined in data/transaction.ts:24*





___

<a id="currentindex"></a>

###  currentIndex

**●  currentIndex**:  *`number`* 

*Defined in data/transaction.ts:22*





___

<a id="lastindex"></a>

###  lastIndex

**●  lastIndex**:  *`number`* 

*Defined in data/transaction.ts:23*





___

<a id="nonce"></a>

###  nonce

**●  nonce**:  *[Trytes](trytes.md)* 

*Defined in data/transaction.ts:32*





___

<a id="obsoletetag"></a>

###  obsoleteTag

**●  obsoleteTag**:  *[Tag](tag.md)* 

*Defined in data/transaction.ts:20*





___

<a id="signaturemessagefragment"></a>

###  signatureMessageFragment

**●  signatureMessageFragment**:  *[Trytes](trytes.md)* 

*Defined in data/transaction.ts:17*





___

<a id="tag"></a>

###  tag

**●  tag**:  *[Tag](tag.md)* 

*Defined in data/transaction.ts:28*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`number`* 

*Defined in data/transaction.ts:21*





___

<a id="trunktransaction"></a>

###  trunkTransaction

**●  trunkTransaction**:  *[Trytes](trytes.md)* 

*Defined in data/transaction.ts:25*





___

<a id="value"></a>

###  value

**●  value**:  *`number`* 

*Defined in data/transaction.ts:19*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 2673

*Defined in data/transaction.ts:12*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in data/transaction.ts:110*



Convert the transaction to trytes.




**Returns:** [Trytes](trytes.md)
The transaction as trytes.






___

<a id="fromparams"></a>

### «Static» fromParams

► **fromParams**(address: *[Address](address.md)*, value: *`number`*, obsoleteTag: *[Tag](tag.md)*, tag: *[Tag](tag.md)*, timestamp: *`number`*): [Transaction](transaction.md)



*Defined in data/transaction.ts:45*



Create instance of transaction from parameters.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | [Address](address.md)   |  The address for the transaction. |
| value | `number`   |  The value for the transaction. |
| obsoleteTag | [Tag](tag.md)   |  The obsolete tag for the transaction/ |
| tag | [Tag](tag.md)   |  - |
| timestamp | `number`   |  - |





**Returns:** [Transaction](transaction.md)
An instance of this.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(trytes: *[Trytes](trytes.md)*): [Transaction](transaction.md)



*Defined in data/transaction.ts:64*



Create instance of transaction from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | [Trytes](trytes.md)   |  The trytes for the this. |





**Returns:** [Transaction](transaction.md)
An instance of this.






___


