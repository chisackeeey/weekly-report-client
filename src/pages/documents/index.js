import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import Layout from "src/components/Layout";
import dateList from "src/constants/DateList";

const reference = e => {
  const date = e.target.value;
  Router.push(`/documents/reference?date=${date}`);
};

function Home() {
  return (
    <Layout>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>日付</th>
          </tr>
        </thead>
        {dateList.map(({ date }) => (
          <tbody key={date}>
            <tr>
              <td>
                <Button bsStyle='link' value={date} onClick={reference}>
                  {date}
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Layout>
  );
}

export default Home;
