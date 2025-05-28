import { normalizeSuiAddress } from "@mysten/sui/utils";

export const YOUR_STABLE_PACKAGE_UPGRADE_CAP =
  "0xa5232fdc9db429bdea5cd7ce0448cbcfa9002da8c5377d4b489a846ea6d0a84b";

export const FACTORY_REGISTRY_SHARED_OBJECT_REF = {
  objectId:
    "0x08cbafc235ddeacdd45cc01978d2709696eab2bec67116244e6442b5ab9baa8c",
  initialSharedVersion: 566040178,
  mutable: true,
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
