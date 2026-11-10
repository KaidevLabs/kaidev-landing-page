import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  accent?: boolean;
  tone?: 'light' | 'dark';
  className?: string;
};

const SectionHeading = ({
  title,
  description,
  align = 'center',
  accent = false,
  tone = 'light',
  className = '',
}: SectionHeadingProps) => {
  const centered = align === 'center';
  const dark = tone === 'dark';

  return (
    <div
      className={`flex flex-col ${
        centered ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {accent ? (
        <span
          aria-hidden="true"
          className={`mb-6 block h-1 w-12 shrink-0 ${
            dark ? 'bg-silentJade' : 'bg-kaidevTeal'
          }`}
        />
      ) : null}
      <h2
        className={`max-w-3xl font-heading text-[2rem] leading-[1.15] font-semibold tracking-tight text-balance sm:text-[2.5rem] lg:text-[3rem] ${
          dark ? 'text-ink-inverse' : 'text-ink'
        } ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed text-pretty ${
            dark ? 'text-ink-inverse/80' : 'text-ink-muted'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
