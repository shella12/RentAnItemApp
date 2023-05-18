import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('rent-house/favorites', async ({ email, password }) => {
  const result = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: { email, password, password_confirmation: password },
    }),
  });
  await result.json();
  return { email, password };
});

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled,
        (state, action) => ({ ...state, status: 'success', user: { ...action.payload } }))
      .addCase(registerUser.pending,
        (state) => ({ ...state, status: 'pending' }));
    /* .addCase(postFavorite.fulfilled,
        (state, action) => ({ ...state, favorites: [...state.favorites, action.payload] }))
      .addCase(deleteFavorite.fulfilled,
        (state, action) => {
          const newFavorites = state.favorites.filter((favorite) => favorite.id !== action.payload);
          return ({ ...state, favorites: [...newFavorites] });
        }); */
  },
});

export default authReducer.reducer;
