export function getBestLanguage(): string {
  const lang = navigator.language;

  return lang.split('-')[0];
}

export function getDateLocale(): string {
  const browserPref = getBestLanguage();

  return browserPref === 'es' ? browserPref : 'en';
}
