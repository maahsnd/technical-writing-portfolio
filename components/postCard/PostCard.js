import Link from "next/link";
import styles from "./PostCard.module.css";
import Markdown from "markdown-to-jsx";

export default function PostCard({ postSlug, postTitle, postCoverNote, index }) {
    return (
        <div className={styles.wrap}>
            <Link href={`portfolio/${postSlug}`}>
                <div className={styles.container}>

                    <h3 className={styles.postTitle}>{postTitle}</h3>

                    <div className={styles.coverNote}>
                        <Markdown>{postCoverNote.content}</Markdown>
                    </div>
                    <p className={styles.pageNumber}>{index + 1}</p>
                </div>

            </Link>
        </div>
    )
}