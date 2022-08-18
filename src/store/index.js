import { configureStore } from "@reduxjs/toolkit";

import client from "../Slice/ClientSlice";

const store = configureStore({
  reducer: { client },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
