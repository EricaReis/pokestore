import { configureStore } from "@reduxjs/toolkit";

import itemReducer from "./slices/item/Item.slice";

const store = configureStore({
  reducer: itemReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
