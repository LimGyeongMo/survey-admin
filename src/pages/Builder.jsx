import { Col, Row } from "antd";
import { Input } from "antd";

import OptionSection from "../components/OptionSection";
import Preview from "../components/PreviewSection";
import MainLayout from "../layouts/MainLayout";

function Builder() {
    return (
        <MainLayout selectedKeys={["builder"]}>
            <Row>
                <Col flex="auto">
                    <Input placeholder="설문 제목을 입력해주세요" />
                    <Preview></Preview>
                </Col>
                <Col flex="350px">
                    <OptionSection></OptionSection>
                </Col>
            </Row>
        </MainLayout>
    );
}
export default Builder;
