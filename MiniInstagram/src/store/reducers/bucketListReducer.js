import {createSlice} from '@reduxjs/toolkit';

const bucketlistSlice = createSlice({
  name: 'bucketlist',
  initialState: {bucketlist:[]},
  reducers: {
    getBucketlist(state, action) {
      //console.log(action);
      state.bucketlist =[...state.bucketlist, ...action.payload]; //assign state to the initial bucketlist array
      //console.log('bucketlist reducer',state);
      state.isLoading = false;
    },
    addBucketList(state, action) {
      console.log('action',action);
      state.bucketlist=[...action.payload]; //new state is new array after adding the item
      //console.log('add bucketlist reducer',state);
    },
  },
});

export const {getBucketlist,addBucketList} = bucketlistSlice.actions;

export default bucketlistSlice.reducer;
