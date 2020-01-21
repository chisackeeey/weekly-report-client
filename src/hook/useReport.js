import { useState } from "react";
import reportApi from "src/api/report";

function useReport() {
  const [report, setReport] = useState(null);
  const [reportList, setReportList] = useState(null);
  const [reportDateList, setReportDateList] = useState([]);
  const [loading, setLoading] = useState(false);

  const find = async id => {
    setLoading(true);
    setReport(await reportApi.get(id));
    setLoading(false);
  };

  const findList = async date => {
    setLoading(true);
    setReportList(await reportApi.getList(date));
    setLoading(false);
  };

  const findDateList = async () => {
    setLoading(true);
    setReportDateList(await reportApi.getDateList());
    setLoading(false);
  };

  const create = async () => {
    setLoading(true);
    await reportApi.create();
    setLoading(false);
  };

  const editReport = async ({ id, data }) => {
    setLoading(true);
    await reportApi.editReport({ id, data });
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
    reportDateList,
    loading,
    find,
    findList,
    findDateList,
    create,
    editReport,
    editMemo
  };
}

export default useReport;
