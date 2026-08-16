import { useEffect, useState } from "react";
import ModalsContainer from "../../components/ModalsContainer";
import FormikControl from "../../components/authForm/form/FormikControl";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import { FastField, Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./core";

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
  form.setFieldValue("code", selectedColor); // اصلاح شد
};
 
  return (
    <>
      <button
        class="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_color_modal"
        onClick={() => setColorToEdit(null)} // 👈 وقتی روی دکمه افزودن (مثبت) کلیک شد، حالت ویرایش را پاک کن

      >
        <i class="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullscreen={false}
        id={"add_color_modal"}
        title={"افزودن رنگ جدید"}
      >
        <div className="container">
          <div className="row justify-content-center">
       <Formik
              initialValues={reInitialValues || initialValues}
              onSubmit={(values, actions) => onSubmit(values, actions, setData, colorToEdit , setColorToEdit)}
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  placeholder="فقط اعداد و حروف"
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
            </Formik>
           
           </div>
        </div>
      </ModalsContainer>
    </>
  );
}
