import Markdown from "markdown-to-jsx"
import { getPostMetadata } from "@/utils/getPostMetadata"
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug) {
    const folder = "portfolio/";
    const file = folder + `/${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

export async function generateStaticParams() {
    const posts = getPostMetadata('portfolio');
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params, searchParams }) {
    const id = params?.slug ? ' | ' + params.slug : '';
    return { title: `Portfolio ${id.replaceAll('_', ' ')}` };
}

export default function PortfolioPage(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <main>
            <article>
                <h1>{post.data.title}</h1>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </main>
    )
}