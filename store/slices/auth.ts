import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export type AuthState = {
  isLoggedIn: boolean;
  userLogin: string;
};

type PayloadType = {
  userLogin: string;
};

const initialState: AuthState = {
  isLoggedIn: false,
  userLogin: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<PayloadType>) => {
      state.isLoggedIn = true;
      state.userLogin = action.payload.userLogin;
    },
    logOut: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {logIn, logOut} = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUserLogin = (state: RootState) => state.auth.userLogin;

export default authSlice.reducer;
