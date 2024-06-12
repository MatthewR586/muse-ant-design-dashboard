/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { render } from "@testing-library/react";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
  Input,
  Tag,
  Space,
} from "antd";

const call_history_columns = [
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone Number",
    dataIndex: "to",
    key: "to",
  },
  {
    title: "Call Length",
    dataIndex: "call_length",
    key: "call_length",
    render: (call_length) => {
      return <div>{Math.ceil(call_length * 60)}s</div>;
    },
  },

  {
    title: "Details",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>View</a>
      </Space>
    ),
  },
];

const call_history_data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    created_at: "6/11/2024 (12:50 PM)",
    to: "+16095420502",
    call_length: 0.834,
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    created_at: "6/11/2024 (12:50 PM)",
    address: "London No. 1 Lake Park",
    to: "+14844433759",
    call_length: 0.834,
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    created_at: "6/11/2024 (12:50 PM)",
    address: "Sydney No. 1 Lake Park",
    to: "+17029703755",
    call_length: 0.834,
  },
];


const { TextArea } = Input;

function Outcoming() {
  return (
    <>
      <div className="layout-content">
        <Row>
          <Col span={24}>
            <Card title="Outcoming Call history">
              <Table
                columns={call_history_columns}
                dataSource={call_history_data}
              />
            </Card>
          </Col>
        </Row>
       
      </div>
    </>
  );
}

export default Outcoming;
