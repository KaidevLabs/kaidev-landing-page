import { BookAppointmentButton, CustomComponent } from '@/components/mdx-components';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/lib/utils';
import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

const components = {
  CustomComponent,
  BookAppointmentButton,
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Promise<{ params: { slug: string } }>) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return {
    title: postData.metadata.title,
    description: postData.metadata.description,
  };
}

export default async function BlogPost({ params }: Promise<{ params: { slug: string } }>) {
  let postData;
  try {
    const { slug } = await params;
    postData = await getPostData(slug);
  } catch (error) {
    // If the file doesn't exist, return a 404
    notFound();
  }

  return (
    <div className="container mx-auto px-4 pb-12 pt-40 max-w-4xl">
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
