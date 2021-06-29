import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    isHamburgerMenu: false,
  },
  reducers: {
    hamburgerButtonClicked: (state, action) => {
      return {
        ...state,
        isHamburgerMenu: !state.isHamburgerMenu,
      };
    },
  },
});

export const { hamburgerButtonClicked } = headerSlice.actions;

export default headerSlice.reducer;
