import { configureStore } from '@reduxjs/toolkit'
import bookListSlice from "../features/bookList/bookListSlice";

export const store = configureStore({
  reducer: {
    bookSlice: bookListSlice
  },
})