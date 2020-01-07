import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import Layout from "src/components/Layout";
import basicInfoList from "src/constants/BasicInfoList";

function BasicInfo() {
  return (
    <Layout>
      <h2>基本情報編集</h2>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>案件</th>
            <th>リリース期限</th>
            <th>担当役席</th>
            <th>メンバー</th>
          </tr>
        </thead>
        {basicInfoList.map(({ projectId, name, deadline, leader, member }) => (
          <tbody key={projectId}>
            <tr>
              <td>{name}</td>
              <td>{deadline}</td>
              <td>{leader}</td>
              <td>{member}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
}

export default BasicInfo;
