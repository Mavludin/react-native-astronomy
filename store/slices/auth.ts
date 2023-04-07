import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

type UserData = {
  login: string;
  email: string;
};

export type AuthState = {
  isLoggedIn: boolean;
  userData: UserData | null;
};

type PayloadType = {
  userData: UserData;
};

const initialState: AuthState = {
  isLoggedIn: false,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<PayloadType>) => {
      state.isLoggedIn = true;
      state.userData = action.payload.userData;
    },
    signOut: state => {
      state.isLoggedIn = false;
    },
  },
});

export const {signIn, signOut} = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUserData = (state: RootState) => state.auth.userData;

export default authSlice.reducer;
