export const PACKAGE_ID =
  "0x1075cb7ae27b82a95c68f02484b1bae44595a2fe07681f6929151032575b0fe0";
export let PUBLISHED_AT =
  "0x9616803519b885d3e55ac6afe31cf9f1205d9f94b13ed48e53231a4aae792af2";
export const PKG_V1 =
  "0x1075cb7ae27b82a95c68f02484b1bae44595a2fe07681f6929151032575b0fe0";
export const PKG_V2 =
  "0x9616803519b885d3e55ac6afe31cf9f1205d9f94b13ed48e53231a4aae792af2";

export function setPublishedAt(packageId: string) {
  PUBLISHED_AT = packageId;
}
