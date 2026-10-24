import { useEffect, useState } from "react";
import FormikControl from "../../components/authForm/form/FormikControl";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import { FastField, Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./core";
import ModalsContainer from "../../components/authForm/form/ModalsContainer";

export default function AddColor({ setData, colorToEdit, setColorToEdit}) {

    const [reInitialValues, setReInitialValues]=useState(null)
    const  [colorPickerValue, setColorPickerValue]=useState("#000")
    
useEffect(() => {
  if (colorToEdit) {
    setColorPickerValue(colorToEdit.code || "#000000"); 
    setReInitialValues({
      title: colorToEdit.title,
      code: colorToEdit.code,
    });
  } else {
    setReInitialValues(null);
    setColorPickerValue("#000000");
  }
}, [colorToEdit]);
  
const handleChangeColorCodeField = (e, form) => {
  const selectedColor = e.target.value;
  setColorPickerValue(selectedColor);
  form.setFieldValue("code", selectedColor);
};
 
  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_color_modal"
        onClick={() => setColorToEdit(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullscreen={false}
        id={"add_color_modal"}
        title={colorToEdit ? "ویرایش رنگ" : "افزودن رنگ جدید"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitialValues || initialValues}
              onSubmit={(values, actions) => onSubmit(values, actions, setData, colorToEdit , setColorToEdit)}
              validationSchema={validationSchema}
              enableReinitialize
            >
              {(formik) => ( // 👈 ۱. اضافه شدن آرگومان formik به عنوان تابع
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    name="title"
                    label="عنوان"
                    placeholder="فقط اعداد و حروف"
                    formik={formik} // 👈 ۲. فرستادن formik به FormikControl
                  />
                  <FastField>
                    {({form})=>{
                      return(
                        <div className="col-12 d-flex align-items-center justify-content-start">
                          <label
                            htmlFor="exampleColorInput"
                            className="form-label m-0"
                          >
                            انتخاب رنگ
                          </label>
                          <input
                             type="color"
                             className="form-control form-control-color mx-3"
                             id="code"
                             name="code"
                             title="انتخاب رنگ"
                             value={colorPickerValue}
                             onChange={(e)=> handleChangeColorCodeField(e,form)}
                          />
                        </div>
                      )
                    }}
                  </FastField>
                  <div className="btn_box text-center col-12">
                    <SubmitButton/>
                  </div>
                </Form>
              )}
            </Formik>
           </div>
        </div>
      </ModalsContainer>
    </>
  );
}
