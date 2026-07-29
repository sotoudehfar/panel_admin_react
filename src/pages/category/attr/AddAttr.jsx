import { Form, Formik } from 'formik';

import FormikControl from '../../../components/authForm/form/FormikControl';
import { initialValue, onSubmit, validationSchema } from './coreAttr';
import SubmitButton from '../../../components/authForm/form/SubmitButton';

export default function AddAttr({reInitValues,location,setData,attrToedit, setAttrToEdite}) {
  return (
  <>
            <Formik
            initialValues={reInitValues || initialValue}
            onSubmit={(values, actions) => onSubmit(
                values,
                 actions, 
                 location.state.categoryData.id, 
                 setData, 
                 attrToedit,
                 setAttrToEdite)}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formikProps) => (
              <Form>
                <div className="row my-3 justify-content-center align-items-center">
                  <FormikControl
                    control="input"
                    type="text"
                    name="title"
                    label="عنوان"
                    className="col-md-6 col-lg-4 my-1"
                    placeholder="عنوان ویژگی جدید"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="unit"
                    label="واحد"
                    className="col-md-6 col-lg-4 my-1"
                    placeholder="واحد ویژگی جدید"
                  />

                  <div className="col-8 col-lg-2 my-1">
                    <FormikControl
                      control="switch"
                      name="in_filter"
                      label="نمایش در فیلتر"
                    />
                  </div>

                  <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center my-1">
                    <SubmitButton />
                    {attrToedit ? (
                      <button 
                        type="button" // حتما type="button" باشد تا فرم را سابمیت نکند
                        className="btn btn-sm btn-secondary me-2" 
                        onClick={() => {
                          setAttrToEdite(null);
                          formikProps.resetForm(); // ریست کردن کلید‌ها و فیلدهای فرم بعد از انصراف
                        }}
                      >
                        انصراف
                      </button>
                    ) : null}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
  
  
  
  </>
  )
}
