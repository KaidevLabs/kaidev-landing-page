import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 pb-12 pt-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 font-heading">
        Blog <span className="text-kaidevTeal">Posts</span>
      </h1>

      <div className="space-y-8">
        {allPostsData.map(({ slug, title, date, description, author }) => (
          <div key={slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-2">
              By {author} on {formatDate(date)}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
