import report from "src/constants/Report";
import reportList from "src/constants/ReportList";

const apiUrl = "http://localhost:8080/api/report";
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

async function create() {
  const res = await fetch(`${apiUrl}/new`, {
    method: "POST",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function editReport() {}

async function editMemo() {}

export default {
  get,
  getList,
  create,
  editReport,
  editMemo
};
