export * from "../shared";

if (typeof window === "undefined") {
  throw new Error("You tried to import clientOnly code on the server.");
}

export type ClientOnlyType = "client-only";
export const clientOnly: ClientOnlyType = "client-only";
