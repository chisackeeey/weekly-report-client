import { useEffect, useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import styled from "styled-components";
import Router from "next/router";
import useForm from "react-hook-form/dist/react-hook-form";
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

function Edit({ value }) {
  const { register, handleSubmit } = useForm();
  const { report, find, editReport } = useReport();

  const [id, setId] = useState(null);

  useEffect(() => {
    setId(Number(value));
    if (value) {
      find(value);
    }
  }, [value]);

  const save = async data => {
    try {
      await editReport({ id, data });
      Router.push(`/documents/reference?date=${report.reportDate.date}`);
    } catch (e) {
      alert(e.toString());
    }
  };

  return (
    <Layout>
      {report === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm onSubmit={handleSubmit(save)}>
          <h2>報告内容編集</h2>
          <Table striped bordered condensed hover>
            <ItemContainer>
              <tr>
                <td>日付</td>
                <td>{report.reportDate.date}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>案件</td>
                <td>{report.project.name}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>リリース期限</td>
                <td>{report.project.deadline}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>担当役席</td>
                <td>{report.project.leader}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>メンバー</td>
                <td>{report.project.member}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>進捗状況(前週)</td>
                <td>{report.lastWeekCondition}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>進捗状況(今週)</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='thisWeekCondition'
                    name='thisWeekCondition'
                    defaultValue={report.thisWeekCondition}
                    inputRef={register}
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
                    defaultValue={report.thisWeekPlan}
                    inputRef={register}
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
                    defaultValue={report.thisWeekResult}
                    inputRef={register}
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
                    defaultValue={report.problem}
                    inputRef={register}
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
                    defaultValue={report.nextWeekPlan}
                    inputRef={register}
                    rows='10'
                  />
                </td>
              </tr>
            </ItemContainer>
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle='primary' type='submit'>
              保存
            </Button>
          </SubmitButtonContainer>
          <BackButton />
        </FlexForm>
      )}
    </Layout>
  );
}

Edit.getInitialProps = ({ query }) => ({ value: query.id });

export default Edit;
