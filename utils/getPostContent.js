import fs from "fs";
import matter from "gray-matter";

export function getPostContent(slug, folder) {
    const file = folder ? folder + `${slug}.md` : `${slug}.md`;
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