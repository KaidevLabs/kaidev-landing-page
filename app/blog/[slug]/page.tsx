import {
  BookAppointmentButtonMDX,
  CustomComponent,
} from '@/components/mdx-components';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { formatDate } from '@/lib/utils';
import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { notFound } from 'next/navigation';

const components = {
  CustomComponent,
  BookAppointmentButtonMDX,
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return {
    title: postData.metadata.title,
    description: postData.metadata.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let postData;
  try {
    const { slug } = await params;
    postData = await getPostData(slug);
  } catch {
    // If the file doesn't exist, return a 404
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-40 pb-12">
      <h1 className="mb-4 font-heading text-4xl font-bold">
        {postData.metadata.title}
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        By {postData.metadata.author} on {formatDate(postData.metadata.date)}
      </p>
      <article className="prose max-w-none dark:prose-invert">
        <MDXRemote source={postData.content} components={components} />
      </article>
    </div>
  );
}
