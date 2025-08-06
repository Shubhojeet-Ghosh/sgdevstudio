import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfileState } from "../types/UserProfileTypes";

const initialState: UserProfileState = {
  firstName: "",
  lastName: "",
  profilePicture: "",
  isProfileComplete: false,
};

const elysiumChatUserProfileSlice = createSlice({
  name: "elysiumChatUserProfile",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
    setIsProfileComplete: (state, action: PayloadAction<boolean>) => {
      state.isProfileComplete = action.payload;
    },
    resetUserProfile: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.profilePicture = "";
      state.isProfileComplete = false;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setProfilePicture,
  setIsProfileComplete,
  resetUserProfile,
} = elysiumChatUserProfileSlice.actions;

export const elysiumChatUserProfileReducer =
  elysiumChatUserProfileSlice.reducer;
