export * from "../shared";

if (typeof window === "undefined") {
  throw new Error("You tried to import clientOnly code on the server.");
}
export const clientOnly = "client-only";
