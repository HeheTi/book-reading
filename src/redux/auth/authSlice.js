import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserInfo,
  loginUser,
  logoutUser,
  registarionUser,
} from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  accessToken: '',
  refreshToken: '',
  loading: false,
  error: null,
};

const handlerPending = state => {
  state.error = null;
  state.loading = true;
};

const handlerRejected = (state, { payload }) => {
  state.error = payload;
  state.loading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registarionUser.pending, handlerPending)
      .addCase(registarionUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.loading = false;
      })
      .addCase(registarionUser.rejected, handlerRejected)

      .addCase(loginUser.pending, handlerPending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.loading = false;
      })
      .addCase(loginUser.rejected, handlerRejected)

      .addCase(logoutUser.pending, handlerPending)
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user.name = '';
        state.user.email = '';
        state.accessToken = '';
        state.refreshToken = '';
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state, _) => {
        state.user.name = '';
        state.user.email = '';
        state.accessToken = '';
        state.refreshToken = '';
        state.loading = false;
      })

      .addCase(getCurrentUserInfo.pending, handlerPending)
      .addCase(getCurrentUserInfo.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.loading = false;
      })
      .addCase(getCurrentUserInfo.rejected, handlerRejected);
  },
});

export default authSlice.reducer;
