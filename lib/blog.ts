import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { cache } from 'react';
import { z } from 'zod';

const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');

export type PostMetadata = {
  slug: string;
  title: string;
  author: string;
  date: Date;
  description: string;
};

export type PostData = {
  metadata: PostMetadata;
  content: string;
};

const PostFrontmatterSchema = z.object({
  title: z.string(),
  author: z.string(),
  date: z.date(),
  description: z.string(),
});

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
      ...(PostFrontmatterSchema.parse(matterResult.data)),
    };
  });

  // Sort posts by date
  return allPostsData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.mdx$/, ''),
    };
  });
}

export const getPostData = cache(async (slug: string): Promise<PostData> => {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.promises.readFile(fullPath, 'utf8');

  // Use gray-matter to parse the post frontmatter and content
  const matterResult = matter(fileContents);

  return {
    metadata: {
      slug,
      ...(PostFrontmatterSchema.parse(matterResult.data)),
    },
    content: matterResult.content,
  };
});
