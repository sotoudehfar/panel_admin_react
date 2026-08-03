import { useFormikContext } from "formik";
import SpinnerLoad from "../../SpinnerLoad";

export default function SubmitButton() {
  const { isSubmitting } = useFormikContext();

  return (
    <button
      type="submit"
      className="btn btn-primary btn-sm"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <SpinnerLoad colorClass="text-white" inline={true} isSmall={true} />
      ) : null}
      ذخیره
    </button>
  );
}
