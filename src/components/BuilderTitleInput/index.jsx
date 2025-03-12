import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { setTitle } from "../../stores/survey/surveySlice";

function BuilderTitleInput() {
    const dispatch = useDispatch();
    const survey = useSelector((state) => state.survey.data?.title || "");
    return (
        <div>
            <Input
                placeholder="설문 제목을 입력해주세요"
                value={survey}
                onChange={(e) => {
                    dispatch(setTitle(e.target.value));
                }}
            />
        </div>
    );
}
export default BuilderTitleInput;
