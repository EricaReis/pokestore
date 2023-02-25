import { createSlice } from '@reduxjs/toolkit';

import { langJSON } from 'shared/lang';
import langStorage from 'shared/storage/lang';

import { type ILangSlice, type LanguageKeyType } from './langSlice.types';

const initialState: ILangSlice = {
  lang: langJSON,
  currentLangKey: langStorage.get() || 'pt',
};

const slice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.currentLangKey = action.payload as LanguageKeyType;
      langStorage.set(action.payload as LanguageKeyType);
    },
  },
});

export const { changeLang } = slice.actions;

export default slice.reducer;
