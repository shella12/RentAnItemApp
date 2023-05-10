import { configureStore } from '@reduxjs/toolkit';
import housesSlice from './house/house';

const store = configureStore({
  reducer: { housesSlice },
});

export default store;
