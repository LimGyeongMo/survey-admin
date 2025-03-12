import { configureStore } from "@reduxjs/toolkit";

import thunk from "./middleware/thunk";
import setSelectedQuestionReducer from "./selectedQuestionId/selectedQuestionIdSlice";
import surveyReducer from "./survey/surveySlice"; // default export로 가져옴

export default configureStore({
    reducer: {
        survey: surveyReducer,
        selectedQuestionId: setSelectedQuestionReducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
