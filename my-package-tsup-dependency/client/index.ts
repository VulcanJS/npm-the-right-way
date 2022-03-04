export * from "../shared";

if (typeof window === "undefined" || !window) {
  console.log("client window dependency", window);
  throw new Error(
    "You tried to import client-only code on the server from dependency."
  );
}

export type ClientOnlyDependencyType = "client-only-dependency";
export const clientOnlyDependency: ClientOnlyDependencyType =
  "client-only-dependency";
