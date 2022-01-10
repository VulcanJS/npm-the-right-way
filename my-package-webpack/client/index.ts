export * from "../shared";

// TODO: currently window will be set to a dummy "42" value, we need to fix the setup
if (typeof window === "undefined" || !window) {
  console.log("client window", window);
  throw new Error("You tried to import client-only code on the server.");
}

export type ClientOnlyType = "client-only";
export const clientOnly: ClientOnlyType = "client-only";
