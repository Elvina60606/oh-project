import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modals",
  initialState: {
    isOpen: false,
    modalType: null,
    props: {},
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload?.type || null;
      state.props = action.payload?.props || {};
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
      state.props = {};
    },
    updateModalProps: (state, action) => {
      state.props = { ...state.props, ...action.payload };
    },
  },
});

export const { openModal, closeModal, updateModalProps } = modalSlice.actions;

export default modalSlice.reducer;
