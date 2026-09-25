import { useEffect, useState, useRef } from "react";
import SpinnerLoad from "../SpinnerLoad";

export default function PaginatedDataTable({
  children,
  tableData = [],
  dataInfo = [],
  loading = false,
  pageCount = 1,
  currentPage = 1,
  setCurrentPage,
  searchParams = {},
  handleSearch,
}) {
  const pageRange = 3;
  const [pages, setPages] = useState([]);
  const timeoutRef = useRef(null);

  const handleSetSearchChar = (char) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleSearch(char);
    }, 1000);
  };

  useEffect(() => {
    let pArr = [];
    const count = Number(pageCount) || 0;
    for (let i = 1; i <= count; i++) pArr.push(i);
    setPages(pArr);
  }, [pageCount]);

  return (
    <>
      <div className="row justify-content-between mb-3">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams?.placeholder || "جستجو..."}
              onChange={(event) => handleSetSearchChar(event.target.value)}
            />
            <span className="input-group-text">{searchParams?.title || "جستجو"}</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-end">
          {children}
        </div>
      </div>

      {loading ? (
        <SpinnerLoad colorClass="text-primary" />
      ) : tableData && tableData.length > 0 ? (
        <table className="table table-responsive text-center table-hover table-bordered">
          <thead className="table-secondary">
            <tr>
              {dataInfo.map((i, index) => (
                <th key={i.field || `notField_${index}`}>{i.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((d) => (
              <tr key={d.id}>
                {dataInfo.map((i, index) =>
                  i.field ? (
                    <td key={i.field + "_" + d.id}>{d[i.field]}</td>
                  ) : (
                    <td key={d.id + "__" + (i.id || index)}>{i.elements(d)}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center my-5 text-danger">رکوردی برای نمایش وجود ندارد</h5>
      )}

      {/* نمایش صفحه‌بندی زمانی که بیش از ۱ صفحه داریم */}
      {pages.length > 1 ? (
        <nav className="d-flex justify-content-center my-4">
          <ul className="pagination dir_ltr">
            {/* دکمه قبلی */}
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <span
                className="page-link pointer"
                onClick={() => {
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
              >
                &raquo;
              </span>
            </li>

            {/* رفتن به صفحه اول */}
            {currentPage > pageRange && (
              <>
                <li className="page-item">
                  <span className="page-link pointer" onClick={() => setCurrentPage(1)}>
                    1
                  </span>
                </li>
                {currentPage > pageRange + 1 && <li className="page-item disabled"><span className="page-link">...</span></li>}
              </>
            )}

            {/* صفحات مجاور */}
            {pages.map((page) => {
              return page < currentPage + pageRange && page > currentPage - pageRange ? (
                <li className={`page-item ${currentPage === page ? "active" : ""}`} key={page}>
                  <span className="page-link pointer" onClick={() => setCurrentPage(page)}>
                    {page}
                  </span>
                </li>
              ) : null;
            })}

            {/* رفتن به صفحه آخر */}
            {currentPage <= pageCount - pageRange && (
              <>
                {currentPage < pageCount - pageRange && <li className="page-item disabled"><span className="page-link">...</span></li>}
                <li className="page-item">
                  <span className="page-link pointer" onClick={() => setCurrentPage(pageCount)}>
                    {pageCount}
                  </span>
                </li>
              </>
            )}

            {/* دکمه بعدی */}
            <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
              <span
                className="page-link pointer"
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
