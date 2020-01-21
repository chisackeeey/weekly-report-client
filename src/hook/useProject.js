import { useState } from "react";
import projectApi from "src/api/project";

function useProject() {
  const [project, setProject] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [loading, setLoading] = useState(false);

  const find = async id => {
    setLoading(true);
    setProject(await projectApi.get(id));
    setLoading(false);
  };

  const findList = async () => {
    setLoading(true);
    setProjectList(await projectApi.getList());
    setLoading(false);
  };

  const create = async ({ name, deadline, leader, member }) => {
    setLoading(true);
    await projectApi.create({ name, deadline, leader, member });
    setLoading(false);
  };

  const editInfo = async data => {
    setLoading(true);
    await projectApi.editInfo(data);
    setLoading(false);
  };

  const changeStatus = async projectId => {
    setLoading(true);
    await projectApi.changeStatus(projectId);
    setLoading(false);
  };

  return {
    project,
    projectList,
    loading,
    find,
    findList,
    create,
    editInfo,
    changeStatus
  };
}

export default useProject;
