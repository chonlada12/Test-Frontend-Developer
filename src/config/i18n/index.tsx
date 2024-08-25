import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './common/en.json';
import common_th from './common/th.json';

import form_en from './form/en.json';
import form_th from './form/th.json';

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem('@test-frontend-language') || 'en',
  debug: false,
  ns: ['translation', 'form'],
  resources: {
    en: {
      translation: common_en,
      form: form_en,
    },
    th: {
      translation: common_th,
      form: form_th,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
