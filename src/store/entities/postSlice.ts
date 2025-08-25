import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Post} from '../../component/types/Post.ts';

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
      state.posts = state.posts.map(post =>
        post.id === action.payload.id
          ? {
              ...post,
              title: action.payload.title,
              description: action.payload.description,
            }
          : post,
      );
    },
  },
});

export const {addPost, deletePost, editPost} = postSlice.actions;
