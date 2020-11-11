/*Reducer responsible for user's login and logout actions*/

import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {user:{},isSignedIn:false},
  reducers: {
    logIn(state, action) {
      //console.log(action);
      state.user ={...state.user, ...action.payload}; //assign state to the initial bucketlist array
      //console.log('bucketlist reducer',state);
      state.isSignedIn = true;
      console.log("user reducer: ",state.user,state.isSignedIn);
    },
    logOut(state, action) {
      state.user =[];
      state.isSignedIn = false;
      //console.log('action',action);
      //state.bucketlist={...action.payload}; //new state is new array after adding the item
      //console.log('add bucketlist reducer',state);
    },
  },
});

export const {logIn,logOut} = userSlice.actions;

export default userSlice.reducer;
