import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { scrapeProducts } from "../scraper";

interface SearchState {
  query: string;
  results: any[];
  state: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}

const initialState: SearchState = {
  query: '',
  results: [],
  state: 'idle',
  error: null,
};

export const searchProducts = createAsyncThunk(
  'search/search-products',
  async (query: string) => {
    try {
      const results = await scrapeProducts(query);
      console.log(results)
      return results;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.state = 'loading';
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.results = action.payload;
        state.state = 'succeeded';
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.state = 'failed';
      });
  }
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;