import { Button, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import useSWR from "swr";

import MainLayout from "../layouts/MainLayout";
import fetcher from "../libs/fetcher";

function ListPage() {
    const { data = [], error } = useSWR("/surveys", fetcher);
    const navigation = useNavigate();
    const [page, setPage] = useState(1);
    console.log("data", data);
    const PAGE_SIZE = 20;

    const columns = [
        {
            title: "번호",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "제목",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "생성일",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (createdAt) => {
                const time = new Date(createdAt);
                return `${time.getFullYear()}- ${time.getMonth()}- ${time.getDate()}`;
            },
        },
        {
            title: "액션",
            dataIndex: "id",
            key: "action",
            render: (id) => {
                return (
                    <Button
                        type="primary"
                        onClick={() => {
                            console.log(id, "삭제");
                        }}
                    >
                        삭제
                    </Button>
                );
            },
        },
    ];

    if (error) {
        return <div>에러 발생: {error.message}</div>;
    }

    if (!data) {
        return <div>로딩 중...</div>; // data가 undefined일 때 로딩 표시
    }

    return (
        <MainLayout selectedKeys={["list"]}>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            console.log(record.id);
                            navigation(`/builder/${record.id}`);
                        }, // click row
                    };
                }}
                pagination={{
                    // total: data.length,
                    total: 3,
                    current: page,
                    pageSize: PAGE_SIZE,
                }}
                onChange={(pagination) => {
                    console.log(pagination);
                    setPage(pagination.current);
                }}
                columns={columns}
                dataSource={data.map((item) => ({ ...item, key: item.id }))}
            />
        </MainLayout>
    );
}
export default ListPage;
