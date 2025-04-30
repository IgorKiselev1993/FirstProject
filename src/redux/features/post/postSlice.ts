import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Post = {
  id: string;
  title: string;
  status: string;
  description: string;
  image: string;
  createdAt: string;
};

export interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const {addPost} = postSlice.actions;
export default postSlice.reducer;
