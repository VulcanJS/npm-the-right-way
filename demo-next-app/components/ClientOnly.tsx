import { clientOnly } from "my-package-esbuild/client";
import type { ClientOnlyType } from "my-package-webpack/client";

// NOTE: this will create an SSR issue, it's expected
export const ClientOnly = () => <>{clientOnly ? "true" : "false"}</>;

export default ClientOnly;
