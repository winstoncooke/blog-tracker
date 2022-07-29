import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: null,
  reducers: {
    setFilter(_state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const updateFilter = (filter) => {
  return (dispatch) => {
    dispatch(setFilter(filter));
  };
};

export default filterSlice.reducer;
