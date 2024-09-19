import Link from "next/link"
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.homeLink}>
                    <h1>
                        Nick Maahs
                    </h1>
                </Link>
            </nav>
        </header>
    )
};