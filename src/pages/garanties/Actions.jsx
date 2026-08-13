
export default function Actions({  rowData,  setGuaranteetoEdit ,  handleDeleteGuarantee,}) {
  return (
<>

    <i 
        className="fas fa-times text-danger hoverable_text pointer has_tooltip"
        title="حذف برند"
        data-bs-toggle="tooltip"
        data-bs-palcement="top"
        onClick={()=>{handleDeleteGuarantee(rowData)}}
 
      ></i>
      
      <i 
        className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
        title="ویرایش برند"
        data-bs-toggle="modal"
        data-bs-target="#add_guarantee_modal"
       onClick={() => setGuaranteetoEdit(rowData)
        
       }
     
      ></i>


</>
 )
}



