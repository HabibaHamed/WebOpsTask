/*Reducer responsible for user's login and logout actions*/

import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {user:{},isSignedIn:false},
  reducers: {
    logIn(state, action) {
      state.user ={...state.user, ...action.payload};
      state.isSignedIn = true;
    },
    // logOut(state, action) {
    //   state.user =[];
    //   state.isSignedIn = false;
    // },
  },
});

export const {logIn,logOut} = userSlice.actions;

export default userSlice.reducer;
