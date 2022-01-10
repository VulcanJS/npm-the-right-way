import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/with-webpack">
            <a>Demo with webpack import</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
