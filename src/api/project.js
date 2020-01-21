const apiUrl = "http://localhost:8080/api/project";
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

async function editInfo({ id, data }) {
  const res = await fetch(`${apiUrl}/edit?id=${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: data.name,
      deadline: data.deadline,
      leader: data.leader,
      member: data.member
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

async function changeStatus(id) {
  const res = await fetch(`${apiUrl}/change?id=${id}`, {
    method: "POST",
    headers
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

export default {
  get,
  getList,
  create,
  editInfo,
  changeStatus
};
