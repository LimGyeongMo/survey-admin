import { DeleteOutlined, DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styled from "styled-components";

function Card({
    title,
    desc,
    children,
    onUpButtonClick,
    onDownButtonClick,
    OnDeleteButtonClick,
    onClick,
    isSelected,
}) {
    return (
        <CardWrapper isSelected={isSelected}>
            <Head onClick={onClick}>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
            </Head>
            <Body onClick={onClick}>{children}</Body>
            <ButtonGroupWrapper>
                <ButtonGroup>
                    <Button
                        type="text"
                        onClick={onUpButtonClick}
                        icon={<UpOutlined />}
                    />
                    <Button
                        type="text"
                        onClick={OnDeleteButtonClick}
                        icon={<DeleteOutlined />}
                    />
                    <Button
                        type="text"
                        onClick={onDownButtonClick}
                        icon={<DownOutlined />}
                    />
                </ButtonGroup>
            </ButtonGroupWrapper>
        </CardWrapper>
    );
}

export default Card;
const ButtonGroupWrapper = styled.div`
    position: absolute;
    left: calc(100%);
    top: 0;
    display: none;
`;

const ButtonGroup = styled.div`
    background: #ffffff;
    margin-left: 10px;
    border: 1px Solid #dddddd;
    border-radius: 5px;
`;

const CardWrapper = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "isSelected",
})`
    border: ${({ isSelected }) =>
        isSelected ? "3px solid rgb(15, 33, 189)" : "1px solid #dddddd"};
    width: 400px;
    margin: 30px auto;
    background: #fff;
    position: relative;

    &:hover ${ButtonGroupWrapper} {
        display: block;
    }
`;
const Head = styled.div`
    border-bottom: 1px solid #dddddd;
    padding: 5px;
`;
const Title = styled.div`
    font-weight: 600;
`;

const Desc = styled.div`
    color: #666666;
    margin-left: 5px;
`;

const Body = styled.div`
    padding: 5px;
`;
