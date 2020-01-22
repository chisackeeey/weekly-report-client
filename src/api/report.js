import report from "src/constants/Report";

const apiUrl = "http://localhost:8080/api/report";
const headers = {
  "Content-Type": "application/json"
};

async function get(id) {
  const res = await fetch(`${apiUrl}?id=${id}`, {
    method: "GET",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getList(date) {
  const res = await fetch(`${apiUrl}/list?date=${date}`, {
    method: "GET",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function getDateList() {
  const res = await fetch(`${apiUrl}/dateList/`, {
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

async function editReport({ id, data }) {
  const res = await fetch(`${apiUrl}/edit?id=${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      thisWeekCondition: data.thisWeekCondition,
      thisWeekPlan: data.thisWeekPlan,
      thisWeekResult: data.thisWeekResult,
      problem: data.problem,
      nextWeekPlan: data.nextWeekPlan
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function editMemo(dataList) {
  const res = await fetch(`${apiUrl}/editMemo`, {
    method: "POST",
    headers,
    body: JSON.stringify(dataList)
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

export default {
  get,
  getList,
  getDateList,
  create,
  editReport,
  editMemo
};
