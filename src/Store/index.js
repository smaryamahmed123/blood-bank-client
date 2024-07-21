import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice/AuthSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [], // Blacklist any state you don't want to persist
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
      auth: persistedReducer, // Ensure 'auth' reducer is correctly added
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
  }),
});


const persistor = persistStore(store);

export { store, persistor };
