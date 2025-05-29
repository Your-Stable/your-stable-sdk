import {
  useCurrentAccount,
  useSuiClient,
  useSuiClientQuery,
} from '@mysten/dapp-kit'
import { SuiTransactionBlockResponse } from '@mysten/sui/client'
import { SuiSignAndExecuteTransactionOutput } from '@mysten/wallet-standard'
import {
  Button,
  TextField,
  Select,
  Card,
  Flex,
  Text,
  Badge,
} from '@radix-ui/themes'
import useTransact from '@suiware/kit/useTransact'
import { MouseEvent, useMemo, useState } from 'react'
import { queryClient } from '~~/components/App'
import CustomConnectButton from '~~/components/CustomConnectButton'
import { EXPLORER_URL_VARIABLE_NAME } from '~~/config/network'
import {
  prepareBurnYourStableTransaction,
  prepareMintYourStableTransaction,
} from '~~/dapp/helpers/transactions'
import { transactionUrl } from '~~/helpers/network'
import { notification } from '~~/helpers/notification'
import useNetworkConfig from '~~/hooks/useNetworkConfig'

const STABLE_COIN_TYPES: Record<STABLE_COIN, string> = {
  USDC: '0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC',
}

const STABLE_COIN_DECIMALS: Record<STABLE_COIN, number> = {
  USDC: 6,
}

const YOUR_STABLE_COIN_TYPES: Record<YOUR_STABLE_COIN, string> = {
  JUSD: '0xce3201eab9a726748eb46dd16fa20005dadcc287d066f845c2f3e163d3bc090c::jusd::JUSD',
}

const YOUR_STABLE_DECIMALS: Record<YOUR_STABLE_COIN, number> = {
  JUSD: 9,
}

type STABLE_COIN = 'USDC'
type YOUR_STABLE_COIN = 'JUSD'

const CreateCounterForm = () => {
  const currentAccount = useCurrentAccount()
  const suiClient = useSuiClient()
  const { useNetworkVariable } = useNetworkConfig()
  const [notificationId, setNotificationId] = useState<string>()
  const explorerUrl = useNetworkVariable(EXPLORER_URL_VARIABLE_NAME)

  const [selectedStableCoin, setSelectedStableCoin] = useState<STABLE_COIN>(
    Object.keys(STABLE_COIN_TYPES)[0] as STABLE_COIN
  )
  const [selectedYourStable, setSelectedYourStable] =
    useState<YOUR_STABLE_COIN>(
      Object.keys(YOUR_STABLE_COIN_TYPES)[0] as YOUR_STABLE_COIN
    )

  const [isMint, setIsMint] = useState(true)
  const [amount, setAmount] = useState('')

  // Balance queries
  const { data: stableCoinBalance, isPending: isStableBalanceFetching } =
    useSuiClientQuery(
      'getBalance',
      {
        owner: currentAccount?.address || '',
        coinType: STABLE_COIN_TYPES[selectedStableCoin],
      },
      {
        enabled: !!currentAccount?.address,
        gcTime: 10000,
        queryKey: ['balance', STABLE_COIN_TYPES[selectedStableCoin]],
      }
    )

  const { data: yourStableBalance, isPending: isYourStableFetching } =
    useSuiClientQuery(
      'getBalance',
      {
        owner: currentAccount?.address || '',
        coinType: YOUR_STABLE_COIN_TYPES[selectedYourStable],
      },
      {
        enabled: !!currentAccount?.address,
        gcTime: 10000,
        queryKey: ['balance', YOUR_STABLE_COIN_TYPES[selectedYourStable]],
      }
    )

  // Transaction handler
  const { transact: create } = useTransact({
    onBeforeStart: () => {
      const nId = notification.txLoading()
      setNotificationId(nId)
    },
    onSuccess: (
      data: SuiSignAndExecuteTransactionOutput,
      response: SuiTransactionBlockResponse
    ) => {
      notification.txSuccess(
        transactionUrl(explorerUrl, data.digest),
        notificationId
      )

      console.log({ response })

      // Invalidate both balance queries
      queryClient.invalidateQueries({
        queryKey: ['balance', YOUR_STABLE_COIN_TYPES[selectedYourStable]],
      })
      queryClient.invalidateQueries({
        queryKey: ['balance', STABLE_COIN_TYPES[selectedStableCoin]],
      })
    },
    onError: (e: Error) => {
      notification.txError(e, null, notificationId)
    },
    waitForTransactionOptions: {
      showEffects: true,
    },
  })

  // Computed values based on mint/burn action
  const {
    inputCoin,
    outputCoin,
    inputBalance,
    outputBalance,
    inputBalanceLoading,
    outputBalanceLoading,
    inputDecimals,
    // outputDecimals,
  } = useMemo(() => {
    const formattedStableBalance =
      Number(stableCoinBalance?.totalBalance || 0) /
      10 ** STABLE_COIN_DECIMALS[selectedStableCoin]

    const formattedYourStableBalance =
      Number(yourStableBalance?.totalBalance || 0) /
      10 ** YOUR_STABLE_DECIMALS[selectedYourStable]

    if (isMint) {
      // Mint: Deposit stable coin ? Receive your stable
      return {
        inputCoin: selectedStableCoin,
        outputCoin: selectedYourStable,
        inputBalance: formattedStableBalance,
        outputBalance: formattedYourStableBalance,
        inputBalanceLoading: isStableBalanceFetching,
        outputBalanceLoading: isYourStableFetching,
        inputDecimals: STABLE_COIN_DECIMALS[selectedStableCoin],
        // outputDecimals: YOUR_STABLE_DECIMALS[selectedYourStable],
      }
    } else {
      // Burn: Deposit your stable ? Receive stable coin
      return {
        inputCoin: selectedYourStable,
        outputCoin: selectedStableCoin,
        inputBalance: formattedYourStableBalance,
        outputBalance: formattedStableBalance,
        inputBalanceLoading: isYourStableFetching,
        outputBalanceLoading: isStableBalanceFetching,
        inputDecimals: YOUR_STABLE_DECIMALS[selectedYourStable],
        // outputDecimals: STABLE_COIN_DECIMALS[selectedStableCoin],
      }
    }
  }, [
    isMint,
    selectedStableCoin,
    selectedYourStable,
    stableCoinBalance,
    yourStableBalance,
    isStableBalanceFetching,
    isYourStableFetching,
  ])

  const calculatedOutput = useMemo(() => {
    return Number(amount) || 0
  }, [amount])

  const handleOnClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!currentAccount?.address) return

    let tx

    if (isMint) {
      const value = BigInt(Math.floor(Number(amount) * 10 ** inputDecimals))
      tx = await prepareMintYourStableTransaction(
        suiClient,
        STABLE_COIN_TYPES[selectedStableCoin],
        YOUR_STABLE_COIN_TYPES[selectedYourStable],
        value,
        currentAccount.address
      )
    } else {
      const value = BigInt(Math.floor(Number(amount) * 10 ** inputDecimals))
      tx = await prepareBurnYourStableTransaction(
        suiClient,
        YOUR_STABLE_COIN_TYPES[selectedYourStable],
        value,
        currentAccount.address
      )
    }

    create(tx)
  }

  const isValidAmount =
    amount && Number(amount) > 0 && Number(amount) <= inputBalance

  if (currentAccount == null) return <CustomConnectButton />

  return (
    <div className="my-2 flex w-96 flex-grow flex-col items-center justify-center">
      <Card size="3" style={{ width: '100%' }}>
        <Flex direction="column" gap="4">
          {/* Action Toggle */}
          <Flex gap="2">
            <Button
              variant={isMint ? 'solid' : 'soft'}
              onClick={() => setIsMint(true)}
              style={{ flex: 1 }}
            >
              Mint
            </Button>
            <Button
              variant={!isMint ? 'solid' : 'soft'}
              onClick={() => setIsMint(false)}
              style={{ flex: 1 }}
            >
              Burn
            </Button>
          </Flex>

          {/* Input Section */}
          <Card variant="surface">
            <Flex direction="column" gap="3">
              <Flex justify="between" align="center">
                <Text size="2" weight="medium">
                  You {isMint ? 'deposit' : 'burn'}
                </Text>
                <Flex gap="2" align="center">
                  <Text size="2" color="gray">
                    Balance:
                  </Text>
                  {inputBalanceLoading ? (
                    <Flex gap="1" align="center">
                      <Text size="2" color="gray">
                        Loading
                      </Text>
                      <svg
                        className="animate-spin"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                        />
                      </svg>
                    </Flex>
                  ) : (
                    <Text size="2" weight="bold" color="blue">
                      {inputBalance.toFixed(2)} {inputCoin}
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex gap="2" align="center">
                <TextField.Root
                  placeholder="0.00"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ flex: 1 }}
                />
                {isMint ? (
                  <Select.Root
                    value={selectedStableCoin}
                    onValueChange={(v) =>
                      setSelectedStableCoin(v as STABLE_COIN)
                    }
                  >
                    <Select.Trigger style={{ minWidth: '80px' }} />
                    <Select.Content>
                      {Object.keys(STABLE_COIN_TYPES).map((coin) => (
                        <Select.Item key={coin} value={coin}>
                          {coin}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                ) : (
                  <Select.Root
                    value={selectedYourStable}
                    onValueChange={(v) =>
                      setSelectedYourStable(v as YOUR_STABLE_COIN)
                    }
                  >
                    <Select.Trigger style={{ minWidth: '80px' }} />
                    <Select.Content>
                      {Object.keys(YOUR_STABLE_COIN_TYPES).map((coin) => (
                        <Select.Item key={coin} value={coin}>
                          {coin}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              </Flex>

              {amount && Number(amount) > inputBalance && (
                <Text size="1" color="red">
                  Insufficient balance
                </Text>
              )}
            </Flex>
          </Card>

          {/* Output Section */}
          <Card variant="surface">
            <Flex direction="column" gap="3">
              <Flex justify="between" align="center">
                <Text size="2" weight="medium">
                  You {isMint ? 'receive' : 'get back'}
                </Text>
                <Flex gap="2" align="center">
                  <Text size="2" color="gray">
                    Balance:
                  </Text>
                  {outputBalanceLoading ? (
                    <Flex gap="1" align="center">
                      <Text size="2" color="gray">
                        Loading
                      </Text>
                      <svg
                        className="animate-spin"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                        />
                      </svg>
                    </Flex>
                  ) : (
                    <Text size="2" weight="bold" color="green">
                      {outputBalance.toFixed(2)} {outputCoin}
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex gap="2" align="center">
                <TextField.Root
                  placeholder="0.00"
                  value={calculatedOutput.toFixed(2)}
                  disabled
                  style={{ flex: 1 }}
                />
                {!isMint ? (
                  <Select.Root
                    value={selectedStableCoin}
                    onValueChange={(v) =>
                      setSelectedStableCoin(v as STABLE_COIN)
                    }
                  >
                    <Select.Trigger style={{ minWidth: '80px' }} />
                    <Select.Content>
                      {Object.keys(STABLE_COIN_TYPES).map((coin) => (
                        <Select.Item key={coin} value={coin}>
                          {coin}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                ) : (
                  <Select.Root
                    value={selectedYourStable}
                    onValueChange={(v) =>
                      setSelectedYourStable(v as YOUR_STABLE_COIN)
                    }
                  >
                    <Select.Trigger style={{ minWidth: '80px' }} />
                    <Select.Content>
                      {Object.keys(YOUR_STABLE_COIN_TYPES).map((coin) => (
                        <Select.Item key={coin} value={coin}>
                          {coin}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                )}
              </Flex>
            </Flex>
          </Card>

          {/* Preview Summary */}
          {amount && (
            <Card variant="classic">
              <Flex direction="column" gap="2">
                <Text size="2" weight="bold" color="gray">
                  Transaction Summary
                </Text>
                <Flex justify="between">
                  <Text size="2">Action:</Text>
                  <Badge size="2" color={isMint ? 'blue' : 'orange'}>
                    {isMint ? 'Mint' : 'Burn'}{' '}
                    {isMint ? selectedYourStable : selectedYourStable}
                  </Badge>
                </Flex>
                <Flex justify="between">
                  <Text size="2">Exchange Rate:</Text>
                  <Text size="2" weight="medium">
                    1:1
                  </Text>
                </Flex>
              </Flex>
            </Card>
          )}

          {/* Action Button */}
          <Button
            variant="solid"
            size="3"
            onClick={handleOnClick}
            disabled={!isValidAmount}
            color={isMint ? 'blue' : 'orange'}
          >
            {isMint
              ? `Mint ${calculatedOutput.toFixed(2)} ${selectedYourStable}`
              : `Burn ${calculatedOutput.toFixed(2)} ${selectedYourStable}`}
          </Button>
        </Flex>
      </Card>
    </div>
  )
}

export default CreateCounterForm
