import dynamic from "next/dynamic";

export const DynamicClientOnly = dynamic(() => import("./ClientOnly"), {
  ssr: false,
});
