import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as BooksAPI from "../../BooksAPI";

export const getBooks = createAsyncThunk("fetchBooks", async () => {
  return BooksAPI.getAll().then((books) => {
    console.log(books);
    return books;
  });
});
export const updateBooks = createAsyncThunk("updateBooks", async (payload) => {
  return BooksAPI.update(payload.book, payload.status).then((books) => {});
});
export const searchBooks = createAsyncThunk(
  "searchBooks",
  async (inputValue) => {
    return BooksAPI.search(inputValue, 100).then((books) => {
      return books;
    });
  }
);
const bookListSlice = createSlice({
  name: "bookListSlice",
  initialState: {
    books: [],
    error: null,
    searchResultBooks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
       state.books = action.payload;
    })
    builder.addCase(getBooks.rejected, (state, action) => {
        state.error = "error";
      })
      builder.addCase(searchBooks.fulfilled, (state, action) => {
        state.searchResultBooks = action.payload;
      })
  }
});
export const {} = bookListSlice.actions;
export default bookListSlice.reducer;
