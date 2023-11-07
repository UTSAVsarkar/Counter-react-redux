import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    counterVal: 0,
  },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal = state.counterVal + Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal = state.counterVal - Number(action.payload);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export default counterStore;
