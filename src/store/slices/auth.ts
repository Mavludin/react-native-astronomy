import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {
  removeDataFromAsyncStorage,
  setDataToAsyncStorage,
} from '../../utils/asyncStorage';

export type UserData = {
  login: string;
  email: string;
};

export type AuthState = {
  isLoggedIn: boolean;
  userData: UserData | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  userData: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserData>) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      setDataToAsyncStorage('userData', state.userData);
    },
    signOut: state => {
      state.isLoggedIn = false;
      removeDataFromAsyncStorage('userData');
    },
  },
});

export const {signIn, signOut} = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUserData = (state: RootState) => state.auth.userData;

export default authSlice.reducer;
