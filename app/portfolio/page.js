import PostCard from "@/components/postCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";
import { getPostContent } from "@/utils/getPostContent";
import styles from "./portfolio.module.css";

export default function Portfolio() {
    const postsMeta = getPostMetadata('portfolio/articles/');
    const postCardData = postsMeta.map((post) =>
    ({
        slug: post.slug,
        title: post.title,
        coverNote: getPostContent(post.slug, "portfolio/cover-notes/")
    })
    );
    return (
        <div className={styles.gallery}>
            {postCardData && postCardData.map((post, index) => (
                <PostCard postSlug={post.slug} postTitle={post.title} postCoverNote={post.coverNote} index={index} />
            ))}
        </div>
    )
}