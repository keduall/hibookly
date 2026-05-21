import { useTranslation } from 'react-i18next';
import { type Lang, buildLangPath } from '../../../i18n';

const SELECTABLE_LANGS = ['ko', 'en'] satisfies readonly Lang[];

function changeLanguage(lang: Lang, current: Lang, i18n: ReturnType<typeof useTranslation>['i18n']) {
  if (lang === current) return;

  const next = buildLangPath(lang);
  window.history.replaceState(null, '', next + window.location.hash);
  i18n.changeLanguage(lang);
}

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = i18n.language as Lang;

  return (
    <div className="lang-switcher" role="radiogroup" aria-label={t('languageSwitcher.ariaLabel')}>
      {SELECTABLE_LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`lang-switcher__option${lang === current ? ' is-active' : ''}`}
          role="radio"
          aria-checked={lang === current}
          onClick={() => changeLanguage(lang, current, i18n)}
        >
          <span className="lang-switcher__label">{t(`languageSwitcher.${lang}`)}</span>
        </button>
      ))}
    </div>
  );
}

export function MobileLanguageSelector() {
  const { t, i18n } = useTranslation();
  const current = i18n.language as Lang;

  return (
    <div className="mobile-lang-selector" role="radiogroup" aria-label={t('languageSwitcher.ariaLabel')}>
      {SELECTABLE_LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`mobile-lang-selector__option${lang === current ? ' is-active' : ''}`}
          role="radio"
          aria-checked={lang === current}
          onClick={() => changeLanguage(lang, current, i18n)}
        >
          {t(`languageSwitcher.${lang}`)}
        </button>
      ))}
    </div>
  );
}
