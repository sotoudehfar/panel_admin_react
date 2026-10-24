import { Form, Formik } from "formik";

import FormikControl from "../../components/authForm/form/FormikControl";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import {  validationSchema , onSubmit, initialValues} from "./core";
import { useEffect, useState } from "react";
import { apiPath } from "../../services/httpService";
import ModalsContainer from "../../components/authForm/form/ModalsContainer";

export default function AddBrand({setData, brandToEdit, setBrandToEdit}) {
  const [reInitialValues, setReInitialValues]=useState(null)
  
  useEffect(()=>{
    if (brandToEdit) 
      setReInitialValues({
       original_name : brandToEdit.original_name,
       persian_name : brandToEdit.persian_name || "",
       descriptions: brandToEdit.descriptions || "",
       logo : null,
    })
    else {setReInitialValues(null)};
  },[brandToEdit])

 
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_brand_modal"
        
        onClick={() => setBrandToEdit(null)} // 👈 وقتی روی دکمه افزودن (مثبت) کلیک شد، حالت ویرایش را پاک کن
      >
        <i className="fas fa-plus text-light"></i>
      </button>
      <ModalsContainer
        id={"add_brand_modal"}
        title={brandToEdit ? "ویرایش برند" : "افزودن برند جدید"}
        fullscreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitialValues || initialValues}
              onSubmit={(values, actions) => onSubmit(values, actions, setData, brandToEdit , setBrandToEdit)}
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="original_name"
                  label="عنوان لاتین "
                  placeholder="کیبرد را در حالت لاتین قرار دهید"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="persian_name"
                  label="عنوان فارسی "
                  placeholder="کیبرد را در حالت فارسی قرار دهید"
                />
                <FormikControl
                  control="textarea"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
                {
                  brandToEdit ? (
                     <div className="btn_box text-center col-12 py-3">
                        <img src={apiPath+"/"+brandToEdit.logo } width="60"/>
                     </div> 
                  ): null
                }
                <FormikControl
                  control="file"
                  name="logo"
                  label="تصویر"
                  placeholder="تصویر"
                />

            <div className="btn_box text-center col-12">
                <SubmitButton/>
            </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
}
