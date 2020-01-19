import { useState, useEffect } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import useForm from "react-hook-form/dist/react-hook-form";
import styled from "styled-components";
import Router from "next/router";
import _ from "lodash";
import BackToTopButton from "src/components/BackToTopButton";
import Layout from "src/components/Layout";
import useProject from "src/hook/useProject";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButtonContainer = styled.div`
  align-self: flex-end;
`;

function BasicInfo() {
  const { projectList, findList, create, changeStatus } = useProject();

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [leader, setLeader] = useState("");
  const [member, setMember] = useState("");

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    findList();
  }, []);

  function edit(e) {
    const id = e.target.value;
    Router.push(`/documents/basicInfo/edit?id=${id}`);
  }

  function change(e) {
    changeStatus(e.target.id);
  }

  const onCreate = () => {
    create({
      name,
      deadline,
      leader,
      member
    });
  };

  return (
    <Layout>
      {projectList === null ? (
        <p>...Loading</p>
      ) : (
        <FlexForm onSubmit={handleSubmit(onCreate)}>
          <h2>案件登録</h2>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>案件</th>
                <th>リリース期限</th>
                <th>担当役席</th>
                <th>メンバー</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="name"
                    name="name"
                    value={name}
                    inputRef={register}
                    onChange={e => setName(e.target.value)}
                  />
                </td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="deadline"
                    name="deadline"
                    value={deadline}
                    inputRef={register}
                    onChange={e => setDeadline(e.target.value)}
                  />
                </td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="leader"
                    name="leader"
                    value={leader}
                    inputRef={register}
                    onChange={e => setLeader(e.target.value)}
                  />
                </td>
                <td>
                  <FormControl
                    componentClass="textarea"
                    id="member"
                    name="member"
                    value={member}
                    inputRef={register}
                    onChange={e => setMember(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
          <SubmitButtonContainer>
            <Button
              bsStyle="success"
              type="submit"
              disabled={!name || !deadline || !leader || !member}
            >
              登録
            </Button>
          </SubmitButtonContainer>
          <h2>案件一覧</h2>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>案件</th>
                <th>リリース期限</th>
                <th>担当役席</th>
                <th>メンバー</th>
                <th>案件ステータス</th>
                <th>編集</th>
                <th>ステータス変更</th>
              </tr>
            </thead>
            {projectList.map(
              ({ projectId, name, deadline, leader, member, status }) => (
                <tbody key={projectId}>
                  <tr>
                    <td>{name}</td>
                    <td>{deadline}</td>
                    <td>{leader}</td>
                    <td>{member}</td>
                    <td>{status}</td>
                    <td>
                      <Button bsStyle="link" value={projectId} onClick={edit}>
                        編集
                      </Button>
                    </td>
                    <td>
                      {status === "open" && (
                        <Button
                          bsStyle="danger"
                          id={projectId}
                          onClick={change}
                        >
                          close
                        </Button>
                      )}
                      {status === "close" && (
                        <Button
                          bsStyle="primary"
                          id={projectId}
                          onClick={change}
                        >
                          open
                        </Button>
                      )}
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </Table>
          <BackToTopButton />
        </FlexForm>
      )}
    </Layout>
  );
}

export default BasicInfo;
