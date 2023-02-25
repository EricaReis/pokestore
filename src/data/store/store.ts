import { configureStore } from "@reduxjs/toolkit";

import itemReducer from "./slices/item/Item.slice";

import langReducer from "./slices/lang/lang.slice";

const store = configureStore({
  reducer: { itemReducer, langReducer },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;
