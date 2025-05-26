import * as supraSValueFeed from "./suprasvaluefeed/structs";
import type { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
  loader.register(supraSValueFeed.OracleHolder);
  loader.register(supraSValueFeed.Price);
}
