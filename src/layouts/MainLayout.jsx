import { Layout, Menu } from "antd";
import { useMemo } from "react";
import { Link } from "react-router";
import styled from "styled-components";
const { Header, Content, Sider } = Layout;
function MainLayout({ selectedKeys, children, padding = 45 }) {
    const items = [
        {
            key: "list",
            label: <Link to="/list">설문조사관리</Link>,
        },
    ];

    const contentStyle = useMemo(() => {
        return {
            padding,
        };
    }, []);

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider>
                <div
                    className="logo"
                    style={{
                        height: 32,
                        margin: 16,
                        background: "rgba(255, 255, 255, 0.3)",
                    }}
                />
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    selectedKeys={selectedKeys}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header />
                <Content style={contentStyle}>{children}</Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;
