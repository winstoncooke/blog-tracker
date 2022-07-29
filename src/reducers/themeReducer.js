import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme(_state, action) {
      return action.payload;
    },
    getTheme(state) {
      return state.state;
    },
  },
});

export const { setTheme, getTheme } = themeSlice.actions;

export const toggleTheme = (theme) => {
  return (dispatch) => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };
};

export default themeSlice.reducer;
