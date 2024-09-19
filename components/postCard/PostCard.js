import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {

    return (
        <div className={styles.container}>
            <Link href={`portfolio/${post.slug}`}>
                <h3 className={styles.postTitle}>{post.title}</h3>
            </Link>
        </div>
    )
}