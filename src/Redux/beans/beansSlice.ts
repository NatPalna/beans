import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Bean } from "../../types";
import { instance } from "../../axiosInstance";

type BeansState = {
  isLoading: boolean;
  data: Bean[];
  isError: boolean;
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
};

const initialState: BeansState = {
  isLoading: false,
  data: [],
  isError: false,
  currentPage: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
};

export const getAllBeans = createAsyncThunk("beans", async (page: number) => {
  const { data } = await instance.get(`/Beans?pageIndex=${page}&pageSize=15`);
  return data;
});

const beansSlice = createSlice({
  name: "beans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBeans.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getAllBeans.fulfilled, (state, { payload }) => {
      state.data = [...state.data, ...payload.items];
      state.isLoading = false;
      state.currentPage = payload.currentPage;
      state.pageSize = payload.pageSize;
      state.totalCount = payload.totalCount;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getAllBeans.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beansSlice.reducer;
