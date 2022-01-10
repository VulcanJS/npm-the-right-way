export type SharedType = "shared";
export const shared: SharedType = "shared";

export const isClient = (): boolean => {
  return typeof window !== "undefined";
};
