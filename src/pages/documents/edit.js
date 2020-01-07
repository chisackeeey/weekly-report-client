import { useEffect, useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import styled from "styled-components";
import Router from "next/router";
import Layout from "../../components/Layout";
import projectList from "src/constants/ProjectList";

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

const BackButtonContainer = styled.div`
  margin-top: 10px;
`;

const back = () => {
  Router.back();
};

function Edit({ value }) {
  const [projectId, setProjectId] = useState(1);
  const [projectInfo, setProjectInfo] = useState(null);

  useEffect(() => {
    if (value) {
      setProjectId(value);
    }
  }, [value]);

  useEffect(() => {
    if (projectId > 0) {
      projectList.map(({ id, info }) => {
        if (id === projectId) {
          setProjectInfo(info);
        }
      });
      console.log(projectInfo);
    } else {
      Router.push("/");
    }
  }, [projectId]);

  return (
    <Layout>
      {projectInfo === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm>
          <Table striped bordered condensed hover>
            <ItemContainer>
              <tr>
                <td>案件</td>
                <td>{projectInfo.name}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>リリース期限</td>
                <td>{projectInfo.deadline}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>担当役席</td>
                <td>{projectInfo.leader}</td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>メンバー</td>
                <td>{projectInfo.member}</td>
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
                    defaultValue={projectInfo.condition}
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
                    defaultValue={projectInfo.thisWeekPlan}
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
                    defaultValue={projectInfo.thisWeekResult}
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
                    defaultValue={projectInfo.problem}
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
                    defaultValue={projectInfo.nextWeekPlan}
                    rows='10'
                  />
                </td>
              </tr>
            </ItemContainer>
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle='primary'>保存</Button>
          </SubmitButtonContainer>
          <BackButtonContainer>
            <Button bsStyle='link' onClick={back}>
              戻る
            </Button>
          </BackButtonContainer>
        </FlexForm>
      )}
    </Layout>
  );
}

Edit.getInitialProps = ({ query }) => ({ value: query.id });

export default Edit;
