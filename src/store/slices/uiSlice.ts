import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiState, ModalType } from '@/types';

const initialState: UiState = {
  isModalOpen: false,
  modalType: null,
  loading: 'idle',
  error: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.isModalOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;