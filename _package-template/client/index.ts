export * from "../shared";

if (typeof window === "undefined" || !window) {
  console.log("client window", window);
  throw new Error("You tried to import client-only code on the server.");
}

export type ClientOnlyType = "client-only";
export const clientOnly: ClientOnlyType = "client-only";
