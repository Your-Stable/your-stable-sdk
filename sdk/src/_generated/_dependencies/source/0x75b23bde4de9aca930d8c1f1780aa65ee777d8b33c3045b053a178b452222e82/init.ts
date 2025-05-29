import * as fountainCore from "./fountain-core/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(fountainCore.AdminCap);
loader.register(fountainCore.Fountain);
loader.register(fountainCore.StakeProof);
loader.register(fountainCore.PenaltyKey);
loader.register(fountainCore.PenaltyVault);
loader.register(fountainCore.StakeEvent);
loader.register(fountainCore.ClaimEvent);
loader.register(fountainCore.UnstakeEvent);
loader.register(fountainCore.PenaltyEvent);
loader.register(fountainCore.SupplyEvent);
loader.register(fountainCore.WithdrawEvent);
loader.register(fountainCore.FlowRateUpdated);
loader.register(fountainCore.MaxPenaltyRateUpdated);
loader.register(fountainCore.PenaltyClaimed);
 }
