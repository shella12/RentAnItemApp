import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favoriteReducer';
import housesSlice from './house/house';
import authReducer from './auth/authReducer';

const store = configureStore({
  reducer: {
    authReducer,
    housesSlice,
    favorite: favoriteReducer,
  },
});

export default store;
