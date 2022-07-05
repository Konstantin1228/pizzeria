import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit";
  import axios from "axios";
  export const Snacks = createAsyncThunk(
    'pizza/Snacks',
    async () => {
      const {
        data
      } = await axios.get(
        `https://62a12e8b356d093c4c42ef52.mockapi.io/objects/`
      )
      return data
    }
  )

  
  
  const initialState = {
    status: '',
    loading: true
  };
  
  export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
    },
    extraReducers: {
      [searchPizza.pending]: (state) => {
        state.items = []
        state.status = 'loading'
        state.loading = true
      },
      [searchPizza.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'succes'
        state.loading = false
      },
      [searchPizza.rejected]: (state) => {
        state.items = []
        state.status = 'error'
        state.loading = false
      },
      [search.pending]: (state) => {
        state.items = []
        state.status = 'loading'
        state.loading = true
      },
      [search.fulfilled]: (state, action) => {
        state.items = action.payload
        state.status = 'succes'
        state.loading = false
      },
      [search.rejected]: (state) => {
        state.items = []
        state.status = 'error'
        state.loading = false
      }
    }
  });
  
  export const {
    setFilters
  } = searchSlice.actions;
  
  export default searchSlice.reducer;