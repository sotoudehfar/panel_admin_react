import { useEffect, useState } from "react";
import SpinnerLoad from "./SpinnerLoad";

export default function PaginatedTable({
  data = [],
  dataInfo = [],
  numOfPage = 10,
  searchParams = {},
  children,
  loading = false,
}) {
  const [tableData, setTableData] = useState([]);
  const [initData, setInitData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("");

  useEffect(() => {
    if (data && data.length > 0) {
      const pCount = Math.ceil(initData.length / numOfPage);
      let pArr = [];
      for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
      setPages(pArr);
      setPageCount(pCount);
    } else {
      setPages([]);
      setPageCount(1);
    }
  }, [initData, numOfPage, data]);

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData, numOfPage]);

  useEffect(() => {
    const filtered = data.filter((d) =>
      String(d?.[searchParams.searchField] ?? "").includes(searchChar),
    );

    setInitData(filtered);
    setCurrentPage(1);
  }, [searchChar, data, searchParams.searchField]);

  useEffect(() => {
    setInitData(data);
  }, [data]);

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder || "جستجو..."}
              onChange={(e) => {
                setSearchChar(e.target.value);
              }}
            />
            <span className="input-group-text">{searchParams.title || "جستجو"}</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>

      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <SpinnerLoad colorClass="text-primary" />
          <div className="mt-3 text-primary">در حال دریافت اطلاعات...</div>
        </div>
      ) : tableData.length > 0 ? (
        <table className="table table-responsive text-center table-hover table-bordered">
          <thead className="table-secondary">
            <tr>
              {dataInfo.map((i, index) => (
                <th key={i.field || `header_${index}`}>{i.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((d, dIndex) => (
              <tr key={d.id || dIndex}>
                {dataInfo.map((i, index) =>
                  i.field ? (
                    <td key={i.field + "_" + (d.id || dIndex)}>{d[i.field]}</td>
                  ) : (
                    <td key={(d.id || dIndex) + "_" + index}>
                      {i.elements(d)}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center my-5 text-danger">
          رکوردی برای نمایش وجود ندارد
        </h4>
      )}

      {pages.length > 1 ? (
        <nav className="d-flex justify-content-center">
          <ul className="pagination dir_ltr">
            <li className="page-item">
              <span
                className={`page-link pointer ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => {
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              >
                &raquo;
              </span>
            </li>
            {pages.map((page) => (
              <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                <span
                  className="page-link pointer"
                  onClick={() => {
                    setCurrentPage(page);
                  }}
                >
                  {page}
                </span>
              </li>
            ))}
            <li className="page-item">
              <span
                className={`page-link pointer ${currentPage === pageCount ? "disabled" : ""}`}
                onClick={() => {
                  if (currentPage < pageCount) setCurrentPage(currentPage + 1);
                }}
              >
                &laquo;
              </span>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
