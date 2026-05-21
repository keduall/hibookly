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
  { title: '20180507000006', file: '05-20180507000006.jpg' },
  { title: '9791192641027', file: '06-9791192641027.jpg' },
  { title: '나를 싫어 하나봐', file: '07-na-reul-sireo-hanabwa.jpg' },
  { title: '너도 잘 할수 있어', file: '03-neodo-jal-halsu-isseo.jpg' },
  { title: '너무너무 무서워', file: '08-neomu-neomu-museowo.jpg' },
  { title: '대교 스마트브레인 스티커 안전', file: '09-daekyo-smartbrain-sticker-safety.jpg' },
  { title: '대교 스마트브레인스티커 숫자', file: '10-daekyo-smartbrain-sticker-numbers.jpg' },
  { title: '데못죽', file: '02-de-mot-juk.jpg' },
  { title: '동으보감', file: '11-dongeu-bogam.jpg' },
  { title: '디자이어미', file: '12-desire-me.jpg' },
  { title: '레인보우시티', file: '13-rainbow-city.jpg' },
  { title: '망종', file: '14-mangjong.jpg' },
  { title: '맨날맨날 혼이나', file: '15-maennal-maennal-honina.jpg' },
  { title: '반야심경 해설서', file: '16-banya-simgyeong-haeseolseo.jpg' },
  { title: '스마트브레인스티커 건강', file: '04-smartbrain-sticker-health.jpg' },
  { title: '시든꽃에 눈물을', file: '17-sideun-kkoche-nunmureul.jpg' },
  { title: '안녕나의사춘기', file: '18-annyeong-naui-sachungi.jpg' },
  { title: '암행', file: '19-amhaeng.jpg' },
  { title: '옆집의 비혼주의자들', file: '20-yeopjibui-bihonjuuijadeul.jpg' },
  { title: '우리 아빠가 좋은 11가지 이유', file: '21-uri-appaga-joeun-11gaji-iyu.jpg' },
  { title: '우리 엄마가 좋은 11가지 이유', file: '22-uri-eommaga-joeun-11gaji-iyu.jpg' },
  { title: '울면 좀 어때', file: '23-ulmyeon-jom-eottae.jpg' },
  { title: '울어봐 빌어도 좋고', file: '24-ureobwa-bireodo-joko.jpg' },
  { title: '원룸조교님', file: '25-oneroom-jogyonym.jpg' },
  { title: '이유없이', file: '26-iyu-eopsi.jpg' },
  { title: '전지적독자시점', file: '01-omniscient-reader.jpg' },
  { title: '죽어 마땅한 것들', file: '27-things-that-deserve-to-die.webp' },
  { title: '카페네버랜드', file: '28-cafe-neverland.jpg' },
  { title: '한식의탄생', file: '29-birth-of-korean-food.jpg' },
  { title: '화가 날때도 있지', file: '30-sometimes-i-get-angry.jpg' },
  { title: '히든 엔딩을 생성 중입니다', file: '31-hidden-ending-generating.webp' },
];

const orderedShowcaseCovers = [...showcaseCovers].sort((a, b) => a.file.localeCompare(b.file));

function ShowcaseCoverCard({ title, file }: ShowcaseCover) {
  const { t } = useTranslation();

  return (
    <div className="relative aspect-[2/3] w-full rounded-md overflow-hidden shadow-card-warm bg-white after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:[background:radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.16),transparent_60%),linear-gradient(180deg,transparent_68%,rgba(31,24,18,0.12)_100%)]">
      <img
        className="h-full w-full object-cover"
        src={`/books/export/${file}`}
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
      revealBody={false}
    >
      <Reveal className="flex justify-start gap-2 flex-wrap mb-10" delay={220}>
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

      <Reveal className="pt-2 pb-6 overflow-x-clip [&_.swiper]:overflow-visible" delay={320}>
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
          {orderedShowcaseCovers.map((cover) => (
            <SwiperSlide
              key={cover.file}
              className="!w-[calc((100%_-_96px)_/_5)] max-md:!w-[168px]"
            >
              <ShowcaseCoverCard {...cover} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </ContentSection>
  );
}
