import { useTranslation } from 'react-i18next';
import ContentSection from '../ui/ContentSection';
import Reveal from '../ui/Reveal';

const bodyKeys = ['first', 'second', 'third'] as const;

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <ContentSection
      id="introduction"
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
            {bodyKeys.map((key, index) => (
              <Reveal
                key={key}
                as="p"
                delay={340 + index * 90}
                className="m-0 break-keep text-[16px] leading-[1.92] text-[#5f5347] max-md:text-[15px] max-md:leading-[1.78]"
              >
                {t(`introduction.body.${key}`)}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={220}
          className="relative z-10 ml-auto w-full max-w-[430px] max-lg:mx-auto max-md:max-w-[320px]"
        >
          <img
            src="/book-globe.png"
            alt="책 위에 놓인 지구본"
            className="block h-auto w-full object-contain"
            loading="lazy"
          />
        </Reveal>
      </div>
    </ContentSection>
  );
}
