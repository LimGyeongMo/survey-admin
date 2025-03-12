import axios from "axios";

function postSurvey(survey) {
    return axios
        .post(`/surveys`, { ...survey, createdAt: new Date().getTime() })
        .then((response) => {
            console.log(response);
            alert("설문 등록 성공");
            return response.data;
        });
}

export default postSurvey;
