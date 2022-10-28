import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define an interface for the slice state
export interface CustomTaskListState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: CustomTaskListState = {
    isOpen: true,
};

export const customTaskListSlice = createSlice({
  name: "customTaskList",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    dismiss: (state) => {
        state.isOpen = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen, dismiss } = customTaskListSlice.actions;


export default customTaskListSlice.reducer;
