import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";


export default function Textarea({name, label, className, placeholder}) {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3 dir_ltr">
        <FastField as="textarea" name={name} className="form-control" placeholder={placeholder}>
      <span className="input-group-text w-6rem justify-content-center">{label}</span>

        </FastField>
        <span className="input-group-text w_6rem justify_content-center">{label}</span>
      </div>
      <ErrorMessage name={name} component={FormikError}/>

    </div>
  )
}
