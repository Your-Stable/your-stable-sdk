import { normalizeSuiAddress } from "@mysten/sui/utils";

export const YOUR_STABLE_PACKAGE_UPGRADE_CAP =
  "0x8002a208aa1a8b62e4a635e2c71e92dc4c5ff08c4d9adef8db1c81a248aaa67f";

export const FACTORY_REGISTRY_SHARED_OBJECT_REF = {
  objectId:
    "0x72ea56a543bae88a4d8e777fec40f54646a26f1a67a37b70fdd2f5338226b165",
  initialSharedVersion: 581691469,
  mutable: true,
};

export const CONFIG_SHARED_OBJECT_REF = {
  objectId:
    "0xf8760ecc764b4b0338aee267d60c9893686919ccc30eb2ad3cd6ac5bb95c1092",
  initialSharedVersion: 581691469,
  mutable: true,
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
      "0xc403edad712380423e0b4ed52918e08324b7833ffff281cf8e719c27a87be0da",
    initialSharedVersion: 581125205,
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
