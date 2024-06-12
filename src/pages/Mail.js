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
  Input,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
} from "antd";

const { TextArea } = Input;

function Mail() {
  return (
    <>
      <div className="layout-content">
        <Row>
          <Col span={24}>
            <Card title="Edit Sending Mail">
              <Typography.Title level={5}>Subject</Typography.Title>
              <Input placeholder="Title of Mail" />
              <div style={{ marginBottom: "20px" }}></div>
              <Typography.Title level={5}>Content</Typography.Title>
              <TextArea
                placeholder="Thank you so much for sending us the referral, We have received it. For the next steps, please see the links."
                autoSize={{
                  minRows: 2,
                  maxRows: 10,
                }}
              />
              <div style={{ marginBottom: "20px" }}></div>
              <Row justify="end">
                <Col>
                  <Button type="primary">Submit</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Mail;
