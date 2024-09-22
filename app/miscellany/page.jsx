import styles from './page.module.css'

export async function generateMetadata() {
    return { title: "Miscellany" };
}

export default function Miscellany() {
    return (
        <div className={styles.container}>
            No miscellany yet
        </div>
    )
}