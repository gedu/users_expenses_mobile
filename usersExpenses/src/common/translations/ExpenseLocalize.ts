import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import es from './es';

const LANGUAGES = {
  es,
  en,
};

i18n.use(initReactI18next).init({
  resources: LANGUAGES,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  defaultNS: 'common',
  compatibilityJSON: 'v3',
});

export default i18n;
