export type LogoSize = 'wide' | 'midWide' | 'mid' | 'square';

export type LogoItem = {
  name: string;
  src: string;
  size?: LogoSize;
};

export const companyLogos: Array<LogoItem & { size: LogoSize }> = [
  { name: 'Bookly', src: '/companies/bookly.png', size: 'wide' },
  { name: 'Compass Education', src: '/companies/compass-edu.png', size: 'square' },
  { name: 'Fiktech', src: '/companies/fiktech.png', size: 'square' },
  { name: 'Glowin Vina', src: '/companies/glowinvina.png', size: 'wide' },
  { name: 'KCompass', src: '/companies/kcompass.png', size: 'midWide' },
  { name: 'Keduall', src: '/companies/keduall.png', size: 'wide' },
  { name: 'Kibble', src: '/companies/kibble.png', size: 'midWide' },
  { name: 'Vinatree', src: '/companies/vinatree.png', size: 'mid' },
  { name: 'Wisdom Cellar', src: '/companies/wisdomcellar.png', size: 'mid' },
  { name: 'Biblia', src: '/companies/biblia.png', size: 'wide' },
  { name: 'Bookchaka', src: '/companies/bookchaka.png', size: 'square' },
];

export const partnerLogos: LogoItem[] = [
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
