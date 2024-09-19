import Link from "next/link";

export default function PostCard({ post }) {

    return (
        <Link href={`portfolio/${post.slug}`}>
            <div>
                <h3>{post.title}</h3>
            </div>
        </Link>
    )
}