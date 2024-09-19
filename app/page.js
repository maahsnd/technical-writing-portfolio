import PostCard from "@/components/postCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";

export default function Home() {
  const postMeta = getPostMetadata('portfolio');
  return (
    <main>
      <div>
        {postMeta.map((post, index) => {
          return (
            <PostCard key={index} post={post} />
          )
        }
        )}
      </div>
    </main>
  );
}
