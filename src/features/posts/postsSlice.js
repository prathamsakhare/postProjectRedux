import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action){
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title, 
            content,
            userId
          }
        }
      }
    },
    postRemove(state, action){
        state.splice(action.payload, 1)
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, postRemove } = postsSlice.actions;
export default postsSlice.reducer;
