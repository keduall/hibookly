import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlurText from '../ui/BlurText';

const READY_TIMEOUT_MS = 1500;

export default function Hero() {
  const { t, i18n } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) {
      setReady(true);
      return;
    }

    const onReady = () => setReady(true);
    video?.addEventListener('loadeddata', onReady, { once: true });
    const safety = window.setTimeout(() => setReady(true), READY_TIMEOUT_MS);

    return () => {
      video?.removeEventListener('loadeddata', onReady);
      window.clearTimeout(safety);
    };
  }, []);

  const revealBase =
    'transition-[opacity,filter,transform] duration-700 ease-out-soft motion-reduce:transition-none';
  const revealState = isReady
    ? 'opacity-100 blur-0 translate-y-0'
    : 'opacity-0 blur-[10px] translate-y-5';

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-gutter"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full z-0 object-cover object-center pointer-events-none bg-[#0a0604] [transform:translateZ(0)] [will-change:transform]"
        src="/bg.mp4"
        poster="/assets/bg-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[1] [background-size:3px_3px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none [transform:translateZ(0)] [will-change:transform] [background:linear-gradient(in_srgb_90deg,rgba(7,10,12,0.52)_0%,rgba(7,10,12,0.34)_42%,rgba(7,10,12,0.08)_100%),linear-gradient(in_srgb_180deg,rgba(7,10,12,0.12)_0%,rgba(7,10,12,0.02)_44%,rgba(7,10,12,0.3)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-[3] w-full max-w-[960px] mx-auto text-center">
        <div
          className={`${revealBase} ${revealState} delay-[400ms] mb-7 font-medium uppercase tracking-widest text-white/[0.74] [text-shadow:0_2px_12px_rgba(0,0,0,0.5)] max-md:text-xs`}
        >
          {t('hero.eyebrow')}
        </div>

        <h1 className="text-fluid-display max-md:text-fluid-hero-mobile font-medium text-white m-0">
          <BlurText key={i18n.language} text={t('hero.headline')} start={isReady} />
        </h1>
      </div>
    </section>
  );
}
