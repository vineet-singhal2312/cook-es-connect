import { createSlice, current } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    isHamburgerMenu: false,
  },
  reducers: {
    hamburgerButtonClicked: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;

      return {
        ...state,
        isHamburgerMenu: !state.isHamburgerMenu,
      };

      //   console.log(current(state), action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { hamburgerButtonClicked } = headerSlice.actions;

export default headerSlice.reducer;
