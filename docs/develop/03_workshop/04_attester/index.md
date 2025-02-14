---
id: attester
title: 🏢 Attester
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In this section you will walk though all processes done by the <span className="label-role attester">Attester</span>.

1. You will [create an account](./01_account.md) that is used to pay for all transactions and the storage deposits.
2. The next step is to [create a DID](./02_did.md), which is the identity that is used to create attestations.
   While you can always switch the KILT account and pay deposits and fees with any account you like, your DID stays the same and is the way Claimers will identify you and put trust in you.
3. Before we can attest claims, [we need a CType](./03_ctype.md) which describes and gives context to what we attest.
4. Once we have a way to pay fees and deposits, have an identity and a CType [we can create attestations](../06_attestation.md).

## Folder Structure

Create the following files in the <span className="label-role attester">Attester</span> folder.
This folders serves to mimic an <span className="label-role attester">Attester</span> service.

<Tabs groupId="ts-js-choice">
  <TabItem value='ts' label='Typescript' default>

  ```bash
  └─ kilt-rocks/ # project
    └─ attester/ # all attester code
       ├─ attestCredential.ts # issues attestations
       ├─ ctypeSchema.ts # create a local CType definition
       ├─ generateAccount.ts # functions for setting up and loading the attester's account
       ├─ generateCtype.ts # register the CType on chain
       ├─ generateDid.ts # registers the attester's on-chain DID
       └─ generateKeypairs.ts # setup the keys for the attester's DID
  ```

  </TabItem>
  <TabItem value='js' label='Javascript'>

  ```bash
  └─ kilt-rocks/ # project
    └─ attester/ # all attester code
       ├─ attestCredential.js # issues attestations
       ├─ ctypeSchema.js # create a local CType definition
       ├─ generateAccount.js # functions for setting up and loading the attester's account
       ├─ generateCtype.js # register the CType on chain
       ├─ generateDid.js # registers the attester's on-chain DID
       └─ generateKeypairs.js # setup the keys for the attester's DID
  ```

  </TabItem>
</Tabs>
