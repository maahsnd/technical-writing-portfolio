import Link from "next/link"
import styles from "./page.module.css";
export default function DevHome() {
    return (
        <div className={styles.container}>
            <p>I like to keep things simple. To view my development work, please visit my GitHub: </p>
            <Link href={'https://github.com/maahsnd'} target="_blank" rel="noopener noreferrer">
                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    style={{ width: '50px', height: '50px' }}
                />
            </Link>
        </div >
    )
}