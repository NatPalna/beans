import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Fact, Page } from "../../types";

type FactsState = Page & {
  isLoading: boolean;
  data: Fact[];
  isError: boolean;
};

const initialState: FactsState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

export const getFacts = createAsyncThunk("facts", async (page: number) => {
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=${page}&pageSize=18`
  );
  return data;
});

export const beansSlice = createSlice({
  name: "facts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFacts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getFacts.fulfilled, (state, { payload }) => {
      state.data = [...state.data, ...payload.items];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getFacts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beansSlice.reducer;
