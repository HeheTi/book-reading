import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'redux/auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import updateLocalStorageMiddleware from 'middleware/updateLocalStorageMiddleware';

const persistAuthConfig = {
  key: 'auth-info',
  storage,
  whitelist: ['user', 'accessToken', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      ignoredActionPaths: ['payload.error'],
    }).concat(updateLocalStorageMiddleware),
});

export const persistor = persistStore(store);
