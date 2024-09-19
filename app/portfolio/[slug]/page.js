import Markdown from "markdown-to-jsx"
import { getPostMetadata } from "@/utils/getPostMetadata"
import fs from "fs";
import matter from "gray-matter";

// 404 Component
function NotFound() {
    return (
        <main>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </main>
    );
}

function getPostContent(slug) {
    const folder = "portfolio/";
    const file = folder + `${slug}.md`;
    try {
        const content = fs.readFileSync(file, 'utf8');
        const matterResult = matter(content);
        return matterResult;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('PostNotFound');
        } else {
            throw error;
        }
    }
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
    let post;
    try {
        post = getPostContent(slug);
    } catch (error) {
        if (error.message === 'PostNotFound') {
            return <NotFound />;
        } else {
            throw error;
        }
    }
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