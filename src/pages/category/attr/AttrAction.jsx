
export default function AttrAction({rowData}) {
  return (
<>
    <i 
        className="fas fa-times text-danger hoverable_text pointer has_tooltip"
        title="حذف ویژگی"
 
      ></i>
      
      <i 
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش ویژگی"
        data-bs-placement="top"
     
      ></i>


</>


  )
}
