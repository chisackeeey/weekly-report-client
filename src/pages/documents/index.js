import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import Layout from "../../components/Layout";

const documentList = [
  {
    name: "2020年1月10日",
    date: "2020-01-10"
  },
  {
    name: "2020年1月17日",
    date: "2020-01-17"
  },
  {
    name: "2020年1月24日",
    date: "2020-01-24"
  }
];

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
        {documentList.map(({ name, date }) => (
          <tbody key={name}>
            <tr>
              <td>
                <Button bsStyle='link' value={date} onClick={reference}>
                  {name}
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
