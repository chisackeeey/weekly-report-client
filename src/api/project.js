import basicInfo from "src/constants/BasicInfo";

const apiUrl = "http://localhost:8080/api/project";
const headers = {
  "Content-Type": "application/json"
};

async function get() {
  // const res = await fetch(`${apiUrl}/api/`, {
  //   method: "GET",
  //   headers
  // });
  // const json = await res.json();
  // if (!res.ok) throw new Error(json.message);
  // return json;
  return basicInfo;
}

async function getList() {
  const res = await fetch(`${apiUrl}/list`, {
    method: "GET",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function create({ name, deadline, leader, member }) {
  const res = await fetch(`${apiUrl}/new`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, deadline, leader, member })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function editInfo(data) {}

async function changeStatus(projectId) {}

export default {
  get,
  getList,
  create,
  editInfo,
  changeStatus
};
