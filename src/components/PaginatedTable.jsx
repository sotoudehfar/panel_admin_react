export default function PaginatedTable({ data, dataInfo, additionField }) {
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
          {data.map((d) => (
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
          <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
        </ul>
      </nav>
    </>
  );
}