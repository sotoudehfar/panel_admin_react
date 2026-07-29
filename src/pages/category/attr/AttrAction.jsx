
export default function AttrAction({rowData , attrToedit , setAttrToEdite , handleDeleteCategoryAttrs}) {
  return (
<>
    <div className={`text-center ${attrToedit ? "alert-danger danger_shadow" : ""}`} >

    <i 
        className="fas fa-times text-danger hoverable_text pointer has_tooltip"
        title="حذف ویژگی"
        onClick={()=>handleDeleteCategoryAttrs(rowData)}
 
      ></i>
      
      <i 
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش ویژگی"
        data-bs-placement="top"
        onClick={()=>{setAttrToEdite(rowData)}}
     
      ></i>
    </div>


</>


  )
}
