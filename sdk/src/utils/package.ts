import { type SuiClient } from "@mysten/sui/client";

export async function getLatestPackageId(client: SuiClient, upgradeCapId: string) {
  const object = await client.getObject({
    id: upgradeCapId,
    options: {
      showContent: true,
    },
  });

  return (object.data?.content as any).fields.package;
}
