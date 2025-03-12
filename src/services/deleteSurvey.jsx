import axios from "axios";
import { mutate } from "swr";

function deleteSurvey(surveyId) {
    axios.delete(`/surveys/${surveyId}`).then((response) => {
        console.log(response);
        alert("설문 삭제 성공");

        mutate("/list");
    });
}
export default deleteSurvey;
