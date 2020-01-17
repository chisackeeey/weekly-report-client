import { useEffect, useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import styled from "styled-components";
import Router from "next/router";
import BackButton from "src/components/BackButton";
import Layout from "src/components/Layout";
import useReport from "src/hook/useReport";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.tbody`
  margin-top: 10px;
`;

const SubmitButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;

const save = e => {
  const date = e.target.value;
  Router.push(`/documents/reference?date=${date}`);
};

function Edit({ id, date }) {
  const [projectId, setProjectId] = useState(null);
  const [basicInfo, setBasicInfo] = useState(null);
  const [weeklyInfo, setWeeklyInfo] = useState(null);

  const { report, find } = useReport();

  useEffect(() => {
    setProjectId(Number(id));
    if (date) {
      find(date);
    }
  }, [id, date]);

  useEffect(() => {
    if (report) {
      report.info.map(({ basicInfo, weeklyInfo }) => {
        if (weeklyInfo.id === projectId) {
          setBasicInfo(basicInfo);
          setWeeklyInfo(weeklyInfo);
        }
      });
    }
  }, [report]);

  return (
    <Layout>
      {basicInfo === null || weeklyInfo === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm>
          <h2>報告内容編集</h2>
          <Table striped bordered condensed hover>
            <ItemContainer>
              <tr>
                <td>日付</td>
                <td>{report.date}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>案件</td>
                <td>{basicInfo.name}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>リリース期限</td>
                <td>{basicInfo.deadline}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>担当役席</td>
                <td>{basicInfo.leader}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>メンバー</td>
                <td>{basicInfo.member}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>進捗状況</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='condition'
                    name='condition'
                    defaultValue={weeklyInfo.condition}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>今週の予定</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='thisWeekPlan'
                    name='thisWeekPlan'
                    defaultValue={weeklyInfo.thisWeekPlan}
                    rows='10'
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>今週の実績</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='thisWeekResult'
                    name='thisWeekResult'
                    defaultValue={weeklyInfo.thisWeekResult}
                    rows='10'
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>課題</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='problem'
                    name='problem'
                    defaultValue={weeklyInfo.problem}
                    rows='5'
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>来週の予定</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='nextWeekPlan'
                    name='nextWeekPlan'
                    defaultValue={weeklyInfo.nextWeekPlan}
                    rows='10'
                  />
                </td>
              </tr>
            </ItemContainer>
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle='primary' value={weeklyInfo.date} onClick={save}>
              保存
            </Button>
          </SubmitButtonContainer>
          <BackButton />
        </FlexForm>
      )}
    </Layout>
  );
}

Edit.getInitialProps = ({ query }) => ({ id: query.id, date: query.date });

export default Edit;
