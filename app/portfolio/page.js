import PostCard from "@/components/postCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";
import styles from "./portfolio.module.css";

export default function Portfolio() {
    return (
        <main>
            <div className={styles.gallery}>
                {getPostMetadata('portfolio').map((post) => (
                    <PostCard post={post} />
                ))}
            </div>
        </main>
    )
}