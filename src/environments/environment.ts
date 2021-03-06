import { ApplicationInfo } from "src/app/class/model/application-info";
import { base_environment } from "src/environments/base/environment";

export const env = new ApplicationInfo(base_environment);
env.production = false;
