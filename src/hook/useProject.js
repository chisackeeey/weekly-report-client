import { useState } from "react";
import projectApi from "src/api/project";

function useProject() {
  const [project, setProject] = useState(null);
  const [projectList, setProjectList] = useState(null);
  const [loading, setLoading] = useState(false);

  const find = async () => {
    setLoading(true);
    setProject(await projectApi.get());
    setLoading(false);
  };

  const findList = async () => {
    setLoading(true);
    setProjectList(await projectApi.getList());
    setLoading(false);
  };

  const create = async () => {
    setLoading(true);
    await projectApi.create();
    setLoading(false);
  };

  const editInfo = async () => {
    setLoading(true);
    await projectApi.editInfo();
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
