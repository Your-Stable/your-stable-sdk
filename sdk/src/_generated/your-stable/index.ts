export const PACKAGE_ID =
  "0x1075cb7ae27b82a95c68f02484b1bae44595a2fe07681f6929151032575b0fe0";
export let PUBLISHED_AT =
  "0x1075cb7ae27b82a95c68f02484b1bae44595a2fe07681f6929151032575b0fe0";
export const PKG_V1 =
  "0x1075cb7ae27b82a95c68f02484b1bae44595a2fe07681f6929151032575b0fe0";

export const setPublishedAt = (latestPackageId: string) =>
  (PUBLISHED_AT = latestPackageId);
