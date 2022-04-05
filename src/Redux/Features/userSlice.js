import { createSlice } from "@reduxjs/toolkit";

let exisitingData = JSON.parse(localStorage.getItem('userData'))
let data = []
if(exisitingData) data = exisitingData

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: data,
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
    },
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = action.payload;
    },
    passwordChanged : (state , action) => {
      state.user = action.payload;
    }
  },
});

export const { signUp, logIn, logOut , passwordChanged } = userSlice.actions;

export const userReduxData = (state) => state.user.user;

export default userSlice.reducer;
