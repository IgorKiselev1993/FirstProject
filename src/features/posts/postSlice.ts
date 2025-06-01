import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from '../../type.ts';

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
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
      state.posts.forEach(post => {
        if (post.id === action.payload.id) {
          post.title = action.payload.title;
          post.description = action.payload.description;
        }
      });
    },
  },
});

export const {addPost, deletePost, editPost} = postSlice.actions;
