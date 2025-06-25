import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from '../component/types/Post.ts';

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const post = state.posts.find(p => p.id === action.payload.id);
        if (post) {
          post.title = action.payload.title;
          post.description = action.payload.description;
      }
    },
  },
});

export const {addPost, deletePost, editPost} = postSlice.actions;
