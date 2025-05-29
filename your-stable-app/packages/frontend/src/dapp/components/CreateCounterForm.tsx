import { useCurrentAccount } from '@mysten/dapp-kit'
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
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router'
import CustomConnectButton from '~~/components/CustomConnectButton'
import {
  CONTRACT_PACKAGE_VARIABLE_NAME,
  EXPLORER_URL_VARIABLE_NAME,
} from '~~/config/network'
import { prepareCreateCounterTransaction } from '~~/dapp/helpers/transactions'
import { transactionUrl } from '~~/helpers/network'
import { notification } from '~~/helpers/notification'
import useNetworkConfig from '~~/hooks/useNetworkConfig'

const COIN_TYPES = [
  { value: 'sui', label: 'SUI' },
  { value: 'usdc', label: 'USDC' },
  { value: 'usdt', label: 'USDT' },
]

const CreateCounterForm = () => {
  const currentAccount = useCurrentAccount()
  const { useNetworkVariable } = useNetworkConfig()
  const packageId = useNetworkVariable(CONTRACT_PACKAGE_VARIABLE_NAME)
  const [notificationId, setNotificationId] = useState<string>()
  const explorerUrl = useNetworkVariable(EXPLORER_URL_VARIABLE_NAME)
  const navigate = useNavigate()

  const [isMint, setIsMint] = useState(true)
  const [amount, setAmount] = useState('')
  const [selectedCoin, setSelectedCoin] = useState(COIN_TYPES[0].value)

  // Mock exchange rate - replace with actual rates from your contract
  const exchangeRate = 1.5

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

      const counterId = response.effects?.created?.[0]?.reference?.objectId
      navigate(`/counter/${counterId}`)
    },
    onError: (e: Error) => {
      notification.txError(e, null, notificationId)
    },
    waitForTransactionOptions: {
      showEffects: true,
    },
  })

  const handleCreateCounterClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    create(prepareCreateCounterTransaction(packageId))
  }

  if (currentAccount == null) return <CustomConnectButton />

  const calculatedOutput = Number(amount) * exchangeRate

  return (
    <div className="my-2 flex w-full max-w-md flex-grow flex-col items-center justify-center">
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

          {/* Amount Input */}
          <TextField.Root
            placeholder="Enter amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* Coin Selector */}
          <Select.Root value={selectedCoin} onValueChange={setSelectedCoin}>
            <Select.Trigger />
            <Select.Content>
              {COIN_TYPES.map((coin) => (
                <Select.Item key={coin.value} value={coin.value}>
                  {coin.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>

          {/* Preview Card */}
          {amount && (
            <Card variant="surface">
              <Flex direction="column" gap="2">
                <Text size="2" weight="bold">
                  Preview
                </Text>
                <Flex justify="between">
                  <Text size="2">You {isMint ? 'deposit' : 'receive'}:</Text>
                  <Badge size="2">
                    {amount} {selectedCoin.toUpperCase()}
                  </Badge>
                </Flex>
                <Flex justify="between">
                  <Text size="2">You {isMint ? 'receive' : 'burn'}:</Text>
                  <Badge size="2">
                    {calculatedOutput.toFixed(2)} YourStable
                  </Badge>
                </Flex>
              </Flex>
            </Card>
          )}

          {/* Action Button */}
          <Button
            variant="solid"
            size="3"
            onClick={handleCreateCounterClick}
            disabled={!amount || Number(amount) <= 0}
          >
            {isMint ? 'Mint YourStable' : 'Burn YourStable'}
          </Button>
        </Flex>
      </Card>
    </div>
  )
}

export default CreateCounterForm
