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
import { useState } from "react";

import {
  Card,
  Col,
  Row,
  Space,
  Table,
} from "antd";
function Home() {
 
const pattient_columns = [
  {
    title: "First Name",
    dataIndex: "Patient_First_name",
    key: "Patient_First_name",
  },
  {
    title: "Last Name",
    dataIndex: "Last_Name",
    key: "Last_Name",
  },
  {
    title: "Email",
    dataIndex: "Patient_email",
    key: "Patient_email",
  },
  {
    title: "Phone Number",
    dataIndex: "Patient_cell_phone",
    key: "Patient_cell_phone",
  }
];

const pattient_data = [
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

const law_columns = [
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

const law_data = [
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

  return (
    <>
      <div className="layout-content">
      <Row>
          <Col span={24}>
            <Card title="Pattient">
              <Table
                columns={pattient_columns}
                dataSource={pattient_data}
              />
            </Card>
          </Col>
        </Row>
        <div style={{marginBottom: "20px"}}></div>
        <Row>
          <Col span={24}>
            <Card title="Law firm">
              <Table
                columns={law_columns}
                dataSource={law_data}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
