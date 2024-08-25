import { Locale } from 'antd/es/locale';
import dayjs from 'dayjs';
import { ValidateMessages } from 'rc-field-form/lib/interface';
import React, { FC, ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ENUM_KEY_LOCAL_STORAGE, ENUM_LANGUAGE_TYPE } from '../../enum';
import { getStorage, setStorage } from '../../service/storage';
import { AppLanguageContext } from './interface';

import locale_en from 'antd/lib/locale/en_US';
import locale_th from 'antd/lib/locale/th_TH';

import { ConfigProvider } from 'antd';
import dayjs_en from 'dayjs/locale/en';
import dayjs_th from 'dayjs/locale/th';

const Context = React.createContext<AppLanguageContext>({} as AppLanguageContext);

const AppLanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { i18n, t } = useTranslation('form');
  const lang = i18n.language as ENUM_LANGUAGE_TYPE;

  // const languageCookie = Cookies.get('language');
  const languageLocalStorage = getStorage(ENUM_KEY_LOCAL_STORAGE['@test-frontend-language']) as ENUM_LANGUAGE_TYPE;

  useEffect(() => {
    checkLanguage();
    dayjs.locale(days[lang]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageLocalStorage]);

  const antd: { [K in ENUM_LANGUAGE_TYPE]: Locale } = {
    th: locale_th,
    en: locale_en,
  };

  const days: { [K in ENUM_LANGUAGE_TYPE]: ILocale } = {
    th: dayjs_th,
    en: dayjs_en,
  };

  const changeLanguage = (value: ENUM_LANGUAGE_TYPE) => {
    i18n.changeLanguage(value);
    setStorage(ENUM_KEY_LOCAL_STORAGE['@test-frontend-language'], value);
  };

  const checkLanguage = () => {
    if (languageLocalStorage) return;
    setStorage(ENUM_KEY_LOCAL_STORAGE['@test-frontend-language'], ENUM_LANGUAGE_TYPE.en);
    return changeLanguage(ENUM_LANGUAGE_TYPE.en);
  };

  const validateMessages: ValidateMessages = {
    required: `${t('required')}`,
    types: {
      number: `${t('number')}`,
      email: `${t('email')}`,
    },
    whitespace: `${t('whitespace')}`,
  };

  return (
    <Context.Provider value={{ lang, changeLanguage }}>
      <ConfigProvider form={{ validateMessages }} input={{ autoComplete: 'chrome-ignore' }} locale={antd[lang]}>
        {children}
      </ConfigProvider>
    </Context.Provider>
  );
};

export const useAppLanguage = () => React.useContext(Context);
export default AppLanguageProvider;
