import type { KeyringPair } from '@polkadot/keyring/types'

import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkAccountToDid(
  did: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  linkedAccount: KeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<void> {
  const api = Kilt.ConfigService.get('api')

  // The account to be linked has to sign a specifically-crafted payload to prove
  // willingness to be linked to the DID.
  const linkingAccountSignatureGeneration = async (
    signaturePayload: string | Uint8Array
  ) => linkedAccount.sign(signaturePayload)

  // Authorizing the tx with the full DID and including a signature of the linked account
  // results in the provided account being linked to the DID authorizing the operation.
  const accountLinkingParameters = await Kilt.Did.associateAccountToChainArgs(
    linkedAccount.address,
    did,
    linkingAccountSignatureGeneration
  )
  const accountLinkingTx = await api.tx.didLookup.associateAccount(
    ...accountLinkingParameters
  )
  const authorizedAccountLinkingTx = await Kilt.Did.authorizeTx(
    did,
    accountLinkingTx,
    signCallback,
    submitterAccount.address
  )

  await Kilt.Blockchain.signAndSubmitTx(
    authorizedAccountLinkingTx,
    submitterAccount
  )
}
