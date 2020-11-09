import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [], //get all posts
  reducers: {
    getPosts(state, action) {
      state = action.payload; //assign state to the initial posts arrays
    },
    // addPost(state, action) {
    //   const {username, picture,destination,likes,date} = action.payload;
    //   state.push({username:username, picture:picture, destination: destination,likes:likes,date:date});
    // },
  },
});

export const {getPosts} = postsSlice.actions;

export default postsSlice.reducer;