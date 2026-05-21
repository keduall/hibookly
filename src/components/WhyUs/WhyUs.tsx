import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContentSection from '../ui/ContentSection';
import Reveal from '../ui/Reveal';

type WhyUsCard = {
  number: string;
  titleKey: string;
  bodyKey: string;
  videoSrc?: string;
};

const cards: WhyUsCard[] = [
  {
    number: '01',
    titleKey: 'whyUs.cards.01.title',
    bodyKey: 'whyUs.cards.01.body',
  },
  {
    number: '02',
    titleKey: 'whyUs.cards.02.title',
    bodyKey: 'whyUs.cards.02.body',
  },
  {
    number: '03',
    titleKey: 'whyUs.cards.03.title',
    bodyKey: 'whyUs.cards.03.body',
  },
];

function getCardClassName(isActive: boolean) {
  const base =
    'group relative flex h-full w-full flex-col overflow-hidden p-8 text-left break-keep outline-none transition-[background-color,color,transform] duration-600 ease-out-soft max-md:min-h-[300px] max-md:p-6';

  if (isActive) {
    return `${base} z-20 bg-ink-1 text-white`;
  }

  return `${base} z-0 bg-white text-ink-1`;
}

function getMediaClassName(index: number) {
  const base =
    'absolute left-0 top-0 h-full w-full object-cover transition-none md:w-[min(620px,52vw)] md:max-w-none';

  if (index === 2) {
    return `${base} md:left-auto md:right-0`;
  }

  if (index === 1) {
    return `${base} md:left-1/2 md:-translate-x-1/2`;
  }

  return base;
}

function WhyUsCardItem({
  card,
  index,
  isActive,
  isSelected,
  hasActiveCard,
  onHover,
  onLeave,
  onSelect,
}: {
  card: WhyUsCard;
  index: number;
  isActive: boolean;
  isSelected: boolean;
  hasActiveCard: boolean;
  onHover: (index: number) => void;
  onLeave: () => void;
  onSelect: (index: number) => void;
}) {
  const { t } = useTranslation();
  const flexGrow = hasActiveCard ? (isActive ? 1.55 : 0.725) : 1;

  return (
    <li
      className="relative h-[430px] min-w-0 basis-0 overflow-visible transition-[flex-grow] duration-600 ease-out-soft max-md:h-auto max-md:basis-auto"
      style={{ flexGrow }}
    >
      <button
        type="button"
        className={getCardClassName(isActive)}
        aria-pressed={isSelected}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={onLeave}
        onFocus={() => onHover(index)}
        onBlur={onLeave}
        onClick={() => onSelect(index)}
      >
        {isActive && card.videoSrc && (
          <video
            className={getMediaClassName(index)}
            src={card.videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}
        {isActive && !card.videoSrc && (
          <img
            className={getMediaClassName(index)}
            src={`/${card.number}.png`}
            alt=""
            aria-hidden="true"
          />
        )}
        <span
          className={`absolute inset-0 transition-opacity duration-600 ease-out-soft ${isActive
            ? 'bg-[linear-gradient(180deg,rgba(0,59,79,0.42),rgba(31,24,18,0.82))] opacity-100'
            : 'bg-transparent opacity-0'
            }`}
          aria-hidden="true"
        />

        <span className="relative z-10 flex h-full flex-col">
          <span
            className={`block text-[68px] font-light leading-none tracking-normal transition-colors duration-600 max-md:text-[56px] ${isActive ? 'text-white' : 'text-ink-1'
              }`}
          >
            {card.number}
          </span>
          <span
            className={`mt-8 h-12 w-px border-l border-dotted transition-colors duration-600 ${isActive ? 'border-white/65' : 'border-ink-5'
              }`}
            aria-hidden="true"
          />
          <span className="mt-auto block">
            <span
              className={`block text-2xl font-semibold leading-[1.25] tracking-normal transition-colors duration-600 max-md:text-[22px] ${isActive ? 'text-white' : 'text-ink-1'
                }`}
            >
              {t(card.titleKey)}
            </span>
            <span
              className={`mt-5 block max-w-[360px] break-keep leading-[1.72] transition-colors duration-600 ${isActive ? 'text-white/82' : 'text-ink-3'
                }`}
            >
              {t(card.bodyKey)}
            </span>
          </span>
        </span>
      </button>
    </li>
  );
}

export default function WhyUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const activeIndex = hoveredIndex ?? selectedIndex;
  const hasActiveCard = activeIndex !== null;

  return (
    <ContentSection
      id="why-us"
      className="relative bg-paper py-[116px] max-md:py-[84px]"
      containerClassName="max-w-[1320px]"
      revealBody={false}
    >
      <Reveal delay={120} className="overflow-visible">
        <ul className="flex gap-0 overflow-visible max-lg:overflow-x-auto max-md:flex-col max-md:overflow-visible">
          {cards.map((card, index) => (
            <WhyUsCardItem
              key={card.number}
              card={card}
              index={index}
              isActive={activeIndex === index}
              isSelected={selectedIndex === index}
              hasActiveCard={hasActiveCard}
              onHover={setHoveredIndex}
              onLeave={() => setHoveredIndex(null)}
              onSelect={setSelectedIndex}
            />
          ))}
        </ul>
      </Reveal>
    </ContentSection>
  );
}
