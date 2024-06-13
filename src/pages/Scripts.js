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
  Modal
} from "antd";

import { useState } from "react";

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
  const [openDeleteConfirmModal, setOpenDeleteConfirmModal] = useState(true)

  const script_columns = [

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
    {
      title: "Delete",
      render: (_, record) => {
        return <a style={{ color: "#ff4d4f" }} onClick={onDeleteScriptButtonClick}>Delete</a>;
      },
    },
  ];

  const onDeleteScriptButtonClick = (e) => {
    setOpenDeleteConfirmModal(true);
  }

  const handleOk = (e) => {
    setOpenDeleteConfirmModal(false)
  }

  const handleCancel = (e) => {
    setOpenDeleteConfirmModal(false)
  }

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
        <Row justify="end" style={{ marginTop: "20px" }}>
          <Button type="primary" style={{ marginRight: "10px" }}>Add</Button>
        </Row>
        <Modal
          title="Confirm"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you sure?</p>
        </Modal>
      </div>

    </>
  );
}

export default Scripts;
