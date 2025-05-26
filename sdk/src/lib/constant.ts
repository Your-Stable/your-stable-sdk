import { normalizeSuiAddress } from "@mysten/sui/dist/cjs/utils";

export const YOUR_STABLE_PACKAGE_ADMIN_CAP =
  "0x0d5b1a27b27eefd83e5eb5f5d3d0960e90e1a0c5ce12ed820f0c3412e3d78cef";

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

export const DUMMY_ADDRESS = normalizeSuiAddress("0x00");
