import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

export default function Textarea({ name, label, className, placeholder }) {
  return (
    <div className={`col-12 ${className || ""}`}>
      <div className="input-group mb-3 ">
        <span className="input-group-text w-6rem justify-content-center">
          {label}
        </span>

        <FastField
          as="textarea"
          name={name}
          className="form-control"
          placeholder={placeholder}
        />
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
}
