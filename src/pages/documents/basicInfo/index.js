import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import BackButton from "src/components/BackButton";
import Layout from "src/components/Layout";
import basicInfoList from "src/constants/BasicInfoList";

const edit = e => {
  const id = e.target.value;
  Router.push(`/documents/basicInfo/edit?id=${id}`);
};

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
            <th>編集</th>
          </tr>
        </thead>
        {basicInfoList.map(({ basicInfo }) => (
          <tbody key={basicInfo.projectId}>
            <tr>
              <td>{basicInfo.name}</td>
              <td>{basicInfo.deadline}</td>
              <td>{basicInfo.leader}</td>
              <td>{basicInfo.member}</td>
              <td>
                <Button
                  bsStyle='link'
                  value={basicInfo.projectId}
                  onClick={edit}
                >
                  編集
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <BackButton />
    </Layout>
  );
}

export default BasicInfo;
