import * as stSbuck from "./st-sbuck/structs";
import type { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
  loader.register(stSbuck.ST_SBUCK);
}
