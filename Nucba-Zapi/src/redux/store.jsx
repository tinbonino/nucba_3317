import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import recommendedReducer from "./recommended/recommendedSlice";
//npm install @reduxjs/toolkit 
//npm install redux-persist
const reducers = combineReducers({
  recommended: recommendedReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
