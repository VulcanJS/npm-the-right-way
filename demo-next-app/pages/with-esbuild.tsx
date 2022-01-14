import { shared, isClient, SharedType } from "my-package-esbuild";
import { serverOnly, ServerOnlyType } from "my-package-esbuild/server";
import { DynamicClientOnly } from "../components/DynamicClientOnly";

export default function WithEsbuildPage(props: { serverOnly: ServerOnlyType }) {
  return (
    <div>
      <div>Server-only: {props.serverOnly}</div>
      <div>
        Client-only: <DynamicClientOnly />
      </div>
      <div>Shared:{shared}</div>
      <p>
        Note: this line should provoke an SSR issue, it's perfectly normal,
        that's just for testing
      </p>
      <div>Is client: {isClient() ? "true" : "false"} </div>
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
