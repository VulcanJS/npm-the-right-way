import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/with-webpack">
            <a>Demo importing a full-stack package built with Webpack</a>
          </Link>
        </li>
        <li>
          <Link href="/with-esbuild">
            <a>Demo importing a full-stack package built with Esbuild</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
