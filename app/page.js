import PostCard from "@/components/postCard/PostCard";
import { getPostMetadata } from "@/utils/getPostMetadata";
import Link from "next/link";

export default function Home() {
  const postMeta = getPostMetadata('portfolio');
  return (
    <main>
      <div>
        <ul>
          <li>
            <Link href={`/portfolio`}>
              <h3>Technical Writing</h3>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <h3>Development</h3>
            </Link>
          </li>
          <li>
            <Link href={`/`}>
              <h3>Miscellany</h3>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
