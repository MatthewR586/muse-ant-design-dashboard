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
    title: "Phone",
    dataIndex: "Patient_cell_phone",
    key: "Patient_cell_phone",
  },
  {
    title: "tier/team",
    dataIndex: "Team",
    key: "Team",
  },{
    title: "law firm",
    dataIndex: "Law_Firm_Name",
    key: "Law_Firm_Name",
  },{
    title: "Date Of Injury",
    dataIndex: "Date_of_injury",
    key: "Date_of_injury",
  },{
    title: "Date Of Birth",
    dataIndex: "Patient_date_of_birth",
    key: "Patient_date_of_birth",
  },{
    title: "Language",
    dataIndex: "Language_Speak",
    key: "Language_Speak",
  },
];

const patient_data = [
  {
    key: "1",
    Patient_First_name: "John",
    Last_Name: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    created_at: "6/11/2024 (12:50 PM)",
    Patient_cell_phone: "+16095420502",
    call_length: 0.834,
    Team: "Gold",
    Language_Speak: "English",
    Date_of_injury: "12/3/2020",
    Patient_date_of_birth: "05/08/1965",
    Law_Firm_Name	: "VB & Assistant",
    Patient_email: "template@gmail.com",
  },
  {
    key: "2",
    Patient_First_name: "Jim",
    Last_Name: "Green",
    age: 42,
    created_at: "6/11/2024 (12:50 PM)",
    address: "London No. 1 Lake Park",
    Patient_cell_phone: "+14844433759",
    call_length: 0.834,
    Team: "Gold",
    Language_Speak: "English",
    Date_of_injury: "12/3/2020",
    Patient_date_of_birth: "05/08/1965",
    Law_Firm_Name	: "VB & Assistant",
    Patient_email: "template@gmail.com",

  },
  {
    key: "3",
    Patient_First_name: "Black",
    Last_Name: "Black",
    age: 32,
    created_at: "6/11/2024 (12:50 PM)",
    address: "Sydney No. 1 Lake Park",
    Patient_cell_phone: "+17029703755",
    call_length: 0.834,
    Team: "Gold",
    Language_Speak: "English",
    Date_of_injury: "12/3/2020",
    Patient_date_of_birth: "05/08/1965",
    Law_Firm_Name	: "VB & Assistant",
    Patient_email: "template@gmail.com",

  },
];

const law_columns = [
  {
    title: "Account Name",
    dataIndex: "Account_Name",
    key: "Account_Name",
  },
  {
    title: "Owner",
    dataIndex: "Account_Owner",
    key: "Account_Owner",
  },
  {
    title: "Fax",
    dataIndex: "Law_Firm_Fax",
    key: "Law_Firm_Fax",
  },
  {
    title: "Cell",
    dataIndex: "Lawfirm_Cell",
    key: "Lawfirm_Cell",
  }
];

const law_data = [
  {
    key: "1",
    Account_Name: "VB & Associates",
    Account_Owner: "John Brown",
    Law_Firm_Fax: "+16095420502",
    Lawfirm_Cell: "+16095420502",
  },
  {
    key: "2",
    Account_Name: "VB & Associates",
    Account_Owner: "Jim Green",
    Law_Firm_Fax: "+14844433759",
    Lawfirm_Cell: "+16095420502",
  },
  {
    key: "3",
    Account_Name: "VB & Associates",
    Account_Owner: "Joe Black",
    Law_Firm_Fax: "+17029703755",
    Lawfirm_Cell: "+16095420502",
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
                dataSource={patient_data}
                scroll={{x: true}}
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
