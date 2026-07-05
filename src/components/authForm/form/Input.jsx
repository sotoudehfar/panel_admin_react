import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

export default function Input({
  type = "text",
  name,
  label,
  className = "",
  placeholder,
}) {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3 dir_ltr">
        <FastField
          type={type}
          name={name}
          id={name}
          className="form-control"
          placeholder={placeholder}
        />
        <span className="input-group-text w_6rem justify-content-center">
          {label}
        </span>
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
}
