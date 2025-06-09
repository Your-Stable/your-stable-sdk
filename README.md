# Your Stable SDK

## Overview

The Your Stable SDK provides a set of functions for interacting with Your Stable contracts, allowing developers to:

- Create a factory for Your Stable coins
- Mint Your Stable coins with supported stablecoins (e.g., USDC)
- Burn Your Stable coins to redeem underlying assets
- Claim rewards
- Manage factory settings and limits
- Update metadata for Your Stable coins

## Installation

```bash
npm install your-stable-sdk
# or
yarn add your-stable-sdk
```

## Usage Examples

### Initialize Sui Client

```typescript
import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";

const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });
```

### Create a Factory

```typescript
import { Transaction } from "@mysten/sui/transactions";
import { YourStableClient, phantom, dryRun } from "your-stable-sdk";

async function createFactory() {
  const signer = loadSigner();
  const tx = new Transaction();

  // input your config
  const config = {
    // yourStable coinType
    yourStableCoinType: "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD",
    // yourStable treasuryCapId
    treasuryCapId: "0x82004b20e7d6b78eceeb61fc69d2c3e5a10a9e4448d37a2876e67fe5059741ce",
    // metadata for yourStable
    metadataObjectId: "0x9aa8e18af0d91d6be64c9478ad6ef01e513720664b816545aed79071014a2d62",
    // supply limit for yourStable 
    supplyLimit: BigInt(10000 * 10 ** YourStableClient.underlyingDecimal),
  };

  const [factory, factoryCap] = YourStableClient.createFactoryMoveCall(
    tx,
    config.yourStableCoinType,
    config.treasuryCapId,
    config.metadataObjectId,
    config.supplyLimit,
  );

  // Make factory a shared object; or converting to owned/wrapped object as you wish
  const factoryType = Factory.r(
    phantom(config.yourStableCoinType),
  ).fullTypeName;
  tx.moveCall({
    target: "0x2::transfer::public_share_object",
    typeArguments: [factoryType],
    arguments: [factory],
  });

  // Transfer factory cap to recipient
  tx.transferObjects([factoryCap], signer.toSuiAddress());

  // Execute transaction
  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
}
```

### Mint Your Stable Coins

```typescript
import { COIN_TYPE_LIST } from "your-stable-sdk";

async function mintYourStable() {
  const signer = loadSigner();
  const yourStableCoinType = "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";
  
  // Initialize factory
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  // Mint 0.01 USDC worth of Your Stable
  const depositedAmount = 0.01 * 10 ** 6;
  const usdcCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    COIN_TYPE_LIST.USDC,
    BigInt(depositedAmount),
  );
  
  // Mint Your Stable coins
  const yourStableCoin = factory.mintYourStableMoveCall(
    tx,
    COIN_TYPE_LIST.USDC,
    usdcCoin,
  );

  tx.transferObjects([yourStableCoin], signer.toSuiAddress());

  // Execute transaction
  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
}
```

### Burn Your Stable Coins

```typescript
async function burnYourStable() {
  const signer = loadSigner();
  const yourStableCoinType = "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";
  
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  // Burn 0.01 Your Stable
  const burnedAmount = 0.01 * 10 ** YourStableClient.underlyingDecimal;
  const yourStableCoin = await getInputCoins(
    tx,
    suiClient,
    signer.toSuiAddress(),
    yourStableCoinType,
    BigInt(burnedAmount),
  );
  
  // Burn and receive USDC
  const buckCoin = factory.burnYourStableMoveCall(tx, yourStableCoin, "USDC");

  tx.transferObjects([buckCoin], signer.toSuiAddress());

  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
}
```

### Claim Rewards

```typescript
async function claimReward() {
  const signer = loadSigner();
  const yourStableCoinType = "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";
  
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  const stsBuckCoin = factory.claimRewardMoveCall(tx);
  tx.transferObjects([stsBuckCoin], signer.toSuiAddress());

  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
}
```

### Update Metadata

```typescript
async function updateMetadata() {
  const signer = loadSigner();
  const yourStableCoinType = "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";
  
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  const tx = new Transaction();
  const metadataObjectId = "0x9aa8e18af0d91d6be64c9478ad6ef01e513720664b816545aed79071014a2d62";
  
  factory.updateMetadataMoveCall(tx, metadataObjectId, {
    iconUrl: "data:image/svg+xml;base64,PHN2Z...",
  });

  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
}
```

### Get Factory Information

```typescript
async function getYourStableFactory() {
  const yourStableCoinType = "0x26c842736665d461bd9a73c7a11ac69d64ec14015fdb5fd8f3c04c881a993f6a::jusd::JUSD";
  
  const factory = await YourStableClient.initialize(
    suiClient,
    yourStableCoinType,
  );

  // Get information about the factory
  const yourStableTotalSupply = Number(await factory.getYourStableTotalSupply()) / 10 ** 9;
  const yourStableBasicSupply = Number(await factory.getYourStableBasicSupply()) / 10 ** 9;
  const yourStableExtensionSupplies = await factory.getYourStableExtensionSupplies();
  const underlyingSTSBUCKBalance = Number(factory.getUnderlyingSTSBUCKBalance());
  const underlyingSTSBUCKReserve = Number(await factory.getUnderlyingSTSBuckReserve()) / 10 ** 9;
  const rewardSTSBuckAmount = Number(await factory.getRewardsSTSBuckAmount()) / 10 ** 9;
  const rewardsBuckAmount = Number(await factory.getRewardsBuckAmount()) / 10 ** 9;
  
  console.log({
    yourStableTotalSupply,
    yourStableBasicSupply,
    yourStableExtensionSupplies,
    underlyingSTSBUCKBalance,
    underlyingSTSBUCKReserve,
    rewardSTSBuckAmount,
    rewardsBuckAmount,
  });
}
```

## Additional Features

- **Batch Redeem**: Redeem multiple stablecoins at once
- **Set Basic Limit**: Update the basic supply limit for Your Stable coins
- **Burn and Redeem**: Combined operation to burn Your Stable and redeem a specific amount

## Dry Run Support

The SDK supports dry running transactions before submitting them:

```typescript
const dryRunResponse = await dryRun(suiClient, tx, signer.toSuiAddress());

if (dryRunResponse.dryrunRes.effects.status.status === "success") {
  const response = await suiClient.signAndExecuteTransaction({
    transaction: tx,
    signer,
  });
} else {
  console.error(dryRunResponse.dryrunRes.effects.status.error);
}
```

## License

MIT
