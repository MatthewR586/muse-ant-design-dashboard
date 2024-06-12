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


const script_columns = [
  {
    title: "Date",
    dataIndex: "last_updated",
    key: "last_updated",
    render: (last_updated) => {
      const date = new Date(last_updated);
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} (${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;
      return (<div>{formattedDate}</div>)
    }
  },
  {
    title: "Prompt",
    dataIndex: "prompt",
    key: "prompt",
  },
  {
    title: "Category",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Edit",
    render: (_, record) => {
      return <a>Edit</a>;
    },
  },
];

const script_data = [
  {
    key: "1",
    prompt: "My Prompt",
    last_updated: "2024-05-12T22:52:49.004987+00:00",
    id: "PT-aa8fb0ac-0014-43c0-9268-543522ce7e27",
    name: "My First Prompt",
  },
  {
    key: "2",
    prompt: "My Prompt",
    last_updated: "2024-05-12T22:52:49.004987+00:00",
    id: "PT-aa8fb0ac-0014-43c0-9268-543522ce7e27",
    name: "My First Prompt",
  },
  {
    key: "3",
    prompt: "My Prompt",
    last_updated: "2024-05-12T22:52:49.004987+00:00",
    id: "PT-aa8fb0ac-0014-43c0-9268-543522ce7e27",
    name: "My First Prompt",
  },
];

const { TextArea } = Input;

function Scripts() {
  return (
    <>
      <div className="layout-content">
        <Row>
          <Col span={24}>
            <Card title="Scripts">
              <Table columns={script_columns} dataSource={script_data} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Scripts;
