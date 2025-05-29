import { Transaction } from '@mysten/sui/transactions'
import { fullFunctionName } from '~~/helpers/network'
import { YourStableClient } from 'your-stable-sdk'
import { type SuiClient } from '@mysten/sui/client'
import { normalizeStructTag, SUI_TYPE_ARG } from '@mysten/sui/utils'

export const prepareCreateCounterTransaction = (
  packageId: string
): Transaction => {
  const tx = new Transaction()
  tx.moveCall({
    arguments: [],
    target: fullFunctionName(packageId, 'create'),
  })

  return tx
}

export const prepareIncrementCounterTransaction = (
  packageId: string,
  objectId: string
): Transaction => {
  const tx = new Transaction()
  tx.moveCall({
    arguments: [tx.object(objectId)],
    target: fullFunctionName(packageId, 'increment'),
  })

  return tx
}

export const prepareDecrementCounterTransaction = (
  packageId: string,
  objectId: string
): Transaction => {
  const tx = new Transaction()
  tx.moveCall({
    arguments: [tx.object(objectId)],
    target: fullFunctionName(packageId, 'decrement'),
  })

  return tx
}

export const prepareMintYourStableTransaction = async (
  suiClient: SuiClient,
  depositedStableCoinType: string,
  yourStableCoinType: string,
  depositedAmount: bigint,
  sender: string
) => {
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType
  )
  const tx = new Transaction()
  // example: 0.01 USDC
  const usdcCoin = await getInputCoins(
    tx,
    suiClient,
    sender,
    depositedStableCoinType,
    BigInt(depositedAmount)
  )
  const yourStableCoin = factory.mintYourStableMoveCall(
    tx,
    depositedStableCoinType,
    usdcCoin
  )

  tx.transferObjects([yourStableCoin], sender)

  return tx
}

export const prepareBurnYourStableTransaction = async (
  suiClient: SuiClient,
  yourStableCoinType: string,
  burnedAmount: bigint,
  sender: string
) => {
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType
  )
  const tx = new Transaction()
  // example: 0.01 USDC
  const yourStableCoin = await getInputCoins(
    tx,
    suiClient,
    sender,
    yourStableCoinType,
    BigInt(burnedAmount)
  )
  // stableCoin Amount to redeem
  const redeemedAmount = BigInt(burnedAmount)
  const buckCoin = factory.burnYourStableMoveCall(
    tx,
    yourStableCoin,
    'USDC',
    sender,
    redeemedAmount
  )

  tx.transferObjects([buckCoin], sender)

  return tx
}

export async function getInputCoins(
  tx: Transaction,
  client: SuiClient,
  owner: string,
  coinType: string,
  ...amounts: bigint[]
) {
  let isZero = true
  for (const amount of amounts) {
    if (Number(amount) > 0) {
      isZero = false
      break
    }
  }

  if (isZero) {
    return tx.moveCall({
      target: `0x2::coin::zero`,
      typeArguments: [coinType],
    })
  }

  if (
    coinType === SUI_TYPE_ARG ||
    coinType == normalizeStructTag(SUI_TYPE_ARG)
  ) {
    return tx.splitCoins(
      tx.gas,
      amounts.map((amount) => tx.pure.u64(amount))
    )
  } else {
    const { data: userCoins } = await client.getCoins({ owner, coinType })
    const [mainCoin, ...otherCoins] = userCoins.map((coin) =>
      tx.objectRef({
        objectId: coin.coinObjectId,
        version: coin.version,
        digest: coin.digest,
      })
    )
    if (!mainCoin) {
      return tx.moveCall({
        target: `0x2::coin::zero`,
        typeArguments: [coinType],
      })
    }

    if (otherCoins.length > 0) tx.mergeCoins(mainCoin, otherCoins)

    return tx.splitCoins(
      mainCoin,
      amounts.map((amount) => tx.pure.u64(amount))
    )
  }
}
