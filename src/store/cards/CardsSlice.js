import { createSlice } from "@reduxjs/toolkit";
import { getCards, postCards, deleteCards, putCards, patchCards} from "./CardsThunk";

const cardsSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
    loading : false,
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder

      // Get Cards
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Post Cards

      .addCase(postCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards.unshift(action.payload);
      })
      .addCase(postCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //delete cards
      .addCase(deleteCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = state.cards.filter(card => card.id !== action.payload);

      })
      .addCase(deleteCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //put cards
      .addCase(putCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(putCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.cards.findIndex(card => card.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = action.payload
        }
      })
      .addCase(putCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      //patch method
      .addCase(patchCards.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(patchCards.fulfilled, (state, action) => {
        state.status = "Succeeded";
        const index = state.cards.findIndex(card => card.id === action.payload.id);
        if (index !== -1) {
          state.cards[index] = {
            ...state.cards[index],
            ...action.payload,
          };
        }
      })
      .addCase(patchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});



export default cardsSlice.reducer;
