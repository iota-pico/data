[@iota-pico/data](../README.md) > [SignatureFragment](../classes/signaturefragment.md)



# Class: SignatureFragment


A class for handling signature fragments.

## Index

### Properties

* [EMPTY](signaturefragment.md#empty)
* [LENGTH](signaturefragment.md#length)


### Methods

* [toTrytes](signaturefragment.md#totrytes)
* [fromTrytes](signaturefragment.md#fromtrytes)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[SignatureFragment](signaturefragment.md)*  =  SignatureFragment.fromTrytes(Trytes.fromString("9".repeat(SignatureFragment.LENGTH)))

*Defined in [data/signatureFragment.ts:12](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/signatureFragment.ts#L12)*





___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 2187

*Defined in [data/signatureFragment.ts:10](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/signatureFragment.ts#L10)*





___


## Methods
<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/signatureFragment.ts:43](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/signatureFragment.ts#L43)*



Convert the signature fragment to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the signature fragment.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(signatureFragment: *[Trytes](trytes.md)*): [SignatureFragment](signaturefragment.md)



*Defined in [data/signatureFragment.ts:27](https://github.com/iotaeco/iota-pico-data/blob/5154449/src/data/signatureFragment.ts#L27)*



Create signature fragment from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureFragment | [Trytes](trytes.md)   |  The trytes to create the signature fragment from. |





**Returns:** [SignatureFragment](signaturefragment.md)
An instance of SignatureFragment.






___


