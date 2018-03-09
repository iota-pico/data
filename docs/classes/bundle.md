[@iota-pico/data](../README.md) > [Bundle](../classes/bundle.md)



# Class: Bundle


A class for handling bundles.

## Index

### Constructors

* [constructor](bundle.md#constructor)


### Properties

* [inclusionState](bundle.md#inclusionstate)
* [transactions](bundle.md#transactions)


### Methods

* [addSignatureMessageFragments](bundle.md#addsignaturemessagefragments)
* [addTransactions](bundle.md#addtransactions)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Bundle**(): [Bundle](bundle.md)


*Defined in [data/bundle.ts:21](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/bundle.ts#L21)*



Create a new instance of Bundle.




**Returns:** [Bundle](bundle.md)

---


## Properties
<a id="inclusionstate"></a>

###  inclusionState

**●  inclusionState**:  *`boolean`* 

*Defined in [data/bundle.ts:21](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/bundle.ts#L21)*



The include state for the items in the bundle, populated if required during getTransfers.




___

<a id="transactions"></a>

###  transactions

**●  transactions**:  *[Transaction](transaction.md)[]* 

*Defined in [data/bundle.ts:17](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/bundle.ts#L17)*



The transactions that form the bundle.




___


## Methods
<a id="addsignaturemessagefragments"></a>

###  addSignatureMessageFragments

► **addSignatureMessageFragments**(signatureMessageFragments: *[SignatureMessageFragment](signaturemessagefragment.md)[]*): `void`



*Defined in [data/bundle.ts:51](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/bundle.ts#L51)*



Add signature fragments to the bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureMessageFragments | [SignatureMessageFragment](signaturemessagefragment.md)[]   |  The signature fragments to add to the bundle transactions. |





**Returns:** `void`





___

<a id="addtransactions"></a>

###  addTransactions

► **addTransactions**(signatureMessageLength: *`number`*, address: *[Address](address.md)*, value: *`number`*, tag: *[Tag](tag.md)*, timestamp: *`number`*): `void`



*Defined in [data/bundle.ts:38](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/bundle.ts#L38)*



Add new transactions to the bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureMessageLength | `number`   |  The number of transactions to add. |
| address | [Address](address.md)   |  The address for the transactions. |
| value | `number`   |  The value for the first of the transactions. |
| tag | [Tag](tag.md)   |  The tag to include in the transactions. |
| timestamp | `number`   |  The timestamp for the transactions. |





**Returns:** `void`





___


