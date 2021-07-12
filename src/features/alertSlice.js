import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "instruction",
  initialState: {
    isAxios: false,
    isLoading: false,
  },
  reducers: {
    axiosFailed: (state) => {
      return {
        ...state,
        isAxios: !state.isAxios,
      };
    },
    axiosLoad: (state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    },
  },
});

export const { axiosFailed, axiosLoad } = alertSlice.actions;

export default alertSlice.reducer;
