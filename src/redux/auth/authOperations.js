import instanseAxios from 'services/instanseAxios';
import { ENDPOINTS } from 'services/endpoints';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registarionUser = createAsyncThunk(
  'auth/registrationUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instanseAxios.post(
        ENDPOINTS.REGISTER,
        credentials,
      );

      thunkAPI.dispatch(
        loginUser({ email: credentials.email, password: credentials.password }),
      );

      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e?.response?.data?.message ||
          e.message ||
          'Something went wrong, try again later!',
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instanseAxios.post(ENDPOINTS.LOGIN, credentials);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e?.response?.data?.message ||
          e.message ||
          'Something went wrong, try again later!',
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await instanseAxios.post(ENDPOINTS.LOGOUT);
      return;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e?.response?.data?.message ||
          e.message ||
          'Something went wrong, try again later!',
      );
    }
  },
);

export const getCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async (_, thunkAPI) => {
    try {
      const { data } = instanseAxios.get(ENDPOINTS.USER);
      return data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e?.response?.data?.message ||
          e.message ||
          'Something went wrong, try again later!',
      );
    }
  },
);
