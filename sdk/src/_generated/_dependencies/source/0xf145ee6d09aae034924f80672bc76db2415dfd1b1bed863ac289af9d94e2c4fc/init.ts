import * as bucketOracle from "./bucket-oracle/structs";
import * as priceAggregator from "./price-aggregator/structs";
import * as singleOracle from "./single-oracle/structs";
import type { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
  loader.register(bucketOracle.AdminCap);
  loader.register(bucketOracle.BucketOracle);
  loader.register(bucketOracle.PriceType);
  loader.register(priceAggregator.PriceInfo);
  loader.register(priceAggregator.PriceVector);
  loader.register(singleOracle.ParsePriceEvent);
  loader.register(singleOracle.SingleOracle);
  loader.register(singleOracle.PriceCollector);
  loader.register(singleOracle.WhitelistRule);
}
