import { useTranslation } from 'react-i18next';
import { companyLogos, partnerLogos, type LogoItem, type LogoSize } from '../../content/logos';

const allLogos = [...partnerLogos, ...companyLogos];
const logoRows = [
  allLogos.filter((_, index) => index % 2 === 0),
  allLogos.filter((_, index) => index % 2 === 1),
];

const logoSizeClass: Record<LogoSize, string> = {
  wide: 'max-h-10 max-md:max-h-8',
  midWide: 'max-h-11 max-md:max-h-9',
  mid: 'max-h-12 max-md:max-h-10',
  square: 'max-h-14 max-md:max-h-11',
};

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
    <section
      aria-label={t('partners.ariaLabel')}
      className="partners-marquee h-[50svh] min-h-[260px] max-md:min-h-[220px] overflow-hidden relative flex items-center [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-full flex-col gap-5 max-md:gap-4">
        <LogoRow logos={logoRows[0]} />
        <LogoRow logos={logoRows[1]} reverse />
      </div>
    </section>
  );
}
