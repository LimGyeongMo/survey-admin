import { Radio, Space } from "antd";

function SelectInput({ options = { items: [] } }) {
    return (
        <Space direction="vertical">
            {options.items.map((item) => (
                <Radio key={item}>{item}</Radio>
            ))}
        </Space>
    );
}
export default SelectInput;
