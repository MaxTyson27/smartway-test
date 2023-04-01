import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/urls";

export const fetchRepositories = createAsyncThunk(
  "repositories/fetchRepositoriesStatus",
  async (str) => {
    const { data } = await axios.get(`${API_URL}${str}`);
    return data.items;
  }
);
