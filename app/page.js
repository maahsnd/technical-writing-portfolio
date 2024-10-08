import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <ul className={styles.homeLinkList}>
          <li>
            <Link href={`/portfolio`}>
              <h3>Technical Writing</h3>
            </Link>
          </li>
          <li>
            <Link href={`/development`}>
              <h3>Development</h3>
            </Link>
          </li>
          <li>
            <Link href={`/about-this-site`}>
              <h3>About This Site</h3>
            </Link>
          </li>
          <li>
            <Link href={`/miscellany`}>
              <h3>Miscellany</h3>
            </Link>
          </li>
          <li>
            <Link href={`/contact`}>
              <h3>Contact</h3>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
