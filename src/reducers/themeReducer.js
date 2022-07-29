import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    setTheme(_state, action) {
      return action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const updateTheme = (theme) => {
  return (dispatch) => {
    dispatch(setTheme(theme));
  };
};

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
