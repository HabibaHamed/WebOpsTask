import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {posts:[],nextId:1}, //get all posts
  reducers: {
    getPosts(state, action) {
      //console.log("posts reducer",action.payload);
      const arrayPosts = action.payload
      state.posts = arrayPosts; //assign state to the initial posts arrays
      state.isLoading = false;
      state.nextId = arrayPosts[arrayPosts.length -1].id+1;
      console.log("posts reducer",state.posts);
    },
    addPost(state, action) {
      //update nextId
      state.nextId++;
      state.posts = [...state.posts,action.payload];
      console.log(state.posts);
    },
  },
});

export const {getPosts,addPost} = postsSlice.actions;

export default postsSlice.reducer;
