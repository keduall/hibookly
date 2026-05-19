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

export default function About() {
  const { t } = useTranslation();
  return (
    <ContentSection id="about">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px p-px bg-paper">
        {services.map((svc, i) => {
          const ServiceIcon = serviceIcons[svc.num];

          return (
            <Reveal
              key={svc.num}
              className="bg-white p-12 max-md:p-7 min-h-[240px] max-md:min-h-0 flex flex-col justify-between gap-10 transition-[background,transform] duration-600 ease-out-soft"
              delay={i * 100}
            >
              <div>
                <ServiceIcon
                  className="h-14 w-14 flex-none text-bookly-primary/70 max-md:h-11 max-md:w-11"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <div>
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
