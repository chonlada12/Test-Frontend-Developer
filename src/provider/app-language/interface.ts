import { ENUM_LANGUAGE_TYPE } from '../../enum';

export interface AppLanguageContext {
  lang: ENUM_LANGUAGE_TYPE;
  changeLanguage: (v: ENUM_LANGUAGE_TYPE) => void;
}
