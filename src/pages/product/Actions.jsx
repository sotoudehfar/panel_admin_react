import {  useNavigate } from "react-router-dom"

export default function Actions({rowData, handleDeleteProduct}) {
// send state tp other component by useNavigate and recieve by useLocation
  const navigation = useNavigate()
  return (
<>

    <i 
        className="fas fa-times text-danger hoverable_text pointer has_tooltip"
        title="حذف محصول"
        data-bs-toggle="tooltip"
        data-bs-palcement="top"
        onClick={()=>{handleDeleteProduct(rowData)}}
 
      ></i>
      
      <i 
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش محصول"
        // data-bs-toggle="modal"
        // data-bs-placement="top"
        // data-bs-target="#add_product_modal"
        onClick={()=>navigation('/product/add-product', {state:{productToEdit:rowData}})}
        
      ></i>
       <i 
         className="fas fa-image text-success mx-1 hoverable_text pointer has_tooltip"
         title="مدیریت گالری"
         onClick={()=>navigation('/product/gallery', {state:{selectedProduct:rowData}})}
        
      ></i>
       <i 
        className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip"
        title="ثبت ویژگی "
        data-bs-toggle="modal"
        data-bs-target="#add_product_attr_modal"
       
      ></i>


</>
 )
}



