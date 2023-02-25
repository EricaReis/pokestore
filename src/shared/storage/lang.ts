import { type LanguageKeyType } from 'data/store/slices/lang/langSlice.types';

import { localStorageKeys } from 'shared/constants/localStorage.constant';

const langStorage = {
  remove: (): void => {
    localStorage.removeItem(localStorageKeys.lang);
  },
  set: (value: LanguageKeyType): void => {
    localStorage.setItem(localStorageKeys.lang, value);
  },
  get: (): LanguageKeyType =>
    localStorage.getItem(localStorageKeys.lang) as LanguageKeyType,
};

export default langStorage;
