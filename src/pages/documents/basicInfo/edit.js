import { useEffect, useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import styled from "styled-components";
import Router from "next/router";
import BackButton from "src/components/BackButton";
import Layout from "src/components/Layout";
import basicInfoList from "src/constants/BasicInfoList";

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
  const [projectId, setProjectId] = useState(1);
  const [basicInfo, setBasicInfo] = useState(null);

  useEffect(() => {
    if (value) {
      setProjectId(Number(value));
    }
  }, [value]);

  useEffect(() => {
    if (projectId > 0) {
      basicInfoList.map(({ basicInfo }) => {
        if (basicInfo.projectId === projectId) {
          setBasicInfo(basicInfo);
        }
      });
    } else {
      Router.push("/documents/basicInfo");
    }
  }, [projectId]);

  return (
    <Layout>
      <h2>基本情報編集</h2>
      {basicInfo === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm>
          <Table striped bordered condensed hover>
            <ItemContainer>
              <tr>
                <td>案件</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='name'
                    name='name'
                    defaultValue={basicInfo.name}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>リリース期限</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='deadline'
                    name='deadline'
                    defaultValue={basicInfo.deadline}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>担当役席</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='leader'
                    name='leader'
                    defaultValue={basicInfo.leader}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>メンバー</td>
                <td>
                  <FormControl
                    componentClass='textarea'
                    id='member'
                    name='member'
                    defaultValue={basicInfo.member}
                  />
                </td>
              </tr>
            </ItemContainer>
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle='primary'>保存</Button>
          </SubmitButtonContainer>
          <BackButton />
        </FlexForm>
      )}
    </Layout>
  );
}

Edit.getInitialProps = ({ query }) => ({ value: query.id });

export default Edit;
