import { useTranslation } from 'react-i18next';
import ContentSection from '../ui/ContentSection';

type ShowcaseCover = {
  title: string;
  file: string;
};

const showcaseCovers: ShowcaseCover[] = [
  { title: '20180507000006', file: '20180507000006.jpg' },
  { title: '나를 싫어 하나봐', file: '나를 싫어 하나봐.jpg' },
  { title: '너도 잘 할수 있어', file: '너도 잘 할수 있어.jpg' },
  { title: '너무너무 무서워', file: '너무너무 무서워.jpg' },
  { title: '다운로드', file: '다운로드 (1).jpg' },
  { title: '데못죽', file: '데못죽.jpg' },
  { title: '동으보감', file: '동으보감.jpg' },
  { title: '디자이어미', file: '디자이어미.jpg' },
  { title: '레인보우시티', file: '레인보우시티.jpg' },
  { title: '망종', file: '망종.jpg' },
  { title: '맨날맨날 혼이나', file: '맨날맨날 혼이나.jpg' },
  { title: '시든꽃에 눈물을', file: '시든꽃에 눈물을.jpg' },
  { title: '안녕나의사춘기', file: '안녕나의사춘기.jpg' },
  { title: '암행', file: '암행.jpg' },
  { title: '옆집의 비혼주의자들', file: '옆집의 비혼주의자들.jpg' },
  { title: '울면 좀 어때', file: '울면 좀 어때.jpg' },
  { title: '울어봐 빌어도 좋고', file: '울어봐 빌어도 좋고.jpg' },
  { title: '원룸조교님', file: '원룸조교님.jpg' },
  { title: '이유없이', file: '이유없이.jpg' },
  { title: '전지적독자시점 5부 2', file: '전지적독자시점_5부_2.jpg' },
  { title: '전지적독자시점 5부 2', file: '전지적독자시점_5부_2 (1).jpg' },
  { title: '카페네버랜드', file: '카페네버랜드.jpg' },
  { title: '한식의탄생', file: '한식의탄생.jpg' },
  { title: '화가 날때도 있지', file: '화가 날때도 있지.jpg' },
];

function ShowcaseCoverCard({ title, file }: ShowcaseCover) {
  const { t } = useTranslation();

  return (
    <div className="relative aspect-[2/3] rounded-[6px] overflow-hidden shadow-cover-soft bg-white after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:[background:radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_60%),linear-gradient(180deg,transparent_68%,rgba(31,24,18,0.12)_100%)]">
      <img
        className="h-full w-full object-cover"
        src={`/books/export/${encodeURIComponent(file)}`}
        alt={t('showcase.coverAlt', { title })}
        loading="lazy"
      />
    </div>
  );
}

export default function Showcase() {
  const { t } = useTranslation();

  return (
    <ContentSection
      id="showcase"
      title={
        <>
          {t('showcase.titleLine1')}
          <br />
          {t('showcase.titleLine2')}
          <br />
          {t('showcase.titleLine3')}
        </>
      }
      description={t('showcase.subtitle')}
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-[18px]"
      >
        {showcaseCovers.map((cover) => (
          <ShowcaseCoverCard key={cover.file} {...cover} />
        ))}
      </div>
    </ContentSection>
  );
}
