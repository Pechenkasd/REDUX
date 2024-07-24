import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk(
  'getCards',
  async (info, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const cards = await response.json();
      dispatch(cardsInfo(cards));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const user = await response.json();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: {
    posts: [],
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    cardsInfo: (state, action) => {
      state.posts = action.payload;
    },
    userInfo: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { cardsInfo, userInfo, setLoading, clearError } = UsersSlice.actions;
export default UsersSlice.reducer;
