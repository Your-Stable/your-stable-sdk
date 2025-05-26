import * as event from "./event/structs";
import * as sbuckSavingVault from "./sbuck-saving-vault/structs";
import * as timeLockedBalance from "./time-locked-balance/structs";
import * as vault from "./vault/structs";
import type { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
  loader.register(event.DepositEvent);
  loader.register(event.WithdrawEvent);
  loader.register(event.StrategyProfitEvent);
  loader.register(event.StrategyLossEvent);
  loader.register(sbuckSavingVault.AdminCap);
  loader.register(sbuckSavingVault.Strategy);
  loader.register(timeLockedBalance.TimeLockedBalance);
  loader.register(vault.DepositEvent);
  loader.register(vault.WithdrawEvent);
  loader.register(vault.StrategyProfitEvent);
  loader.register(vault.StrategyBaseProfitEvent);
  loader.register(vault.StrategyLossEvent);
  loader.register(vault.AdminCap);
  loader.register(vault.VaultAccess);
  loader.register(vault.StrategyRemovalTicket);
  loader.register(vault.StrategyWithdrawInfo);
  loader.register(vault.WithdrawTicket);
  loader.register(vault.RebalanceInfo);
  loader.register(vault.RebalanceAmounts);
  loader.register(vault.StrategyState);
  loader.register(vault.Vault);
  loader.register(vault.BalanceKey);
}
