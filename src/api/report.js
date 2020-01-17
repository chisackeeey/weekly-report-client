import report from "src/constants/Report";
import reportList from "src/constants/ReportList";

const { apiUrl } = "http://170.49.27.111:9080";
const headers = {
  "Content-Type": "application/json"
};

async function get(date) {
  // const res = await fetch(`${apiUrl}/api/`, {
  //   method: "GET",
  //   headers
  // });
  // const json = await res.json();
  // if (!res.ok) throw new Error(json.message);
  return report;
}

async function getList() {
  // const res = await fetch(`${apiUrl}/api/`, {
  //   method: "GET",
  //   headers
  // });
  // const json = await res.json();
  // if (!res.ok) throw new Error(json.message);
  return reportList;
}

async function create() {}

async function editReport() {}

async function editMemo() {}

export default {
  get,
  getList,
  create,
  editReport,
  editMemo
};
