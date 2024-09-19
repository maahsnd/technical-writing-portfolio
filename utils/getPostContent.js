import fs from "fs";
import matter from "gray-matter";

export function getPostContent(slug) {
    const folder = "portfolio/articles/";
    const file = folder + `${slug}.md`;
    try {
        const content = fs.readFileSync(file, 'utf8');
        const matterResult = matter(content);
        console.log('CONTENT:  ', content)
        return matterResult;
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('PostNotFound');
        } else {
            throw error;
        }
    }
}