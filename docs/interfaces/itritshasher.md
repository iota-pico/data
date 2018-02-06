[@iota-pico/data](../README.md) > [ITritsHasher](../interfaces/itritshasher.md)



# Interface: ITritsHasher


Represents an interface to hash trits.
*__interface__*: 



## Methods
<a id="absorb"></a>

###  absorb

► **absorb**(trits: *[Trits](../classes/trits.md)*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:25](https://github.com/iotaeco/iota-pico-data/blob/9a36b90/src/interfaces/ITritsHasher.ts#L25)*



Absorb trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | [Trits](../classes/trits.md)   |  The trits to absorb. |
| offset | `number`   |  The offset into the trits to absorb from. |
| length | `number`   |  The number of trits to absorb. |





**Returns:** `void`





___

<a id="initialize"></a>

###  initialize

► **initialize**(state?: *`number`[]*): `void`



*Defined in [interfaces/ITritsHasher.ts:12](https://github.com/iotaeco/iota-pico-data/blob/9a36b90/src/interfaces/ITritsHasher.ts#L12)*



Initialise the hasher.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| state | `number`[]   |  The initial state for the hasher. |





**Returns:** `void`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Defined in [interfaces/ITritsHasher.ts:17](https://github.com/iotaeco/iota-pico-data/blob/9a36b90/src/interfaces/ITritsHasher.ts#L17)*



Reset the hasher.




**Returns:** `void`





___

<a id="squeeze"></a>

###  squeeze

► **squeeze**(trits: *[Trits](../classes/trits.md)*, offset: *`number`*, length: *`number`*): `void`



*Defined in [interfaces/ITritsHasher.ts:33](https://github.com/iotaeco/iota-pico-data/blob/9a36b90/src/interfaces/ITritsHasher.ts#L33)*



Squeeze trits into the hash.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | [Trits](../classes/trits.md)   |  The trits to squeeze. |
| offset | `number`   |  The offset into the trits to squeeze from. |
| length | `number`   |  The number of trits to squeeze. |





**Returns:** `void`





___


