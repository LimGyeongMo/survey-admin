import axios from "axios";

function putSurvey(survey) {
    axios.put(`/surveys/${survey.id}`, survey).then((response) => {
        console.log(response);
    });
}

export default putSurvey;
