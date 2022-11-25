import i18next from 'i18next';

import { pt } from './translations/pt';

const i18n = i18next.createInstance(
  {
    lng: 'pt',
    fallbackLng: 'pt',
    debug: false,
    react: { useSuspense: false },
    resources: {
      pt: {
        translation: pt,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  },
  (error) => {
    if (error) return console.log(error);
  }
);

export default i18n;
