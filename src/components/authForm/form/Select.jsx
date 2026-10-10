import { ErrorMessage, Field } from "formik";
import FormikError from "./FormikError";

export default function Select({
  options = [],
  name,
  label,
  className = "",
  firstItem = "انتخاب کنید",
  handleOnchange,
}) {
  return (
    <div className={`col-12 ${className}`}>
      <div className="input-group mb-3 dir_ltr">
        {handleOnchange ? (
          <Field name={name}>
            {({ field, form }) => (
              <select
                {...field}
                className="form-control"
                id={name}
                onChange={(e) => {
                  field.onChange(e); // برای اینکه مقدار داخل فرمیک هم آپدیت شود
                  handleOnchange(e.target.value, form);
                }}
              >
                <option value="">{firstItem}</option>
                {options.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.value}
                  </option>
                ))}
              </select>
            )}
          </Field>
        ) : (
          <Field as="select" className="form-control" id={name} name={name}>
            <option value="">{firstItem}</option>
            {options.map((o) => (
              <option key={o.id} value={o.id}>
                {o.value}
              </option>
            ))}
          </Field>
        )}

        <span className="input-group-text w_6rem justify-content-center">
          {label}
        </span>
      </div>

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
}
