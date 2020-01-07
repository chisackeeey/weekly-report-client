import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import Layout from "../../components/Layout";
import projectList from "src/constants/ProjectList";

const edit = e => {
  const id = e.target.value;
  Router.push(`/documents/edit?id=${id}`);
};

function Reference({ date }) {
  return (
    <Layout>
      <p>{date}</p>
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
              <td>{info.name}</td>
              <td>{info.deadline}</td>
              <td>{info.leader}</td>
              <td>{info.member}</td>
              <td>{info.condition}</td>
              <td>{info.thisWeekPlan}</td>
              <td>{info.thisWeekResult}</td>
              <td>{info.problem}</td>
              <td>{info.nextWeekPlan}</td>
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
