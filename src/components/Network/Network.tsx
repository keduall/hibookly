import { useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../ui/Reveal';
import ContentSection from '../ui/ContentSection';
import { networkCards, type NetworkCard } from '../../content/homepage';

function NetCard({ card, delay }: { card: NetworkCard; delay: number }) {
  const { t } = useTranslation();
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    e.currentTarget.style.setProperty('--mx', `${x}%`);
    e.currentTarget.style.setProperty('--my', `${y}%`);
  };

  const year =
    card.yearMode === 'fixed' && card.yearText
      ? `${t('network.foundedPrefix')} ${card.yearText}`
      : card.yearMode === 'tbd'
        ? t('network.yearTBD')
        : t('network.yearNew');

  return (
    <Reveal
      as="article"
      delay={delay}
      onMouseMove={onMove}
      className="bg-night-2 border border-white/[0.08] rounded-md p-6 min-h-[220px] flex flex-col gap-6 cursor-default transition-[transform,border-color] duration-600 ease-out-soft hover:-translate-y-1 hover:border-white/[0.16] [background-image:radial-gradient(280px_circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.06),transparent_60%)]"
    >
      <div>
        <div className="tracking-eyebrow uppercase text-night-fg-3 font-medium mb-3 max-md:text-xs">
          {year}
        </div>
        <h4 className="text-lg font-medium m-0 mb-2 text-night-fg-1">
          {t(`network.cards.${card.id}.name`)}
        </h4>
        <div className="font-serif text-sm text-night-fg-1/55">
          {t(`network.cards.${card.id}.city`)}
        </div>
      </div>
      {card.placeholder ? (
        <span className="inline-block self-start font-medium uppercase tracking-[0.18em] py-[3px] px-2 rounded-xs border border-white/[0.16] text-night-fg-3">
          {t('network.placeholderTag')}
        </span>
      ) : card.hasBody ? (
        <p className="leading-[1.55] text-night-fg-1/65 m-0">
          {t(`network.cards.${card.id}.body`)}
        </p>
      ) : null}
    </Reveal>
  );
}

export default function Network() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<'seoul' | 'regional'>('seoul');
  const cards = networkCards[tab];

  return (
    <ContentSection
      id="network"
      tone="dark"
      title={
        <>
          {t('network.titleMain')}
          <span className="font-serif font-normal text-night-fg-1/60">
            {t('network.titleMuted')}
          </span>
        </>
      }
      className="bg-night text-night-fg-1 flex max-md:block items-center"
    >
      <Reveal
        className="flex justify-start max-md:overflow-x-auto max-md:pb-2 mb-12"
        delay={200}
        role="tablist"
      >
        {(['seoul', 'regional'] as const).map((t0) => {
          const active = tab === t0;
          return (
            <button
              key={t0}
              onClick={() => setTab(t0)}
              role="tab"
              aria-selected={active}
              className={`py-[14px] mr-10 -mb-px max-md:shrink-0 max-md:mr-6 text-md font-medium cursor-pointer tracking-[0.005em] border-b transition-[color,border-color] duration-[400ms] ease-out-soft ${
                active
                  ? 'text-night-fg-1 border-night-fg-1'
                  : 'text-night-fg-3 border-transparent'
              }`}
            >
              {t(`network.tabs.${t0}`)}
            </button>
          );
        })}
      </Reveal>

      <div
        key={tab}
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1 max-md:grid-cols-1 gap-4"
      >
        {cards.map((c, i) => (
          <NetCard key={`${tab}-${c.id}`} card={c} delay={i * 80} />
        ))}
      </div>
    </ContentSection>
  );
}
