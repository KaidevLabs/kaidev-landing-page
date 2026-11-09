import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-24 pb-12">
      <h1 className="mb-8 font-heading text-4xl font-bold">
        Blog <span className="text-kaidevTeal">Posts</span>
      </h1>

      <div className="space-y-8">
        {allPostsData.map(({ slug, title, date, description, author }) => (
          <div key={slug} className="border-b pb-6">
            <h2 className="mb-2 text-2xl font-semibold">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <p className="mb-2 text-sm text-muted-foreground">
              By {author} on {formatDate(date)}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
