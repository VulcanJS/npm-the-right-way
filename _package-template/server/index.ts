import fs from "fs"; // example of a server-only import

// We reexport shared code as a convenience for people that will only use the CommonJS server version
export * from "../shared";

/*
FIXME: currently we set window to "42" so this condition works in client-code
if (typeof window !== "undefined" && !!window) {
  throw new Error("You tried to import server-only code on the client.");
}
*/

export type ServerOnlyType = "server-only";
export const serverOnly: ServerOnlyType = "server-only";
