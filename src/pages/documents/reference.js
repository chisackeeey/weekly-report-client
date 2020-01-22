import { useEffect } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import useForm from "react-hook-form/dist/react-hook-form";
import Router from "next/router";
import styled from "styled-components";
import dayjs from "dayjs";
import BackToTopButton from "src/components/BackToTopButton";
import Layout from "src/components/Layout";
import useReport from "src/hook/useReport";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`;

function Reference({ date }) {
  const { reportList, findList, editMemo } = useReport();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    findList(dayjs(date).format("YYYY-MM-DD"));
  }, [date]);

  const onEdit = e => {
    const id = e.target.id;
    Router.push(`/documents/edit?id=${id}`);
  };

  const onSave = async data => {
    try {
      const dataList = [...Array(reportList.length)].map((_, i) => ({
        id: reportList[i].id,
        memo: data[reportList[i].id]
      }));
      editMemo(dataList);
    } catch (e) {
      alert(e.toString());
    }
  };

  return (
    <Layout>
      {reportList === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm onSubmit={handleSubmit(onSave)}>
          <h2>{date}の週次進捗会</h2>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>案件</th>
                <th>リリース期限</th>
                <th>担当役席</th>
                <th>メンバー</th>
                <th>前週の進捗状況</th>
                <th>今週の進捗状況</th>
                <th>今週の予定</th>
                <th>今週の実績</th>
                <th>課題</th>
                <th>来週の予定</th>
                <th>議事メモ</th>
                <th>編集</th>
              </tr>
            </thead>
            {reportList.map(report => (
              <tbody key={report.id}>
                <tr>
                  <td>{report.project.name}</td>
                  <td>{report.project.deadline}</td>
                  <td>{report.project.leader}</td>
                  <td>{report.project.member}</td>
                  <td>{report.lastWeekCondition}</td>
                  <td>{report.thisWeekCondition}</td>
                  <td>{report.thisWeekPlan}</td>
                  <td>{report.thisWeekResult}</td>
                  <td>{report.problem}</td>
                  <td>{report.nextWeekPlan}</td>
                  <td>
                    <FormControl
                      componentClass='textarea'
                      name={report.id}
                      defaultValue={report.memo}
                      inputRef={register}
                    />
                  </td>
                  <td>
                    <Button
                      bsStyle='link'
                      id={report.id}
                      value={date}
                      onClick={onEdit}
                    >
                      編集
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle='primary' type='submit'>
              保存
            </Button>
          </SubmitButtonContainer>
          <BackToTopButton />
        </FlexForm>
      )}
    </Layout>
  );
}

Reference.getInitialProps = ({ query }) => ({ date: query.date });

export default Reference;
