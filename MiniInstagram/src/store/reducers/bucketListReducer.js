/*Reducer reponsible for fetching and updating the bucketlist*/

import {createSlice} from '@reduxjs/toolkit';

const bucketlistSlice = createSlice({
  name: 'bucketlist',
  initialState: {bucketlist:[]},
  reducers: {
    getBucketlist(state, action) {
      const newState = [...state.bucketlist, ...action.payload]; //assign state to the initial bucketlist array
      state.bucketlist = [...new Set(newState)]; //remove duplicates
      state.isLoading = false;
      state.fetchSuccessful=true;
    },
    getBucketlistFailed(state,action){
      state.fetchSuccessful=false;
    },
    addBucketList(state, action) {
      state.bucketlist=[...action.payload]; //new state is new array after adding the item
    },
    removeBucketlist(state,action){
      state.bucketlist = state.bucketlist.filter(function(value, index, arr){ return value !== action.payload.destination;});
    }
  },
});

export const {getBucketlist,addBucketList,getBucketlistFailed} = bucketlistSlice.actions;

export default bucketlistSlice.reducer;
