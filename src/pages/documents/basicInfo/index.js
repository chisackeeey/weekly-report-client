import { useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import useForm from "react-hook-form/dist/react-hook-form";
import styled from "styled-components";
import Router from "next/router";
import _ from "lodash";
import BackToTopButton from "src/components/BackToTopButton";
import Layout from "src/components/Layout";
import importBasicInfoList from "src/constants/BasicInfoList";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const SubmitButtonContainer = styled.div`
  align-self: flex-end;
`;

function BasicInfo() {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [leader, setLeader] = useState("");
  const [member, setMember] = useState("");

  const { register, handleSubmit } = useForm();
  const [basicInfoList, setBasicInfoList] = useState(importBasicInfoList);

  function edit(e) {
    const id = e.target.value;
    Router.push(`/documents/basicInfo/edit?id=${id}`);
  }

  function close(e) {
    const list = _.cloneDeep(basicInfoList);
    list.map(({ basicInfo }) => {
      if (basicInfo.projectId == e.target.id) {
        basicInfo.status = "close";
      }
    });
    setBasicInfoList(list);
  }

  function open(e) {
    const list = _.cloneDeep(basicInfoList);
    list.map(({ basicInfo }) => {
      if (basicInfo.projectId == e.target.id) {
        basicInfo.status = "open";
      }
    });
    setBasicInfoList(list);
  }

  const create = () => {
    const list = _.cloneDeep(basicInfoList);
    const projectId =
      basicInfoList.reduce((a, b) => (a.projectId > b.projectId ? a : b))
        .basicInfo.projectId + 1;
    console.log(projectId);
    list.push({
      basicInfo: {
        projectId: projectId,
        name: name,
        deadline: deadline,
        leader: leader,
        member: member,
        status: "open"
      }
    });
    console.log(list);
    setBasicInfoList(list);
  };

  return (
    <Layout>
      <FlexForm onSubmit={handleSubmit(create)}>
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
                  componentClass='textarea'
                  id='name'
                  name='name'
                  value={name}
                  inputRef={register}
                  onChange={e => setName(e.target.value)}
                />
              </td>
              <td>
                <FormControl
                  componentClass='textarea'
                  id='deadline'
                  name='deadline'
                  value={deadline}
                  inputRef={register}
                  onChange={e => setDeadline(e.target.value)}
                />
              </td>
              <td>
                <FormControl
                  componentClass='textarea'
                  id='leader'
                  name='leader'
                  value={leader}
                  inputRef={register}
                  onChange={e => setLeader(e.target.value)}
                />
              </td>
              <td>
                <FormControl
                  componentClass='textarea'
                  id='member'
                  name='member'
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
            bsStyle='success'
            type='submit'
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
          {basicInfoList.map(({ basicInfo }) => (
            <tbody key={basicInfo.projectId}>
              <tr>
                <td>{basicInfo.name}</td>
                <td>{basicInfo.deadline}</td>
                <td>{basicInfo.leader}</td>
                <td>{basicInfo.member}</td>
                <td>{basicInfo.status}</td>
                <td>
                  <Button
                    bsStyle='link'
                    value={basicInfo.projectId}
                    onClick={edit}
                  >
                    編集
                  </Button>
                </td>
                <td>
                  {basicInfo.status === "open" && (
                    <Button
                      bsStyle='danger'
                      id={basicInfo.projectId}
                      onClick={close}
                    >
                      close
                    </Button>
                  )}
                  {basicInfo.status === "close" && (
                    <Button
                      bsStyle='primary'
                      id={basicInfo.projectId}
                      onClick={open}
                    >
                      open
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <BackToTopButton />
      </FlexForm>
    </Layout>
  );
}

export default BasicInfo;
