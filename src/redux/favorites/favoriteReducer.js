import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchFavorites = createAsyncThunk('rent-house/favorites', async (userID) => {
  const result = await fetch(`http://localhost:3000/api/v1/users/${userID}/favorite_houses`)
  return result.json()
})

export const postFavorite = createAsyncThunk('rent-house/add_favorite', async ({userID, house}) => {

  console.log(house)
  const result = await fetch(`http://localhost:3000/api/v1/users/${userID}/favorite_houses/`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      "user_id": userID,
      "house_id": house.id
    })
  })
  console.log("post result", result)
  return house
})

const favoriteReducer = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchFavorites.fulfilled, 
      (state, action) => {
        return ({...state, favorites: [...action.payload]})}
    )
    .addCase(postFavorite.fulfilled,
      (state, action) => ({...state, favorites: [...state.favorites, action.payload]})
    )
  }
});

export default favoriteReducer.reducer;
