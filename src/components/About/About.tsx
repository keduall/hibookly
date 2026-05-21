import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, Globe, Handshake, Languages, type LucideIcon } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ContentSection from '../ui/ContentSection';
import { services } from '../../content/homepage';

const serviceIcons: Record<string, LucideIcon> = {
  '01': Globe,
  '02': Compass,
  '03': Languages,
  '04': Handshake,
};

const introductionBodyKeys = ['first', 'second', 'third'] as const;

export default function About() {
  const { t } = useTranslation();
  return (
    <ContentSection
      id="about"
      className="relative overflow-hidden bg-white py-[104px] max-md:py-[76px]"
      containerClassName="max-w-[1360px]"
      revealBody={false}
    >
      <div className="grid items-center gap-16 grid-cols-[minmax(0,1.28fr)_minmax(360px,0.72fr)] max-xl:grid-cols-[minmax(0,1.18fr)_minmax(340px,0.82fr)] max-lg:grid-cols-1 max-lg:gap-12">
        <div className="relative z-10 max-w-[760px] max-lg:max-w-none">
          <Reveal
            as="p"
            delay={80}
            className="mb-9 text-sm font-semibold uppercase tracking-[0.28em] text-bookly-primary max-md:mb-6 max-md:text-[12px]"
          >
            {t('introduction.eyebrow')}
          </Reveal>

          <Reveal
            as="h2"
            delay={140}
            className="m-0 max-w-[740px] break-keep text-[46px] font-medium leading-[1.46] tracking-normal text-ink-1 [text-wrap:balance] max-xl:text-[40px] max-lg:max-w-[720px] max-md:text-[28px] max-md:leading-[1.42]"
          >
            {t('introduction.headline')}
          </Reveal>

          <div className="mt-12 max-w-[720px] space-y-9 max-md:mt-8 max-md:space-y-6">
            {introductionBodyKeys.map((key, index) => (
              <Reveal
                key={key}
                as="p"
                delay={340 + index * 90}
                className="m-0 break-keep text-[16px] leading-[1.92] text-[#5f5347] max-md:leading-[1.78]"
              >
                {t(`introduction.body.${key}`)}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={220}
          className="introduction-visual relative z-10 ml-auto w-full max-w-[430px] max-lg:mx-auto max-md:max-w-[320px]"
        >
          <img
            src="/book-globe.png"
            alt="책 위에 놓인 지구본"
            className="block h-auto w-full object-contain"
            loading="lazy"
          />
          <div className="introduction-frame" aria-hidden="true">
            <span className="introduction-frame__line introduction-frame__line--top" />
            <span className="introduction-frame__line introduction-frame__line--right" />
            <span className="introduction-frame__line introduction-frame__line--bottom" />
            <span className="introduction-frame__line introduction-frame__line--left" />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-6 max-md:mt-14 max-md:grid-cols-1 max-md:gap-4">
        {services.map((svc, i) => {
          const ServiceIcon = serviceIcons[svc.num];
          const cardDelay = 520 + i * 120;
          const cardStyle = { '--about-card-delay': `${cardDelay}ms` } as CSSProperties;

          return (
            <Reveal
              as="article"
              key={svc.num}
              className="about-service-card bg-paper/35 p-12 max-md:p-7 min-h-[240px] max-md:min-h-0 flex flex-col justify-between gap-10 break-keep"
              delay={cardDelay}
              style={cardStyle}
            >
              <div className="about-service-card__icon">
                <ServiceIcon
                  className="h-14 w-14 flex-none text-bookly-primary/70 max-md:h-11 max-md:w-11"
                  strokeWidth={1}
                  aria-hidden="true"
                />
              </div>
              <div className="about-service-card__content">
                <h3 className="font-medium tracking-snug m-0 mb-3 text-ink-1 text-2xl max-md:text-xl">
                  {t(svc.titleKey)}
                </h3>
                <p className="leading-[1.6] text-ink-3 m-0 max-w-[420px]">{t(svc.bodyKey)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </ContentSection>
  );
}
