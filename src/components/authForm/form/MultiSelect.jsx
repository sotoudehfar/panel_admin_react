import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import FormikError from "./FormikError";

//if resultType = "sring" then :  "1-2-3" else : [1,2,3]

export default function MultiSelect({resultType, options, name, label, className , firstItem}) {
const[selectedItems, setSelectedItems]= useState([]);
  
const hendleSelectItems = (selectedId, formik)=>{
    setSelectedItems(oldData=>{
        if (oldData.findIndex(d=> d.id == selectedId) == -1 && selectedId > 0 ){
            const newData = [...oldData, options.filter(o=>o.id == selectedId)[0]];
          
            const selectedIds=  newData.map(nd=>nd.id)
            const nameValue = resultType == "string" ? selectedIds.join("-") : selectedIds
            formik.setFieldValue(name, nameValue);
       
            return newData
         }
         else {
            return oldData
         }
    })
}


const handleRemovefromSelectedItems = (categoryId, formik) => {
    setSelectedItems(oldData => 
      { 
        let newData = oldData.filter(d=>d.id != categoryId)
        const selectedIds =  newData.map(nd=>nd.id)
        formik.setFieldValue("category_ids", selectedIds.join("-"))
        return(newData)
        
      }
    )
  }


  return (
 
    <Field >
       {({form }) => {
        return (
         <div className={`col-12 ${className}`}>
           <div className="input-group mb-3 dir_ltr">
              <select className="form-control" id={name +"-select"} name={name}   onChange={(e)=>hendleSelectItems(e.target.value, form)}>
                   <option value="">{firstItem}</option>
                      { options.map((option) => (
                            <option key={option.id} value={option.id}> {option.value}       </option>
                  )) }
               </select>
               <label htmlFor={name + "-select"} className="input-group-text w_6rem justify-content-center">
                {label}
               </label>
            </div>
            
            <ErrorMessage name={name} component={FormikError}/>

            <div className="col-12 col-md-6 col-lg-8">
                {selectedItems.map((selectedItems)=>(
                    <span className="chips_elem" key={selectedItems.id}>
                        <i className="fas fa-times text-danger" onClick={() => handleRemovefromSelectedItems (selectedItems.id,form)}></i>
                        {selectedItems.value}
                    </span>
                ))}
            </div>

            </div>
        


               )}}
    </Field>
       )

  
}
