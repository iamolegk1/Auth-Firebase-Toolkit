import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: null,
  token: null,
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClient(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    deleteClient(state) {
      state.email = "";
      state.id = null;
      state.token = null;
    },
  },
});

const { actions, reducer } = clientSlice;
export default reducer;
const { addClient, deleteClient } = actions;
