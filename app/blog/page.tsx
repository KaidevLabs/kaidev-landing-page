import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8">
      <h1 className="mb-8 font-heading text-[2rem] leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-[2.5rem] md:mb-10 lg:text-[3rem]">
        Blog <span className="text-kaidevTeal">Posts</span>
      </h1>

      <div className="space-y-6">
        {allPostsData.map(({ slug, title, date, description, author }) => (
          <div
            key={slug}
            className="rounded-lg border border-line bg-surface p-6 md:p-8"
          >
            <h2 className="mb-2 font-heading text-xl font-semibold text-ink md:text-2xl">
              <Link
                href={`/blog/${slug}`}
                className="transition-colors hover:text-tealDeep focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:outline-hidden"
              >
                {title}
              </Link>
            </h2>
            <p className="mb-3 text-sm text-ink-muted">
              By {author} on {formatDate(date)}
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
