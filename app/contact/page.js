import styles from './page.module.css'

export async function generateMetadata() {
    return { title: "Contact" };
}

export default function Contact() {
    return (

        <div className={styles.container}>

            <p>
                You can reach me at:

            </p>
            <a href="mailto:nmaahs11@gmail.com">
                nmaahs11@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/nicholas-maahs/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nicholas-maahs/
            </a>
        </div>
    )
}