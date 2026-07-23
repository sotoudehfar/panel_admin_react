import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryContext } from "../../../context/categoryContext";

export default function Action({ rowData , handleDeleteCategory}) {
  const navigate = useNavigate();
  const {SetEditId} = useContext(CategoryContext)
  const { categoryId } = useParams();
  return (
    <>
      { !categoryId ? (
        <i
          className="fas fa-project-diagram text-info hoverable_text pointer has_tooltip"
          onClick={() =>
            navigate(`/category/${rowData.id}`, {
              state: {
                parentData: rowData,
              },
            })
          }
        ></i>
      ) : null}

      <i 
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش دسته"
        data-bs-placement="top"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={()=>SetEditId(rowData.id)}
      ></i>
      {
       categoryId ? (
         <i 
           className="fas fa-receipt text-success hoverable_text pointer has_tooltip px-2"
           title="افزودن ویژگی"
           data-bs-placement="top"
             onClick={() =>
               navigate(`/category/${rowData.id}/attributes`, {
                 state: {
                   categoryData: rowData,
                 },
               })
             }
         
         ></i>
       ): null
      }
  
      <i 
        className="fas fa-times text-danger hoverable_text pointer has_tooltip"
        title="حذف دسته"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        onClick={()=> handleDeleteCategory(rowData)}
      ></i>
    </>
  );
}
