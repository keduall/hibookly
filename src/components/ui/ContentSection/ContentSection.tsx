import type { ReactNode } from 'react';
import Reveal from '../Reveal';

type ContentSectionProps = {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  revealBody?: boolean;
};

export default function ContentSection({
  id,
  title,
  description,
  children,
  tone = 'light',
  className = '',
  containerClassName = '',
  headerClassName = '',
  bodyClassName = '',
  revealBody = true,
}: ContentSectionProps) {
  const titleId = id ? `${id}-title` : undefined;
  const isDark = tone === 'dark';
  const bodyDelay = title ? (description ? 280 : 220) : 0;

  return (
    <section
      id={id}
      aria-labelledby={title ? titleId : undefined}
      className={`px-gutter py-section-y min-h-[80svh] max-md:min-h-0 max-md:py-[88px] ${className}`.trim()}
    >
      <div className={`w-full max-w-container mx-auto relative ${containerClassName}`.trim()}>
        {title && (
          <header
            className={`mb-14 max-md:mb-9 max-w-container-narrow text-left ${headerClassName}`.trim()}
          >
            <Reveal
              as="h2"
              id={titleId}
              delay={120}
              className={`text-fluid-h2 max-md:text-fluid-mobile-h2 font-medium leading-[1.16] tracking-snug m-0 ${
                isDark ? 'text-night-fg-1' : 'text-ink-1'
              }`}
            >
              {title}
            </Reveal>
            {description && (
              <Reveal
                as="p"
                delay={200}
                className={`mb-0 mt-7 max-w-[560px] leading-[1.7] ${
                  isDark ? 'text-night-fg-2' : 'text-ink-3'
                }`}
              >
                {description}
              </Reveal>
            )}
          </header>
        )}

        {revealBody ? (
          <Reveal delay={bodyDelay} className={bodyClassName}>
            {children}
          </Reveal>
        ) : (
          <div className={bodyClassName}>{children}</div>
        )}
      </div>
    </section>
  );
}
