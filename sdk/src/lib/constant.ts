import { normalizeSuiAddress } from "@mysten/sui/utils";

export const YOUR_STABLE_PACKAGE_UPGRADE_CAP =
  "0xef4a4dbf7e76eb1fcbb150721ec34f45c9610f729f366ca7a14c84372289f7fb";

export const FACTORY_REGISTRY_SHARED_OBJECT_REF = {
  objectId:
    "0x5b028d014655ea41f9fbd0af35d3bfd78659a77b651ea52cff4cda7823bbb300",
  initialSharedVersion: 566040178,
  mutable: true,
};

export const CONFIG_SHARED_OBJECT_REF = {
  objectId:
    "0x5f35aaedcb0b46c6cd6631b17b7196285191281c8943e53678309c4fbb49c801",
  initialSharedVersion: 570210140,
  mutable: false,
};

export type SUPPORTED_REDEMPTION_COIN = "USDC";

export const COIN_TYPE_LIST: Record<SUPPORTED_REDEMPTION_COIN, string> = {
  USDC: "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
};
export const REDEMPTION_QUEUE: Record<
  SUPPORTED_REDEMPTION_COIN,
  {
    objectId: string;
    initialSharedVersion: number;
    mutable: boolean;
  }
> = {
  USDC: {
    objectId:
      "0x776bdff8fe47dfddcbde6039abd383d0571fbd4b8ac96f49443c0152fd4001f2",
    initialSharedVersion: 572923832,
    mutable: true,
  },
};

export const ST_SBUCK_VAULT_SHARED_OBJECT_REF = {
  objectId:
    "0xe83e455a9e99884c086c8c79c13367e7a865de1f953e75bcf3e529cdf03c6224",
  initialSharedVersion: 261896418,
  mutable: true,
};

export const BUCKET_PROTOCOL_SHARED_OBJECT_REF = {
  objectId:
    "0x9e3dab13212b27f5434416939db5dec6a319d15b89a84fd074d03ece6350d3df",
  initialSharedVersion: 6365975,
  mutable: true,
};

export const FLASK_SHARED_OBJECT_REF = {
  objectId:
    "0xc6ecc9731e15d182bc0a46ebe1754a779a4bfb165c201102ad51a36838a1a7b8",
  initialSharedVersion: 90706194,
  mutable: true,
};

export const FOUNTAIN_SHARED_OBJECT_REF = {
  objectId:
    "0xbdf91f558c2b61662e5839db600198eda66d502e4c10c4fc5c683f9caca13359",
  initialSharedVersion: 87170268,
  mutable: true,
};

export const SAVING_VAULT_STRATEGY_SHARED_OBJECT_REF = {
  objectId:
    "0x55bb4f6737d9a299cae4da7687dcf0ab4f56494dfe6ec1189a388b6018d0c2a8",
  initialSharedVersion: 261896419,
  mutable: true,
};

export const DUMMY_ADDRESS = normalizeSuiAddress("0x00");
