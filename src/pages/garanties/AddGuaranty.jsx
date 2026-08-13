import { Form, Formik } from "formik";
import ModalsContainer from "../../components/ModalsContainer";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "../../components/authForm/form/FormikControl";
import { useEffect, useState } from "react";

export default function AddGuaranty({  setData,  guaranteeToEdit,  setGuaranteetoEdit})
 {
  const [reInitiallValues, setReInitialValues] = useState(null);

  useEffect(() => {
    if (guaranteeToEdit) {
      setReInitialValues({
        title: guaranteeToEdit.title,
        descriptions: guaranteeToEdit.descriptions || "",
        length: guaranteeToEdit.length || "",
        length_unit: guaranteeToEdit.length_unit || "",
      });
    } else setReInitialValues(null);
  }, [guaranteeToEdit]);

  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_guarantee_modal"
        onClick={() => setGuaranteetoEdit(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullscreen={false}
        id={"add_guarantee_modal"}
        title={guaranteeToEdit ? "ویرایش گارانتی" : "افزودن گارانتی جدید"}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitiallValues || initialValues}
              onSubmit={(values, actions) =>
                     onSubmit(values, actions, setData, guaranteeToEdit, setGuaranteetoEdit)
}
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  placeholder="فقط حرف و و اعداد"
                />

                <FormikControl
                  control="textarea"
                  type="text"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="فقط حرف و اعداد"
                />
                <FormikControl
                  control="input"
                  type="number"
                  name="length"
                  label="مدت گارانتی"
                  placeholder="فقط  اعداد"
                />
                <FormikControl
                  control="input"
                  type="number"
                  name="length_unit"
                  label="واحد"
                  placeholder="فقط  حروف"
                />

                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <button className="btn btn-primary ">ذخیره</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalsContainer>
    </>
  );
}
