import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {user:{}},
  reducers: {
    logIn(state, action) {
      //console.log(action);
      state.user ={...state.user, ...action.payload}; //assign state to the initial bucketlist array
      //console.log('bucketlist reducer',state);
      state.isSignedIn = true;
    },
    logOut(state, action) {
      console.log('action',action);
      state.bucketlist={...action.payload}; //new state is new array after adding the item
      //console.log('add bucketlist reducer',state);
    },
  },
});

export const {getBucketlist} = bucketlistSlice.actions;

export default bucketlistSlice.reducer;
