import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');

export type PostMetadata = {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
};

export type PostData = {
  metadata: PostMetadata;
  content: string;
};

export function getSortedPostsData(): PostMetadata[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post frontmatter
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as { title: string; author: string; date: string; description: string }),
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post frontmatter and content
  const matterResult = matter(fileContents);

  return {
    metadata: {
      slug,
      ...(matterResult.data as { title: string; author: string; date: string; description: string }),
    },
    content: matterResult.content,
  };
}
