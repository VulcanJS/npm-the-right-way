export * from "../shared";

if (typeof window !== "undefined") {
  throw new Error("You tried to import server-only code on the client.");
}
export const serverOnly = "server-only";
