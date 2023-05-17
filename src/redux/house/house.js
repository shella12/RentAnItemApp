import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const api = 'http://localhost:3000/api/v1/houses';

const ADD_HOUSE = 'RentAnItemApp/houseReducer/ADD_HOUSE';
const FETCH_HOUSE = 'RentAnItemApp/houseReducer/FETCH_HOUSE';
const REMOVE_HOUSE = 'RentAnItemApp/houseReducer/REMOVE_HOUSE';
const initialState = {
  houses: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const addHouse = createAsyncThunk(ADD_HOUSE, async (data) => {
  const response = await fetch(api, {
    method: 'POST',
    body: data,
  }).then((response) => response.text());
  return response;
});

export const fetchHouse = createAsyncThunk(FETCH_HOUSE, async () => {
  const response = await fetch(api)
    .then((response) => response.json());
  return response;
});

export const deleteHouse = createAsyncThunk(REMOVE_HOUSE, async (houseID) => {
  await fetch(`http://localhost:3000/api/v1/houses/${houseID}/`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: houseID,
    }),
  });
  return houseID;
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
    })).addCase(addHouse.fulfilled, (state) => ({
      ...state,
      status: 'created',
    })).addCase(addHouse.rejected, (state, action) => ({
      ...state,
      error: action.error.message,
      status: 'failed',
    }))
      .addCase(deleteHouse.fulfilled, (state, action) => {
        const newHouses = state.houses.filter((house) => house.id !== action.payload);
        return ({ ...state, houses: [...newHouses] });
      });
  },
});

export default housesSlice.reducer;
