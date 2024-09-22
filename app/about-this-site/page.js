import styles from './page.module.css';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { getPostContent } from '@/utils/getPostContent';
import { getPostMetadata } from "@/utils/getPostMetadata"

import NotFound from '@/components/notFound/NotFound';

export async function generateStaticParams() {
    const posts = getPostMetadata('README.md');
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    const id = params?.slug ? ' | ' + params.slug : '';
    return { title: `Portfolio ${id.replaceAll('_', ' ')}` };
}

export default function AboutThisSite() {
    let post;
    try {
        post = getPostContent("README", "");
    } catch (error) {
        if (error.message === 'PostNotFound') {
            return <NotFound />;
        } else {
            throw error;
        }
    }

    return (
        <div class={styles.container}>
            <article>
                <Markdown>{post.content}</Markdown>
                <div className={styles.repoContainer}>
                    <p>For more detail, visit this site's GitHub repo: </p>
                    <Link href={'https://github.com/maahsnd/technical-writing-portfolio'} target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                            style={{ width: '50px', height: '50px' }}
                            className={styles.githubLogo}
                        />
                    </Link>
                </div>
            </article>
        </div>
    )
}