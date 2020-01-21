import report from "src/constants/Report";

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

async function getList(date) {
  const res = await fetch(`${apiUrl}?date=${date}`, {
    method: "GET",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getDateList() {
  const res = await fetch(`${apiUrl}/list/`, {
    method: "GET",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
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
  getDateList,
  create,
  editReport,
  editMemo
};
