import * as linkedTable from "./linked-table/structs";
import * as vestingLock from "./vesting-lock/structs";
import type { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
  loader.register(linkedTable.LinkedTable);
  loader.register(linkedTable.Node);
  loader.register(vestingLock.VestingLock);
}
