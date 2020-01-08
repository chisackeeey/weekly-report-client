import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import BackButton from "src/components/BackButton";
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
        {projectList.map(({ basicInfo, weeklyInfo }) => (
          <tbody key={basicInfo.id}>
            <tr>
              <td>{basicInfo.name}</td>
              <td>{basicInfo.deadline}</td>
              <td>{basicInfo.leader}</td>
              <td>{basicInfo.member}</td>
              <td>{weeklyInfo.condition}</td>
              <td>{weeklyInfo.thisWeekPlan}</td>
              <td>{weeklyInfo.thisWeekResult}</td>
              <td>{weeklyInfo.problem}</td>
              <td>{weeklyInfo.nextWeekPlan}</td>
              <td>
                <Button bsStyle='link' value={weeklyInfo.id} onClick={edit}>
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

Reference.getInitialProps = ({ query }) => ({ date: query.date });

export default Reference;
