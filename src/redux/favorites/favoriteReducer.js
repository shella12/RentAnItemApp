import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk('rent-house/favorites', async (userID) => {
  const result = await fetch(`http://localhost:3000/api/v1/users/${userID}/favorite_houses`);
  return result.json();
});

export const postFavorite = createAsyncThunk('rent-house/favorite/Create', async ({ userID, house }) => {
  await fetch(`http://localhost:3000/api/v1/users/${userID}/favorite_houses/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      user_id: userID,
      house_id: house.id,
    }),
  });
  return house;
});

export const deleteFavorite = createAsyncThunk('rent-house/favorite/Delete', async ({ userID, houseID }) => {
  await fetch(`http://localhost:3000/api/v1/users/${userID}/favorite_houses/${houseID}/`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: userID,
      house_id: houseID,
    }),
  });
  return houseID;
});

const favoriteReducer = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled,
        (state, action) => ({ ...state, status: 'success', favorites: [...action.payload] }))
      .addCase(fetchFavorites.pending,
        (state) => ({ ...state, status: 'pending' }))
      .addCase(postFavorite.fulfilled,
        (state, action) => ({ ...state, favorites: [...state.favorites, action.payload] }))
      .addCase(deleteFavorite.fulfilled,
        (state, action) => {
          const newFavorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
          return ({ ...state, favorites: [...newFavorites] });
        });
  },
});

export default favoriteReducer.reducer;
