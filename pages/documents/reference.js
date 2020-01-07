import { Button, Table } from "react-bootstrap";

const projectList = [
  {
    id: "1",
    name: "総合評定",
    deadline: "2020年3月",
    reader: "黒川淳美",
    member: "竹林",
    condition: "on",
    thisWeekPlan: "色々やる",
    thisWeekResult: "色々やった",
    problem: "",
    nextWeekPlan: "頑張る"
  },
  {
    id: "2",
    name: "キャリアデザインシート",
    deadline: "2020年3月",
    reader: "黒川淳美",
    member: "竹林",
    condition: "on",
    thisWeekPlan: "色々やる",
    thisWeekResult: "色々やった",
    problem: "",
    nextWeekPlan: "頑張る"
  },
  {
    id: "3",
    name: "リスク管理確認ツール",
    deadline: "2020年3月",
    reader: "黒川淳美",
    member: "高橋",
    condition: "on",
    thisWeekPlan: "色々やる",
    thisWeekResult: "色々やった",
    problem: "",
    nextWeekPlan: "頑張る"
  }
];

function Reference({ date }) {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'
      ></link>
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
        {projectList.map(
          ({
            id,
            name,
            deadline,
            reader,
            member,
            condition,
            thisWeekPlan,
            thisWeekResult,
            problem,
            nextWeekPlan
          }) => (
            <tbody key={id}>
              <tr>
                <td>{name}</td>
                <td>{deadline}</td>
                <td>{reader}</td>
                <td>{member}</td>
                <td>{condition}</td>
                <td>{thisWeekPlan}</td>
                <td>{thisWeekResult}</td>
                <td>{problem}</td>
                <td>{nextWeekPlan}</td>
                <td>
                  <Button bsStyle='link'>編集</Button>
                </td>
              </tr>
            </tbody>
          )
        )}
      </Table>
    </>
  );
}

Reference.getInitialProps = ({ query }) => ({ date: query.date });

export default Reference;
