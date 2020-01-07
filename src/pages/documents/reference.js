import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import Layout from "src/components/Layout";
import projectList from "src/constants/ProjectList";

const edit = e => {
  const id = e.target.value;
  Router.push(`/documents/edit?id=${id}`);
};

function Reference({ date }) {
  return (
    <Layout>
      <h2>{date}の週次進捗会</h2>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>案件</th>
            <th>リリース期限</th>
            <th>担当役席</th>
            <th>メンバー</th>
            <th>進捗状況</th>
            <th>今週の予定</th>
            <th>今週の実績</th>
            <th>課題</th>
            <th>来週の予定</th>
            <th>編集</th>
          </tr>
        </thead>
        {projectList.map(({ id, info }) => (
          <tbody key={id}>
            <tr>
              <td>{info.basicInfo.name}</td>
              <td>{info.basicInfo.deadline}</td>
              <td>{info.basicInfo.leader}</td>
              <td>{info.basicInfo.member}</td>
              <td>{info.weeklyInfo.condition}</td>
              <td>{info.weeklyInfo.thisWeekPlan}</td>
              <td>{info.weeklyInfo.thisWeekResult}</td>
              <td>{info.weeklyInfo.problem}</td>
              <td>{info.weeklyInfo.nextWeekPlan}</td>
              <td>
                <Button bsStyle='link' value={id} onClick={edit}>
                  編集
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
}

Reference.getInitialProps = ({ query }) => ({ date: query.date });

export default Reference;
