//Action and Reducers
import {createSlice} from '@reduxjs/toolkit';

//Combination of reducer and action
const UserSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      isLoggedIn: false,
      user: {},
    },
  },
  reducers: {
    //All Actions
    saveUser(state, action) {
      state.value = action.payload;
    },
    logoutUser(state) {
      state.value = {
        isLoggedIn: false,
        user: {},
      };
    },
  },
});

//export all actions
export const {saveUser, logoutUser} = UserSlice.actions;
//export reducer
export default UserSlice.reducer;
