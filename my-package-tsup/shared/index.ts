// Import a non-trivial shared lib to test "externals" management
import "react";

export type SharedType = "shared";
export const shared: SharedType = "shared";

export const isClient = (): boolean => {
  return typeof window !== "undefined";
};
