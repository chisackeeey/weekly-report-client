import React, { useState } from "react";
import { Button, FormControl, Table } from "react-bootstrap";
import Router from "next/router";
import _ from "lodash";
import BackToTopButton from "src/components/BackToTopButton";
import Layout from "src/components/Layout";
import importBasicInfoList from "src/constants/BasicInfoList";

const edit = e => {
  const id = e.target.value;
  Router.push(`/documents/basicInfo/edit?id=${id}`);
};

function BasicInfo() {
  const [basicInfoList, setBasicInfoList] = useState(importBasicInfoList);

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

  return (
    <Layout>
      <h2>基本情報編集</h2>
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
              <FormControl componentClass='textarea' id='name' name='name' />
            </td>
            <td>
              <FormControl
                componentClass='textarea'
                id='deadline'
                name='deadline'
              />
            </td>
            <td>
              <FormControl
                componentClass='textarea'
                id='leader'
                name='leader'
              />
            </td>
            <td>
              <FormControl
                componentClass='textarea'
                id='member'
                name='member'
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <BackToTopButton />
    </Layout>
  );
}

export default BasicInfo;
