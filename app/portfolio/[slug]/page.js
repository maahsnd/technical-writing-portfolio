import Markdown from "markdown-to-jsx"
import { getPostMetadata } from "@/utils/getPostMetadata"
import { getPostContent } from "@/utils/getPostContent";
import NotFound from "@/components/notFound/NotFound";


export async function generateStaticParams() {
    const posts = getPostMetadata('portfolio/articles/');
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
        <div>
            <article>
                <h1>{post.data.title}</h1>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>

    )
}