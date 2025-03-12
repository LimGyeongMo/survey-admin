import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: null };

export const selectedQuestionIdSlice = createSlice({
    name: "survey",
    initialState,
    reducers: {
        setSelectedQuestionId: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedQuestionId } = selectedQuestionIdSlice.actions;

export default selectedQuestionIdSlice.reducer;
