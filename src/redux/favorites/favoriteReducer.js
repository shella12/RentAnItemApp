import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk('rent-house/favorites', async (userId) => {
  const result = await fetch(`http://localhost:3000/api/v1/users/${userId}/favorite_houses`)
  return result.json()
})

const favoriteReducer = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, 
      (state, action) => {
        return ({...state, favorites: [...action.payload]})}
    )
  }
});

export default favoriteReducer.reducer;
