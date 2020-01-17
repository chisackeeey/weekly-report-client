import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import styled from "styled-components";
import dayjs from "dayjs";
import _ from "lodash";
import Layout from "src/components/Layout";
import useReport from "src/hook/useReport";

const reference = e => {
  const date = e.target.value;
  Router.push(`/documents/reference?date=${date}`);
};

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const CreateButtonContainer = styled.div`
  align-self: flex-end;
`;

function Home() {
  const { reportList, findList, create } = useReport();

  useEffect(() => {
    findList();
  }, []);

  async function onCreate() {
    try {
      await create();
      Router.push("/documents");
    } catch (e) {
      alert(e.toString());
    }
  }

  return (
    <Layout>
      <FlexForm>
        <CreateButtonContainer>
          <Button bsStyle='link' onClick={onCreate}>
            日付追加
          </Button>
        </CreateButtonContainer>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>日付</th>
            </tr>
          </thead>
          {reportList.map(({ date }) => (
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
      </FlexForm>
    </Layout>
  );
}

export default Home;
