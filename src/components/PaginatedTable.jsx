import {  useEffect } from "react";
import { useState } from "react";



export default function PaginatedTable({  data, dataInfo, numOfPage, additionField ,searchParams, children  }) {
  const [tableData, setTableData] = useState([]);
  const [initData , setInitData]=useState(data)
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [searchChar, setSearchChar] = useState("")

  useEffect(() => {
    console.log(data.length);
    if (data && data.length > 0) {
      const pCount = Math.ceil(initData.length / numOfPage); // استفاده از Math.ceil برای رند کردن رو به بالا
      let pArr = [];
      for (let i = 1; i <= pCount; i++)  pArr=[...pArr, i]
        setPages(pArr);
      setPageCount(pCount); // ✅ این را اضافه کن
    
    }
  }, [initData]); // اضافه کردن data به وابستگی‌ها

  useEffect(() => {
    let start = currentPage * numOfPage - numOfPage;
    let end = currentPage * numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

useEffect(()=>{
  data.filter((d) =>
    String(d?.[searchParams.searchField] ?? "").includes(searchChar)
  )
 setCurrentPage(1)
},[searchChar])
  
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="input-group mb-3 dir_ltr">
            <input
              type="text"
              className="form-control"
              placeholder={searchParams.placeholder}
              onChange={(e)=>{setSearchChar(e.target.value)}}
            />
            <span className="input-group-text">{searchParams.title}</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-end">
         {children}
        </div>
      </div>
      <table className="table table-responsive text-center table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {dataInfo.map((i, index) => (
              <th key={i.field + index}>{i.title}</th>
            ))}
            {additionField && <th>{additionField.title}</th>}
          </tr>
        </thead>
        <tbody>
          {tableData.map((d) => (
            <tr key={d.id}>
              {dataInfo.map((i) => (
                <td key={i.field + "_" + d.id}>{d[i.field]}</td>
              ))}
              {/* اینجا نباید از th استفاده کنید، باید td باشد */}
              {additionField && <td>{additionField.element(d.id)}</td>}
            </tr>
          ))}
        </tbody>
      </table>

   {

    pages.length > 1 ? (
      <nav className="d-flex justify-content-center">
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span
              className={` page-link pointer ${currentPage == 1 ? "disable" : ""}`}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              &raquo;
            </span>
          </li>
          {pages.map((page) => (
            <li key={page} className={`page-item `}>
              <span
                className={`page-link pointer ${currentPage === page ? "active" : ""}`}
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
              className={` page-link pointer ${currentPage == pageCount ? "disable" : ""}`}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              &laquo;
            </span>
          </li>
        </ul>
      </nav>
    ): null
   
   }

    </>
  );
}
