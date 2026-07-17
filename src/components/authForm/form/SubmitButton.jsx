import { FastField } from "formik";
import SpinnerLoad from "../../SpinnerLoad";

export default function SubmitButton() {
  return (
    <FastField>
      {({ form }) => {
        return (
          <button 
                    type="submit"
          className="btn btn-primary " disabled={form.isSubmitting}>

        
            {form.isSubmitting ? (
              <SpinnerLoad
                colorClass={"text-white"}
                inline={true}
                isSmall={true}
              />
            ) : null}
            ذخیره
          </button>
        );
      }}
    </FastField>
  );
}
