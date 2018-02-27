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

* [addSignatureFragments](bundle.md#addsignaturefragments)
* [addTransactions](bundle.md#addtransactions)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Bundle**(): [Bundle](bundle.md)


*Defined in [data/bundle.ts:15](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/bundle.ts#L15)*



Create a new instance of Bundle.




**Returns:** [Bundle](bundle.md)

---


## Properties
<a id="inclusionstate"></a>

###  inclusionState

**●  inclusionState**:  *`boolean`* 

*Defined in [data/bundle.ts:15](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/bundle.ts#L15)*





___

<a id="transactions"></a>

###  transactions

**●  transactions**:  *[Transaction](transaction.md)[]* 

*Defined in [data/bundle.ts:14](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/bundle.ts#L14)*





___


## Methods
<a id="addsignaturefragments"></a>

###  addSignatureFragments

► **addSignatureFragments**(signatureFragments: *[SignatureFragment](signaturefragment.md)[]*): `void`



*Defined in [data/bundle.ts:45](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/bundle.ts#L45)*



Add signature fragments to the bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureFragments | [SignatureFragment](signaturefragment.md)[]   |  The signature fragments to add to the bundle transactions. |





**Returns:** `void`





___

<a id="addtransactions"></a>

###  addTransactions

► **addTransactions**(signatureMessageLength: *`number`*, address: *[Address](address.md)*, value: *`number`*, tag: *[Tag](tag.md)*, timestamp: *`number`*): `void`



*Defined in [data/bundle.ts:32](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/bundle.ts#L32)*



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


