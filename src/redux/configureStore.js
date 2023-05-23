import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favoriteReducer';
import housesSlice from './house/house';

const store = configureStore({
  reducer: {
    housesSlice,
    favorite: favoriteReducer,
  },
});

export default store;
