import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  console.log('start fetch:')
  const result = await fetch('http://localhost:3000/logged_in');
  console.log('start fetch:', result)
  const data = await result.json();
  console.log('start fetch data:', data)
  return data;
});

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    logged_in: false
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
      state.logged_in = true;
      return state
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.logged_in = true;
    }
  }
});

export const updateUser = authReducer.actions.updateUser;
export default authReducer.reducer;
