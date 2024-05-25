import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todostate: false,
};

export const todoSilce = createSlice({
  name: "State",
  initialState,
  reducers: {
    changeState: (state) => {
      state.todostate = !state.todostate;
    },
  },
});

export const { changeState } = todoSilce.actions;

export default todoSilce.reducer;
