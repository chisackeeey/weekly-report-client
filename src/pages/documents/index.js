import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Router from "next/router";
import styled from "styled-components";
import dayjs from "dayjs";
import Layout from "src/components/Layout";
import importDateList from "src/constants/DateList";
import _ from "lodash";

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
  const [dateList, setDateList] = useState(importDateList);

  function create() {
    const list = _.cloneDeep(dateList);
    const newDate = dayjs(dateList.reduce((a, b) => (a.id > b.id ? a : b)).date)
      .add(7, "day")
      .format("YYYY-MM-DD");
    list.push({ date: newDate });
    setDateList(list);
  }

  return (
    <Layout>
      <FlexForm>
        <CreateButtonContainer>
          <Button bsStyle='link' onClick={create}>
            日付追加
          </Button>
        </CreateButtonContainer>
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
      </FlexForm>
    </Layout>
  );
}

export default Home;
