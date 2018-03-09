[@iota-pico/data](../README.md) > [SignatureMessageFragment](../classes/signaturemessagefragment.md)



# Class: SignatureMessageFragment


A class for handling signature message fragments.

## Index

### Properties

* [EMPTY](signaturemessagefragment.md#empty)
* [LENGTH](signaturemessagefragment.md#length)


### Methods

* [toString](signaturemessagefragment.md#tostring)
* [toTrytes](signaturemessagefragment.md#totrytes)
* [fromTrytes](signaturemessagefragment.md#fromtrytes)



---
## Properties
<a id="empty"></a>

### «Static» EMPTY

**●  EMPTY**:  *[SignatureMessageFragment](signaturemessagefragment.md)*  =  SignatureMessageFragment.fromTrytes(Trytes.fromString("9".repeat(SignatureMessageFragment.LENGTH)))

*Defined in [data/signatureMessageFragment.ts:16](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/signatureMessageFragment.ts#L16)*



An empty signature message fragment all 9s.




___

<a id="length"></a>

### «Static» LENGTH

**●  LENGTH**:  *`number`*  = 2187

*Defined in [data/signatureMessageFragment.ts:12](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/signatureMessageFragment.ts#L12)*



The length of a valid signature message fragment (2187)




___


## Methods
<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [data/signatureMessageFragment.ts:55](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/signatureMessageFragment.ts#L55)*



Get the string view of the object.




**Returns:** `string`
string of the trytes.






___

<a id="totrytes"></a>

###  toTrytes

► **toTrytes**(): [Trytes](trytes.md)



*Defined in [data/signatureMessageFragment.ts:47](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/signatureMessageFragment.ts#L47)*



Convert the signature fragment to trytes.




**Returns:** [Trytes](trytes.md)
Trytes version of the signature fragment.






___

<a id="fromtrytes"></a>

### «Static» fromTrytes

► **fromTrytes**(signatureMessageFragment: *[Trytes](trytes.md)*): [SignatureMessageFragment](signaturemessagefragment.md)



*Defined in [data/signatureMessageFragment.ts:31](https://github.com/iotaeco/iota-pico-data/blob/b5a374b/src/data/signatureMessageFragment.ts#L31)*



Create signature fragment from trytes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signatureMessageFragment | [Trytes](trytes.md)   |  The trytes to create the signature fragment from. |





**Returns:** [SignatureMessageFragment](signaturemessagefragment.md)
An instance of SignatureMessageFragment.






___


