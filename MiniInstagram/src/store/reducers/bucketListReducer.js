import {createSlice} from '@reduxjs/toolkit';

const bucketlistSlice = createSlice({
  name: 'bucketlist',
  initialState: {bucketlist:[]},
  reducers: {
    getBucketlist(state, action) {
      //console.log(action);
      const newState = [...state.bucketlist, ...action.payload]; //assign state to the initial bucketlist array
      state.bucketlist = [...new Set(newState)]; //remove duplicates
      //console.log('bucketlist reducer',state);
      state.isLoading = false;
    },
    addBucketList(state, action) {
      //console.log('action',action);
      state.bucketlist=[...action.payload]; //new state is new array after adding the item
      //console.log('add bucketlist reducer',state);
    },
    removeBucketlist(state,action){
      state.bucketlist = state.bucketlist.filter(function(value, index, arr){ return value !== action.payload.destination;});
      //console.log("new state:",state.bucketlist);
    }
  },
});

export const {getBucketlist,addBucketList} = bucketlistSlice.actions;

export default bucketlistSlice.reducer;
