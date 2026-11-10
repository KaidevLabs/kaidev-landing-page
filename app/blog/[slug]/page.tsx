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
    <div className="container mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8">
      <div className="max-w-[68ch]">
        <h1 className="mb-4 font-heading text-[2rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-[2.5rem] lg:text-[3rem]">
          {postData.metadata.title}
        </h1>
        <p className="text-sm text-ink-muted">
          By {postData.metadata.author} on {formatDate(postData.metadata.date)}
        </p>
        <article className="prose prose-lg mt-8 max-w-none border-t border-line pt-10 prose-headings:font-heading prose-headings:text-ink prose-p:text-ink-muted prose-strong:text-ink [&_p_a]:text-tealDeep">
          <MDXRemote source={postData.content} components={components} />
        </article>
      </div>
    </div>
  );
}
