import { useDispatch, useSelector } from "react-redux";
import { log } from "three/tsl";

import { setSelectedQuestionId } from "../../stores/selectedQuestionId/selectedQuestionIdSlice";
import {
    addQuestion,
    deleteQuestion,
    moveDownQuestion,
    moveUpQuestion,
} from "../../stores/survey/surveySlice";
import AddButton from "../AddButton";
import Body from "../Body";
import Card from "../Card";

function PreviewSection() {
    const questions = useSelector(
        (state) => state.survey.data?.questions || []
    );
    const selectedQuestionId = useSelector((state) => {
        console.log(
            "state.selectedQuestionId.data: ",
            state.selectedQuestionId.data
        );
        return state.selectedQuestionId.data; // 값을 반환해야 함!
    });
    const dispatch = useDispatch();

    const handleMoveUpQuestion = (index) => {
        if (index === 0) {
            return;
        }
        dispatch(moveUpQuestion(index));
    };

    const handleAddQuestion = (type) => {
        dispatch(addQuestion(type));
    };

    const handleMoveDownQuestion = (index) => {
        if (index === questions.length - 1) {
            return;
        }
        dispatch(moveDownQuestion(index));
    };

    const handleDeleteQuestion = (index) => {
        dispatch(deleteQuestion(index));
    };
    const handleQuestionClick = (index) => {
        dispatch(setSelectedQuestionId(index));
    };

    return (
        <div>
            {questions.map((question, index) => (
                <Card
                    key={index}
                    title={question.title}
                    desc={question.desc}
                    onUpButtonClick={() => handleMoveUpQuestion(index)}
                    onDownButtonClick={() => handleMoveDownQuestion(index)}
                    OnDeleteButtonClick={() => handleDeleteQuestion(index)}
                    onClick={() => handleQuestionClick(index)}
                    isSelected={selectedQuestionId === index}
                >
                    <Body type={question.type} options={question.options} />
                </Card>
            ))}
            <AddButton addQuestion={handleAddQuestion} />
        </div>
    );
}
export default PreviewSection;
