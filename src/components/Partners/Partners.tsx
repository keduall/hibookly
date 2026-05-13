import Reveal from '../ui/Reveal';
import ContentSection from '../ui/ContentSection';

const partnerLogos = [
  { name: 'Hankyoreh N', src: '/partners/hankyoreh-n.png' },
  { name: 'Cite Media', src: '/partners/cite-media.png' },
  { name: 'CITIC', src: '/partners/citic.png' },
  { name: 'KW Books', src: '/partners/kw-books.png' },
  { name: 'Toyo Keizai', src: '/partners/toyo-keizai.png' },
  { name: 'Geobugi Books', src: '/partners/geobugi-books.png' },
  { name: 'Naver Webtoon', src: '/partners/naver-webtoon.png' },
  { name: 'Daekyo', src: '/partners/daekyo.png' },
  { name: 'Mirae N', src: '/partners/mirae-n.png' },
  { name: 'Sangju Publishing', src: '/partners/sangju-publishing.png' },
  { name: 'Shinyoung Media', src: '/partners/shinyoung-media.png' },
  { name: "Toyou's Dream", src: '/partners/toyous-dream.png' },
];

export default function Partners() {
  return (
    <ContentSection>
      <Reveal
        className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:gap-6 max-sm:grid-cols-2"
        delay={80}
      >
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            className="partner-card flex aspect-[2.1/1] items-center justify-center px-8 py-10 max-md:px-5 max-md:py-7"
          >
            <img
              className="partner-logo-image max-h-[64px] max-w-[76%] object-contain"
              src={logo.src}
              alt={logo.name}
              loading="lazy"
            />
          </div>
        ))}
      </Reveal>
    </ContentSection>
  );
}
