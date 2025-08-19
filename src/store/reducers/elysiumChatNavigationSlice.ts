import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatNavigationTypes } from "../types/ChatNavigationTypes";

const initialState: ChatNavigationTypes = {
  currentView: "my_chats",
  currentUserInView: "",
};

const elysiumChatNavigationSlice = createSlice({
  name: "elysiumChatNavigation",
  initialState,
  reducers: {
    setCurrentView: (state, action: PayloadAction<string>) => {
      state.currentView = action.payload;
    },
    setCurrentUserInView: (state, action: PayloadAction<string>) => {
      state.currentUserInView = action.payload;
    },

    resetChatNavigation: (state) => {
      state.currentView = "my_chats";
    },
  },
});

export const { setCurrentView, setCurrentUserInView, resetChatNavigation } =
  elysiumChatNavigationSlice.actions;

export const elysiumChatNavigationReducer = elysiumChatNavigationSlice.reducer;
