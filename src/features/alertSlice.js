import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "instruction",
  initialState: {
    isAxios: false,
  },
  reducers: {
    axiosFailed: (state) => {
      return {
        ...state,
        isAxios: !state.isAxios,
      };
    },
  },
});

export const { axiosFailed } = alertSlice.actions;

export default alertSlice.reducer;
