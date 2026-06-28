import { useNavigate, useParams } from "react-router-dom";

export default function Action({ rowData }) {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  return (
    <>
      { !categoryId ? (
        <i
          className="fas fa-project-diagram text-info mx-1 pointer"
          onClick={() =>
            navigate(`/category/${rowData.id}`, {
              state: {
                parentData: rowData,
              },
            })
          }
        ></i>
      ) : null}

      <i className="fas fa-edit text-warning mx-1 pointer"></i>
      <i className="fas fa-plus text-success mx-1 pointer"></i>
      <i className="fas fa-times text-danger mx-1 pointer"></i>
    </>
  );
}
