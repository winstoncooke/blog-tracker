import { createSlice } from '@reduxjs/toolkit';
import usersService from '../services/users';
import { setNotification } from './notificationReducer';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers(_state, action) {
      return action.payload;
    },
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = usersSlice.actions;

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const users = await usersService.getAll();
      dispatch(setUsers(users));
    } catch (error) {
      console.log('retrieve users error', error);
      dispatch(setNotification('Unable to retrieve users', 'error'));
    }
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const newUser = await usersService.register(user);
      dispatch(addUser(newUser));
    } catch (error) {
      console.log('registration error', error);
      dispatch(
        setNotification('Registration failed. Please try again.', 'error')
      );
    }
  };
};

export default usersSlice.reducer;
