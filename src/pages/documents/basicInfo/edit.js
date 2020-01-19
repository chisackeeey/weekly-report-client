import { useEffect, useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import styled from "styled-components";
import useForm from "react-hook-form/dist/react-hook-form";
import Router from "next/router";
import BackButton from "src/components/BackButton";
import Layout from "src/components/Layout";
import useProject from "src/hook/useProject";

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

function Edit({ id }) {
  const { project, find, editInfo } = useProject();

  const [projectId, setProjectId] = useState(id);
  const [basicInfo, setBasicInfo] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setProjectId(Number(id));
    if (projectId) {
      find();
    }
  }, [projectId]);

  useEffect(() => {
    if (project) {
      setBasicInfo(project);
    }
  }, [project]);

  async function save(data) {
    try {
      editInfo(data);
      Router.push("/documents/basicInfo");
    } catch (e) {
      alert(e.toString());
    }
  }

  return (
    <Layout>
      {basicInfo === null ? (
        <p>Loading...</p>
      ) : (
        <FlexForm onSubmit={handleSubmit(save)}>
          <h2>基本情報編集</h2>
          <Table striped bordered condensed hover>
            <ItemContainer>
              <tr>
                <td>案件</td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="name"
                    name="name"
                    defaultValue={basicInfo.name}
                    inputRef={register}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>リリース期限</td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="deadline"
                    name="deadline"
                    defaultValue={basicInfo.deadline}
                    inputRef={register}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>担当役席</td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="leader"
                    name="leader"
                    defaultValue={basicInfo.leader}
                    inputRef={register}
                  />
                </td>
              </tr>
            </ItemContainer>
            <ItemContainer>
              <tr>
                <td>メンバー</td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="member"
                    name="member"
                    defaultValue={basicInfo.member}
                    inputRef={register}
                  />
                </td>
              </tr>
            </ItemContainer>
          </Table>
          <SubmitButtonContainer>
            <Button bsStyle="primary" type="submit">
              保存
            </Button>
          </SubmitButtonContainer>
          <BackButton />
        </FlexForm>
      )}
    </Layout>
  );
}

Edit.getInitialProps = ({ query }) => ({ id: query.id });

export default Edit;
