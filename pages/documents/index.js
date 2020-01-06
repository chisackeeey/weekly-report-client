import { Button, Table } from "react-bootstrap";

const documentList = [
  {
    name: "2020年1月10日"
  },
  {
    name: "2020年1月17日"
  },
  {
    name: "2020年1月24日"
  }
];

function Home() {
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css'
      ></link>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>日付</th>
          </tr>
        </thead>
        {documentList.map(({ name }) => (
          <tbody key={name}>
            <tr>
              <td>
                <Button bsStyle='link'>{name}</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default Home;
