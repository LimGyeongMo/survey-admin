import fetcher from "../libs/fetcher";
import { setError, setLoading, setSurvey } from "../stores/survey/surveySlice";

const fetchSurvey = (surveyId) => (dispatch, getState) => {
    setLoading(true);
    fetcher(`/surveys/${surveyId}`)
        .then((data) => {
            dispatch(setSurvey(data));
        })
        .catch((error) => {
            dispatch(setError(error));
        })
        .finally(() => {
            setLoading(false);
        });
};

export default fetchSurvey;
