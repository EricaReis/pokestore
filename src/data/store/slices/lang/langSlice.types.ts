import { type langJSON } from 'shared/lang';

export type LanguageKeyType = 'pt' | 'en';

export interface ILangSlice {
  lang: typeof langJSON;
  currentLangKey: LanguageKeyType;
}

export interface IUseLang extends ILangSlice {
  changeLanguage: (key: LanguageKeyType) => void;
}
