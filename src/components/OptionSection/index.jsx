import { Button, Form, Input, InputNumber, Switch } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setQuestion } from "../../stores/survey/surveySlice";

const { Item } = Form;

const groups = [
    {
        title: "질문 유형",
        fields: [
            {
                label: "질문",
                name: "title",
                rules: [{ required: true }],
                type: "text",
            },
            {
                label: "설명",
                name: "desc",
                rules: [{ required: true }],
                type: "text",
            },
            {
                label: "필수 여부",
                name: "required",
                rules: [],
                type: "switch",
                valuePropName: "checked",
            },
        ],
    },
];

const detailFields = {
    text: [
        {
            label: "placeholder",
            name: "placeholder",
            rules: [{ required: false }],
            type: "text",
        },
        {
            label: "최대 입력 길이",
            name: "max",
            rules: [{ required: false }],
            type: "number",
        },
    ],
    textarea: [
        {
            label: "placeholder",
            name: "placeholder",
            rules: [{ required: false }],
            type: "text",
        },
        {
            label: "최대 입력 길이",
            name: "max",
            rules: [{ required: false }],
            type: "number",
        },
    ],
    select: [
        {
            label: "답변",
            name: "items",
            rules: [{ required: true }],
            type: "text",
        },
        {
            label: "최대 선택 가능 개수",
            name: "max",
            rules: [{ required: false }],
            type: "number",
        },
    ],
};

const getFieldInput = (type) => {
    switch (type) {
        case "text":
            return <Input />;
        case "switch":
            return <Switch />;
        case "number":
            return <InputNumber />;
        default:
            return <Input />;
    }
};
function OptionSection() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const question = useSelector((state) =>
        state.selectedQuestionId.data === null
            ? null
            : state.survey.data?.questions[state.selectedQuestionId.data]
    );
    const selectedQuestionId = useSelector(
        (state) => state.selectedQuestionId.data
    );

    const mergeGroups = question
        ? [
              ...groups,
              {
                  title: "세부 옵션",
                  fields: detailFields[question.type],
              },
          ]
        : [];

    useEffect(() => {
        if (!question) return;
        const type = question.type;
        let detailFieldsValues = {};

        if (type === "text" || type === "textarea") {
            detailFieldsValues = {
                placeholder: question.options.placeholder,
                max: question.options.max ?? null,
            };
        } else if (type === "select") {
            detailFieldsValues = {
                items: question.options.items.join(","),
                max: question.options.max ?? null,
            };
        }

        form.setFieldsValue({
            title: question.title,
            desc: question.desc,
            required: question.required,
            ...detailFieldsValues,
        });
    }, [form, question]);

    return (
        <OptionSectionWrapper>
            <Title>공통 옵션</Title>
            {question === null ? (
                <SubTitle>선택된 문항이 없습니다.</SubTitle>
            ) : (
                <FormWrapper>
                    <Form form={form} name="option-form" layout="vertical">
                        {mergeGroups.map((group, index) => (
                            <Fragment key={index}>
                                <SubTitle>{group.title}</SubTitle>
                                {group.fields.map((field, fieldIndex) => (
                                    <Item
                                        key={fieldIndex}
                                        label={field.label}
                                        name={field.name}
                                        rules={field.rules}
                                    >
                                        {getFieldInput(field.type)}
                                    </Item>
                                ))}
                            </Fragment>
                        ))}

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() => {
                                    const {
                                        title,
                                        desc,
                                        required,
                                        ...options
                                    } = form.getFieldValue();

                                    if (
                                        question.type === "select" &&
                                        typeof options.items === "string"
                                    ) {
                                        options.items = options.items
                                            .split(/\n|,/) // 줄바꿈("\n") 또는 쉼표(",") 기준으로 분리
                                            .map((item) => item.trim()) // 앞뒤 공백 제거
                                            .filter((item) => item !== ""); // 빈 항목 제거
                                    }
                                    const values = {
                                        title: title,
                                        desc: desc,
                                        required: required,
                                        options: options,
                                        type: question.type,
                                    };

                                    console.log("values: ", values);
                                    dispatch(
                                        setQuestion({
                                            index: selectedQuestionId,
                                            data: values,
                                        })
                                    );
                                }}
                            >
                                적용
                            </Button>
                        </Form.Item>
                    </Form>
                </FormWrapper>
            )}
        </OptionSectionWrapper>
    );
}

const OptionSectionWrapper = styled.div`
    height: 100%;
    background: #ffffff;
    border-left: 1px solid #dddddd;
`;

const Title = styled.div`
    font-weight: 500;
    background: #f0f0f0;
    padding: 10px 0;
    border-bottom: 1px solid #dddddd;
    text-align: center;
`;

const FormWrapper = styled.div`
    padding: 20px;
`;
const SubTitle = styled.div`
    font-size: 1.03rem;
    font-weight: 600;
    margin: 10px 0;
`;
export default OptionSection;
