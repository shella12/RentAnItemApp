/* eslint-disable no-underscore-dangle */

import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './favorites/favoriteReducer';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;
