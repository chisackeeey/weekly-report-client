import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import BackToTopButton from "src/components/BackToTopButton";
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
            <th>案件ステータス</th>
            <th>編集</th>
            <th>ステータス変更</th>
          </tr>
        </thead>
        {basicInfoList.map(({ basicInfo }) => (
          <tbody key={basicInfo.projectId}>
            <tr>
              <td>{basicInfo.name}</td>
              <td>{basicInfo.deadline}</td>
              <td>{basicInfo.leader}</td>
              <td>{basicInfo.member}</td>
              <td>{basicInfo.status}</td>
              <td>
                <Button
                  bsStyle='link'
                  value={basicInfo.projectId}
                  onClick={edit}
                >
                  編集
                </Button>
              </td>
              <td>
                {basicInfo.status === "open" && (
                  <Button bsStyle='danger' onClick={}>
                    close
                  </Button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <BackToTopButton />
    </Layout>
  );
}

export default BasicInfo;
