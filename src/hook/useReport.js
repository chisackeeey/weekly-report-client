import { useState } from "react";
import reportApi from "src/api/report";

function useReport() {
  const [report, setReport] = useState(null);
  const [reportList, setReportList] = useState(null);
  const [loading, setLoading] = useState(false);

  const find = async () => {
    setLoading(true);
    setReport(await reportApi.get());
    setLoading(false);
  };

  const findList = async () => {
    setLoading(true);
    setReportList(await reportApi.getList());
    setLoading(false);
  };

  const create = async () => {
    setLoading(true);
    await reportApi.create();
    setLoading(false);
  };

  const editReport = async () => {
    setLoading(true);
    await reportApi.editReport();
    setLoading(false);
  };

  const editMemo = async () => {
    setLoading(true);
    await reportApi.editMemo();
    setLoading(false);
  };

  return {
    report,
    reportList,
    loading,
    find,
    findList,
    create,
    editReport,
    editMemo
  };
}

export default useReport;
