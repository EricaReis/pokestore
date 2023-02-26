import { createSlice } from '@reduxjs/toolkit';

const initialState: unknown = {
  item: {},
};

const slice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setFavoriteItem: () => {},
  },
});

export const { setFavoriteItem } = slice.actions;

export default slice.reducer;
