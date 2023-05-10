import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'http://localhost:3001/api/v1/houses';

// const ADD_HOUSE = 'RentAnItemApp/houseReducer/ADD_HOUSE';
const FETCH_HOUSE = 'RentAnItemApp/houseReducer/FETCH_HOUSE';
// const REMOVE_HOUSE = 'RentAnItemApp/houseReducer/REMOVE_HOUSE';
const initialState = {
  houses: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
export const fetchHouse = createAsyncThunk(FETCH_HOUSE, async () => {
  const response = await fetch(api)
    .then((response) => response.json());
  return response;
});

const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHouse.pending, (state) => ({
      ...state,
      status: 'pending',
    })).addCase(fetchHouse.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      houses: action.payload,
    }));
  },
});

export default housesSlice.reducer;
