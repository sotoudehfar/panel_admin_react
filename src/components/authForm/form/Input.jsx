import { FastField } from "formik";

const Input = ({ formik, type, name, icon, label, placeholder }) => {
  const hasError = formik?.errors?.[name] && formik?.touched?.[name];

  return (
    <div className="row align-items-center mb-1">
      {label && (
        <label htmlFor={name} className="col-4 col-form-label text-end">
          {label}
        </label>
      )}

      <div className={label ? "col-8" : "col-12"}>
        <div
          className={`wrap-input100 validate-input ${
            hasError ? "alert-validate" : ""
          }`}
          data-validate={formik?.errors?.[name] || ""}
        >
          <FastField
            id={name}
            className="input100"
            type={type}
            name={name}
            placeholder={placeholder || ""}
          />
          <span className="focus-input100"></span>
          {icon && (
            <span className="symbol-input100">
              <i className={icon}></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
