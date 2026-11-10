import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  accent?: boolean;
  className?: string;
};

const SectionHeading = ({
  title,
  description,
  align = 'center',
  accent = false,
  className = '',
}: SectionHeadingProps) => {
  const centered = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        centered ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {accent ? (
        <span
          aria-hidden="true"
          className="mb-6 block h-1 w-12 shrink-0 bg-kaidevTeal"
        />
      ) : null}
      <h2
        className={`max-w-3xl font-heading text-[2rem] leading-[1.15] font-semibold tracking-tight text-balance text-ink sm:text-[2.5rem] lg:text-[3rem] ${
          centered ? 'mx-auto' : ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-ink-muted ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
