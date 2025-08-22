import { CustomComponent } from '@/components/mdx-components';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/lib/utils';
import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

// Define custom components available in MDX
const components = {
  CustomComponent,
  // Add other custom components here
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return {
    title: postData.metadata.title,
    description: postData.metadata.description,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    // If the file doesn't exist, return a 404
    notFound();
  }

  return (
    <div className="container mx-auto px-4 pb-12 pt-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 font-heading">{postData.metadata.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">
        By {postData.metadata.author} on {formatDate(postData.metadata.date)}
      </p>
      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote source={postData.content} components={components} />
      </article>
    </div>
  );
}
