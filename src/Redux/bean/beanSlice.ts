import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Bean } from "../../types";

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
  const { data } = await axios.get(
    `https://jellybellywikiapi.onrender.com/api/Beans/${id}`
  );
  console.log(data);
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
      state.data = payload;
      state.isLoading = false;
    });
    builder.addCase(getBean.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default beanSlice.reducer;
