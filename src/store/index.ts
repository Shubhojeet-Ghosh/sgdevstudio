import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

// Import Reducers
import { settingsReducer } from "./reducers/settingsSlice";
import { elysiumChatUserProfileReducer } from "./reducers/elysiumChatUserProfileSlice";
// Noop storage logic to handle SSR issues
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

// Use localStorage only in the browser; noop storage for SSR
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

// Persist configuration for settings
const settingsPersistConfig = {
  key: "settings",
  storage: storage,
};
const elysiumChatUserProfilePersistConfig = {
  key: "elysiumChatUserProfile",
  storage: storage,
};
// Apply persistReducer to settings
const persistedSettingsReducer = persistReducer(
  settingsPersistConfig,
  settingsReducer
);
const persistedElysiumChatUserProfileReducer = persistReducer(
  elysiumChatUserProfilePersistConfig,
  elysiumChatUserProfileReducer
);
// Configure Redux Store
export const store = configureStore({
  reducer: {
    settings: persistedSettingsReducer, // Persisted settings state
    elysiumChatUserProfile: persistedElysiumChatUserProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for Redux Persist
    }),
});

// Create persistor for Redux Persist
export const persistor = persistStore(store);

// Infer types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed Hooks for Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
