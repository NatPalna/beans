import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Bean } from "../../types";
import { instance } from "../../axiosInsrance";

type BeanState = {
  isLoading: boolean;
  data: Bean | null;
  isError: boolean;
};

const initialState: BeanState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const getBean = createAsyncThunk("bean", async (id: string) => {
  const { data } = await instance.get(`/Beans/${id}`);
  return data;
});

const beanSlice = createSlice({
  name: "bean",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBean.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getBean.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getBean.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beanSlice.reducer;
