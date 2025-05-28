import * as capKey from "./cap-key/structs";
import * as event from "./event/structs";
import * as factory from "./factory/structs";
import * as limitedSupply from "./limited-supply/structs";
import * as redemptionQueue from "./redemption-queue/structs";
import * as registry from "./registry/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(capKey.CapKey);
loader.register(event.NewFactory);
loader.register(event.MintYourStable);
loader.register(event.BurnYourStable);
loader.register(event.ClaimReward);
loader.register(event.CreateQueueTicket);
loader.register(event.Redeem);
loader.register(event.SetRedeemer);
loader.register(factory.YourStableFactory);
loader.register(factory.Factory);
loader.register(factory.FactoryCap);
loader.register(limitedSupply.LimitedSupply);
loader.register(redemptionQueue.RedemptionQueueW);
loader.register(redemptionQueue.RedemptionTicket);
loader.register(redemptionQueue.RedemptionQueue);
loader.register(redemptionQueue.RedeemRequest);
loader.register(registry.Deployments);
loader.register(registry.Registry);
 }
