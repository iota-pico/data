[@iota-pico/data](../README.md) > [SignatureFragment](../classes/signaturefragment.md)



# Class: SignatureFragment


A class for handling signature fragments.

## Index

### Properties

* [EMPTY](signaturefragment.md#empty)
* [LENGTH](signaturefragment.md#length)


### Methods

* [toTrytes](signaturefragment.md#totrytes)
* [create](signaturefragment.md#create)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[SignatureFragment](signaturefragment.md)*  =  SignatureFragment.create(Trytes.create("9".repeat(SignatureFragment.LENGTH)))

*Defined in data/signatureFragment.ts:11*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 2187

*Defined in data/signatureFragment.ts:9*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in data/signatureFragment.ts:42*



Convert the signature fragment to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the signature fragment.






___

<a id="create"></a>

### «Static» create

► **create**(signatureFragment: *[Trytes](trytes.md)*): [SignatureFragment](signaturefragment.md)



*Defined in data/signatureFragment.ts:26*



Create signature fragment from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureFragment | [Trytes](trytes.md)   |  The trytes to create the signature fragment from. |





**Returns:** [SignatureFragment](signaturefragment.md)
An instance of SignatureFragment.






___


