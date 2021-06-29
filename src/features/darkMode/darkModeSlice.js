import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnable: true,
};

export const darkModeSlice = createSlice({
  name: "dark-mode",
  initialState,
  reducers: {
    darkModeButtonPressed: (state) => {
      return {
        ...state,
        isDarkModeEnable: !state.isDarkModeEnable,
      };
    },
  },
});

export const { darkModeButtonPressed } = darkModeSlice.actions;

export default darkModeSlice.reducer;
