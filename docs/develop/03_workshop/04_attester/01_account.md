---
id: account
title: Account
---

import TsJsBlock from '@site/src/components/TsJsBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import GenerateAccount from '!!raw-loader!@site/code_examples/workshop/attester/generateAccount.ts';

Now that you have [setup the project structure](./) in the last step, we'll create our <span className="label-role attester">Attester</span> account.
In KILT, an account is an object that interacts with the blockchain.
An account contains multiple properties.
One of them is the `address`: this is the entity's unique and public on-chain identifier, that is used to pay fees and deposits.
All we need to create an account is a mnemonic.

:::info KILT Account

A KILT account is a set of cryptographic elements:

- The address, which is generated from the public key
- A signing keypair to write transactions on-chain

:::

:::info mnemonic

In cryptography, a mnemonic usually consists of 12 or 24 random series of words.
For example, `gold upset segment cake universe` is a mnemonic.
It's used to generate signing keypairs.
What's great about a mnemonic is that it's **human-readable**.
A person can memorize it, and use it later to re-generate their keypairs and address.

:::

## Create the Account

To generate an account, one method from the Polkadot crypto utility, and one method from the KILT SDK is needed:

- `mnemonicGenerate()` - Generates a 12-word mnemonic
- `makeKeypairFromSeed(seed)` - takes a mnemonic as an input, and outputs a `Keypair` instance.

<TsJsBlock fileName="attester/generateAccount">
  {GenerateAccount}
</TsJsBlock>

## Execute

Now run it to get your <span className="label-role attester">Attester</span> `<address>` and `<mnenomic>`.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  yarn ts-node ./attester/generateAccount.ts
  ```

  </TabItem>
  <TabItem value='js' label='Javascript' default>

  ```bash
  node ./attester/generateAccount.js
  ```

  </TabItem>
</Tabs>

Your output will provide you with `ATTESTER_ACCOUNT_MNEMONIC` and `ATTESTER_ACCOUNT_ADDRESS`.
Be sure to save it in your `.env` file; it should now look similar to this.

```env title=".env"
WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws

ATTESTER_ACCOUNT_MNEMONIC="warrior icon use cry..."
ATTESTER_ACCOUNT_ADDRESS="4ohMvUHsyeDhMVZF..."
```

:::warning Get PILT coins!

You now have a blockchain account, which will be used to pay fees and deposits.
If you haven't already requested PILT, go to the [faucet](https://faucet.peregrine.kilt.io) and request tokens for your `<address>`.

:::
