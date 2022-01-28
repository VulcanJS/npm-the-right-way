import { defineBuildConfig } from "unbuild";
// @see https://github.com/unjs/unbuild/blob/main/src/types.ts
export default defineBuildConfig({
  entries: [
    { input: "shared/index", outDir: "dist/shared", format: "esm" },
    { input: "client/index", outDir: "dist/client", format: "esm" },
    { input: "server/index", outDir: "dist/server", format: "cjs" },
  ],
  // makes it slower, but remove need for tsc
  declaration: true,
});

//"build:shared": "esbuild shared/index.ts --outdir=dist/shared --sourcemap --bundle --minify --platform=neutral --out-extension:.js=.mjs --main-fields=module,main,browser --external:tty # Don't forget to add type:'module' in package.json",
//"build:client": "esbuild client/index.ts --outdir=dist/client --sourcemap --bundle --minify --platform=browser --external:react --external:react-dom --format=esm --out-extension:.js=.mjs",
//"build:server": "esbuild server/index.ts --outdir=dist/server --sourcemap --bundle --minify --platform=node    --external:react --external:react-dom",
