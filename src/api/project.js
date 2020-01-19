import basicInfoList from "src/constants/BasicInfoList";
import basicInfo from "src/constants/BasicInfo";

const { apiUrl } = "http://170.49.27.111:9080";
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
  // const res = await fetch(`${apiUrl}/api/`, {
  //   method: "GET",
  //   headers
  // });
  // const json = await res.json();
  // if (!res.ok) throw new Error(json.message);
  // return json;
  return basicInfoList;
}

async function create({ name, deadline, leader, member }) {}

async function editInfo(data) {}

async function changeStatus(projectId) {}

export default {
  get,
  getList,
  create,
  editInfo,
  changeStatus
};
