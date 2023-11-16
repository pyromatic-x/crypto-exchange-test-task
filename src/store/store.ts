import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import exchangeSlice from "./reducers/exchangeSlice";
import { api } from "./services/changeNow";

export const store = configureStore({
  reducer: {
    exchange: exchangeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
