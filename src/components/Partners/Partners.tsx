import { useTranslation } from 'react-i18next';
import { partnerLogos, type LogoItem, type LogoSize } from '../../content/logos';
import { sectionTitles } from '../../content/homepage';
import ContentSection from '../ui/ContentSection';

const logoRows = [
  partnerLogos.filter((_, index) => index % 2 === 0),
  partnerLogos.filter((_, index) => index % 2 === 1),
];

const logoSizeClass: Record<LogoSize, string> = {
  wide: 'max-h-10 max-md:max-h-8',
  midWide: 'max-h-11 max-md:max-h-9',
  mid: 'max-h-12 max-md:max-h-10',
  square: 'max-h-14 max-md:max-h-11',
};

function PartnerDescription({ text }: { text: string }) {
  const parts = text.split(/([^\s,]+<[^>]+>)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) =>
        part.includes('<') && part.includes('>') ? (
          <span key={`${part}-${index}`} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function LogoCard({ logo, isDuplicate }: { logo: LogoItem; isDuplicate?: boolean }) {
  return (
    <div className="partners-marquee__item" aria-hidden={isDuplicate || undefined}>
      <img
        className={`partner-logo-image w-auto max-w-full object-contain ${
          logo.size ? logoSizeClass[logo.size] : 'max-h-[56px] max-md:max-h-[44px]'
        }`}
        src={logo.src}
        alt={isDuplicate ? '' : logo.name}
        loading="lazy"
      />
    </div>
  );
}

function LogoRow({ logos, reverse }: { logos: LogoItem[]; reverse?: boolean }) {
  return (
    <div className="partners-marquee__row">
      <div
        className={`partners-marquee__track ${
          reverse ? 'partners-marquee__track--reverse' : ''
        }`}
      >
        <div className="partners-marquee__group">
          {logos.map((logo) => (
            <LogoCard key={logo.src} logo={logo} />
          ))}
        </div>
        <div className="partners-marquee__group" aria-hidden="true">
          {logos.map((logo) => (
            <LogoCard key={`${logo.src}-duplicate`} logo={logo} isDuplicate />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  const { t } = useTranslation();

  return (
    <ContentSection
      id="partners"
      title={sectionTitles.partners}
      description={<PartnerDescription text={t('partners.description')} />}
      className="!min-h-0 overflow-hidden !py-[116px] max-md:!py-[84px]"
      containerClassName="max-w-[1320px]"
      headerClassName="mx-auto mb-16 max-w-[860px] text-center max-md:mb-10 [&_h2]:text-[44px] [&_h2]:font-medium [&_h2]:leading-[1.28] [&_h2]:tracking-normal [&_h2]:[text-wrap:balance] max-md:[&_h2]:text-[28px] [&_p]:mx-auto [&_p]:mt-6 [&_p]:max-w-[720px] [&_p]:break-keep [&_p]:text-[17px] [&_p]:leading-[1.72]"
    >
      <div
        role="region"
        aria-label={t('partners.ariaLabel')}
        className="partners-marquee max-md:min-h-[220px] overflow-hidden relative flex items-center [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-full flex-col gap-5 max-md:gap-4">
          <LogoRow logos={logoRows[0]} />
          <LogoRow logos={logoRows[1]} reverse />
        </div>
      </div>
    </ContentSection>
  );
}
