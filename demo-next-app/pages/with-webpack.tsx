import { shared, SharedType } from "my-package-webpack";
import { serverOnly, ServerOnlyType } from "my-package-webpack/server";

// import type { ClientOnlyType } from "my-package-webpack/client";
import dynamic from "next/dynamic";
// @ts-ignore
const DynamicClientOnly = dynamic(() =>
  import("my-package-webpack/client").then(
    (mod) =>
      function ClientOnlyComponent() {
        return <>{mod.clientOnly}</>;
      }
  )
);
export default function WithWebpackPage(props: { serverOnly: ServerOnlyType }) {
  return (
    <div>
      <div>Server-only: {props.serverOnly}</div>
      <div>
        Client-only: <DynamicClientOnly />
      </div>
      <div>Shared:{shared}</div>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      serverOnly,
    },
  };
}
