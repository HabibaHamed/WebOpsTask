/*Reducer responsible for posts' fetching and adding actions*/

import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {posts:[],nextId:1}, //get all posts
  reducers: {
    getPosts(state, action) {
      const arrayPosts = action.payload
      state.posts = arrayPosts; //assign state to the initial posts arrays
      state.isLoading = false;
      state.nextId = arrayPosts[arrayPosts.length -1].id+1;
    },
    addPost(state, action) {
      state.nextId++;
      state.posts = [...state.posts,action.payload];
    },
  },
});

export const {getPosts,addPost} = postsSlice.actions;

export default postsSlice.reducer;
