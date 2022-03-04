// Import a non-trivial shared lib to test "externals" management
import "react";

export type SharedDependencyType = "shared-dependency";
export const sharedDependency: SharedDependencyType = "shared-dependency";

export const isClientDependency = (): boolean => {
  return typeof window !== "undefined";
};
