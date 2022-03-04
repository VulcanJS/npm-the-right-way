import { defineConfig } from "tsup";

const commonConfig = {
  clean: true,
  splitting: false,
  dts: true,
  sourcemap: true,
};
export default defineConfig([
  {
    entry: ["shared/index.ts"],
    ...commonConfig,
    format: ["cjs", "esm", "iife"],
    outDir: "dist/shared",
  },
  {
    entry: ["server/index.ts"],
    ...commonConfig,
    format: ["cjs"],
    outDir: "dist/server",
  },
  {
    entry: ["client/index.ts"],
    ...commonConfig,
    format: ["esm", "iife"],
    outDir: "dist/client",
  },
]);
