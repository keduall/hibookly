import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import ContentSection from '../ui/ContentSection';
import { sectionTitles } from '../../content/homepage';

import 'swiper/css';
import 'swiper/css/free-mode';

type ShowcaseCover = {
  title: string;
  file: string;
};

const showcaseCovers: ShowcaseCover[] = [
  { title: '20180507000006', file: '20180507000006.jpg' },
  { title: '9791192641027', file: '9791192641027.jpg' },
  { title: '나를 싫어 하나봐', file: '나를 싫어 하나봐.jpg' },
  { title: '너도 잘 할수 있어', file: '너도 잘 할수 있어.jpg' },
  { title: '너무너무 무서워', file: '너무너무 무서워.jpg' },
  { title: '대교 스마트브레인 스티커 안전', file: '대교 스마트브레인 스티커 안전.jpg' },
  { title: '대교 스마트브레인스티커 숫자', file: '대교 스마트브레인스티커 숫자.jpg' },
  { title: '데못죽', file: '데못죽.jpg' },
  { title: '동으보감', file: '동으보감.jpg' },
  { title: '디자이어미', file: '디자이어미.jpg' },
  { title: '레인보우시티', file: '레인보우시티.jpg' },
  { title: '망종', file: '망종.jpg' },
  { title: '맨날맨날 혼이나', file: '맨날맨날 혼이나.jpg' },
  { title: '반야심경 해설서', file: '반야심경 해설서.jpg' },
  { title: '스마트브레인스티커 건강', file: '스마트브레인스티커 건강.jpg' },
  { title: '시든꽃에 눈물을', file: '시든꽃에 눈물을.jpg' },
  { title: '안녕나의사춘기', file: '안녕나의사춘기.jpg' },
  { title: '암행', file: '암행.jpg' },
  { title: '옆집의 비혼주의자들', file: '옆집의 비혼주의자들.jpg' },
  { title: '우리 아빠가 좋은 11가지 이유', file: '우리 아빠가 좋은 11가지 이유.jpg' },
  { title: '우리 엄마가 좋은 11가지 이유', file: '우리 엄마가 좋은 11가지 이유.jpg' },
  { title: '울면 좀 어때', file: '울면 좀 어때.jpg' },
  { title: '울어봐 빌어도 좋고', file: '울어봐 빌어도 좋고.jpg' },
  { title: '원룸조교님', file: '원룸조교님.jpg' },
  { title: '이유없이', file: '이유없이.jpg' },
  { title: '전지적독자시점', file: '전지적독자시점.jpg' },
  { title: '죽어 마땅한 것들', file: '죽어 마땅한 것들.webp' },
  { title: '카페네버랜드', file: '카페네버랜드.jpg' },
  { title: '한식의탄생', file: '한식의탄생.jpg' },
  { title: '화가 날때도 있지', file: '화가 날때도 있지.jpg' },
  { title: '히든 엔딩을 생성 중입니다', file: '히든 엔딩을 생성 중입니다.webp' },
];

function ShowcaseCoverCard({ title, file }: ShowcaseCover) {
  const { t } = useTranslation();

  return (
    <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden shadow-card-warm bg-white after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:[background:radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_60%),linear-gradient(180deg,transparent_68%,rgba(31,24,18,0.12)_100%)]">
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
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [swiperState, setSwiperState] = useState({ isBeginning: true, isEnd: false });

  const updateSwiperState = (instance: SwiperType) => {
    setSwiperState({
      isBeginning: instance.isBeginning,
      isEnd: instance.isEnd,
    });
  };

  return (
    <ContentSection
      id="showcase"
      title={sectionTitles.showcase}
      className="relative overflow-hidden"
    >
      <Reveal className="flex justify-start gap-2 flex-wrap mb-10" delay={160}>
        <button
          type="button"
          aria-label="Previous exported titles"
          onClick={() => swiper?.slidePrev()}
          disabled={!swiper || swiperState.isBeginning}
          className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-line-strong bg-transparent text-ink-2 transition-[background,color,border-color,opacity] duration-240 ease-out-soft hover:border-ink-3 hover:bg-white/50 disabled:cursor-default disabled:opacity-35 disabled:hover:border-line-strong disabled:hover:bg-transparent max-md:h-10 max-md:w-10"
        >
          <ChevronLeft size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next exported titles"
          onClick={() => swiper?.slideNext()}
          disabled={!swiper || swiperState.isEnd}
          className="inline-flex h-11 w-11 items-center justify-center rounded-pill border border-line-strong bg-transparent text-ink-2 transition-[background,color,border-color,opacity] duration-240 ease-out-soft hover:border-ink-3 hover:bg-white/50 disabled:cursor-default disabled:opacity-35 disabled:hover:border-line-strong disabled:hover:bg-transparent max-md:h-10 max-md:w-10"
        >
          <ChevronRight size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </Reveal>

      <div className="pt-2 pb-6 overflow-x-clip [&_.swiper]:overflow-visible">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          slidesPerView="auto"
          spaceBetween={24}
          freeMode={{ enabled: true, momentum: true }}
          mousewheel={{ forceToAxis: true }}
          slideToClickedSlide
          watchSlidesProgress
          grabCursor
          observer
          observeParents
          onSwiper={(instance) => {
            setSwiper(instance);
            updateSwiperState(instance);
          }}
          onSlideChange={updateSwiperState}
          onReachBeginning={updateSwiperState}
          onReachEnd={updateSwiperState}
          onFromEdge={updateSwiperState}
          aria-label={t('showcase.ariaLabel')}
        >
          {showcaseCovers.map((cover) => (
            <SwiperSlide
              key={cover.file}
              className="!w-[calc((100%_-_84px)_/_4.5)] max-md:!w-[168px]"
            >
              <ShowcaseCoverCard {...cover} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ContentSection>
  );
}
