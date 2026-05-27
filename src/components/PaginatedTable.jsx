import { useEffect } from "react";
import { useState } from "react";

let numOfPage = 2;
export default function PaginatedTable({ data, dataInfo, additionField }) {
  const [tableData, setTableData] = useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [pages,setPages] = useState([])
  const [pageCount , setPageCount] = useState(1)

 useEffect(() => {
  console.log(data.length)
    if (data && data.length > 0) {
      const pCount = Math.ceil(data.length / numOfPage); // استفاده از Math.ceil برای رند کردن رو به بالا
      let pArr = [];
      for (let i = 1; i <= pCount; i++) {
        pArr.push(i);
      }
      setPages(pArr);
      

    }
  }, [data]); // اضافه کردن data به وابستگی‌ها

  useEffect(()=>{
    let start = (currentPage*numOfPage)-numOfPage
    let end= (currentPage*numOfPage)
    setTableData(data.slice(start,end))

  },[currentPage,data])
  return (
    <>
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
              {additionField && (
                <td>{additionField.element(d.id)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* بخش Pagination (بدون تغییر) */}
      <nav className="d-flex justify-content-center">
        <ul className="pagination dir_ltr">
          <li className="page-item">
            <span className={` page-link pointer ${currentPage==1 ? 'disable' : ''}`}  onClick={()=>{setCurrentPage(currentPage-1)}}>&raquo;</span></li>
          {
            pages.map(page=>(
              <li key={page} className={`page-item `}>
              <span className={`page-link pointer ${currentPage === page ? 'active' : ''}` }  onClick={()=>{setCurrentPage(page)}}>
                { page}
              </span></li>
            ))
          }      
          <li className="page-item">
            <span className={` page-link pointer ${currentPage==pageCount ? 'disable' : ''}` } onClick={()=>{setCurrentPage(currentPage+1)}}>&laquo;</span></li>
        </ul>
      </nav>
    </>
  );
}