import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremet: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value < 0) {
        state.value = 0;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, reset, incremet, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
