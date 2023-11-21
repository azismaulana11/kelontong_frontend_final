import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  name: null,
  user: null,
  role: null,
  alamat: null,
  access_token: null,
  email: null,
};

const loginSlicer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      const { isLoggedIn, name, user, role, alamat, access_token, email } = action.payload;
      state.isLoggedIn = isLoggedIn;
      state.name = name;
      state.user = user;
      state.role = role;
      state.alamat = alamat;
      state.access_token = access_token;
      state.email = email;
    },
    resetLoginData: (state) => {
      state.isLoggedIn = false;
      state.name = null;
      state.user = null;
      state.role = null;
      state.alamat = null;
      state.access_token = null;
      state.email = null;
    },
  },
});

export const { setLoginData, resetLoginData } = loginSlicer.actions;

export default loginSlicer.reducer;
