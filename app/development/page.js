import Link from "next/link"
import styles from "./page.module.css";

export async function generateMetadata() {
    return { title: "Development" };
}

export default function DevHome() {
    return (
        <div className={styles.container}>
            <div className={styles.repoContainer}>
                <p>Please consult my GitHub: </p>
                <Link href={'https://github.com/maahsnd'} target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub Logo"
                        style={{ width: '50px', height: '50px' }}
                        className={styles.githubLogo}
                    />
                </Link>
            </div>
        </div >

    )
}