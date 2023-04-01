import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/status";
import { fetchRepositories } from "./asyncActions";

const initialState = {
  profiles: [],
  favourites: [],
  status: STATUS.loading,
  searchValue: "",
  fromFavourite: false,
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    toggleFromFavourite(state, action) {
      state.fromFavourite = action.payload;
    },
    resetProfiles(state) {
      state.profiles = [];
    },
    addFavourite(state, action) {
      const findItem = state.profiles.find(
        (item) => item.id === action.payload
      );

      const findItemInFavourites = state.favourites.find(
        (item) => item.id === findItem.id
      );

      if (!findItemInFavourites) {
        state.favourites = [...state.favourites, findItem];
      } else {
        state.favourites = [...state.favourites];
        // Удаление из избранного при повторном нажатии на кнопку добавления
        // state.favourites = state.favourites.filter(
        //   (item) => item.id !== action.payload
        // );
      }
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      state.status = STATUS.loading;
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.profiles = action.payload;
      state.status = STATUS.success;
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.status = STATUS.error;
      state.profiles = [];
    });
  },
});

export const {
  resetProfiles,
  addFavourite,
  setSearchValue,
  toggleFromFavourite,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;
