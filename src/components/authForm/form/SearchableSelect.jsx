import { ErrorMessage, Field } from "formik";
import { useState, useEffect } from "react";
import FormikError from "./FormikError";

export default function SearchableSelect({
  resultType,
  options = [],
  name,
  label,
  className = "",
  firstItem = "انتخاب کنید...",
}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [copyOptions, setCopyOptions] = useState(options);

  const handleSelectedItems = (selectedId, formik) => {
    if (selectedId <= 0) return;

    // ۱. بررسی انتخاب تکراری
    const isAlreadySelected = selectedItems.some((d) => d.id == selectedId);
    if (isAlreadySelected) return;

    // ۲. پیدا کردن آیتم انتخابی
    const targetOption = options.find((o) => o.id == selectedId);
    if (!targetOption) return;

    // ۳. ساخت دیتای جدید
    const newData = [...selectedItems, targetOption];
    const selectedIds = newData.map((nd) => nd.id);
    const nameValue = resultType === "string" ? selectedIds.join("-") : selectedIds;

    // ۴. آپدیت فرمیک و استیت
    formik.setFieldValue(name, nameValue);
    setSelectedItems(newData);
  };

  const handleRemovefromSelectedItems = (event, selectedId, formik) => {
    event.stopPropagation();
    setSelectedItems((oldData) => {
      const newData = oldData.filter((d) => d.id != selectedId);
      const selectedIds = newData.map((nd) => nd.id);
      const nameValue = resultType === "string" ? selectedIds.join("-") : selectedIds;
      formik.setFieldValue(name, nameValue);
      return newData;
    });
  };

  // آپدیت گزینه‌ها با تغییر پراپ options
  useEffect(() => {
    setCopyOptions(options);
  }, [options]);

  // بستن لیست با کلیک بیرون از المان + کلین‌آپ حافظه
  useEffect(() => {
    const handleOutsideClick = () => {
      setShowItems(false);
    };
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Field name={name}>
      {({ form }) => {
        return (
          <div className={`col-12 ${className}`}>
            <div
              className="input-group mb-3 dir_ltr pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowItems(!showItems);
              }}
            >
              <div className="form-control" id={`${name}-select`}>
                {selectedItems.length > 0 ? (
                  selectedItems.map((selectedItem) => (
                    <span className="chips_elem" key={selectedItem.id}>
                      <i
                        className="fas fa-times text-danger pointer me-1"
                        onClick={(e) =>
                          handleRemovefromSelectedItems(
                            e,
                            selectedItem.id,
                            form
                          )
                        }
                      ></i>
                      {selectedItem.value}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary">{firstItem}</span>
                )}

                <div
                  className={`multi_select_items_content ${!showItems ? "d-none" : ""}`}
                >
                  <input
                    type="text"
                    className="form-control my-1"
                    placeholder="قسمتی از عنوان مورد نظر را وارد کنید"
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (!val.trim()) {
                        setCopyOptions(options);
                      } else {
                        setCopyOptions(
                          options.filter((o) =>
                            o.value.toLowerCase().includes(val.toLowerCase())
                          )
                        );
                      }
                    }}
                  />

                  <ul className="p-0">
                    {copyOptions.map((o) => (
                      <li
                        key={o.id}
                        className="multi_select_items pointer"
                        onClick={() => handleSelectedItems(o.id, form)}
                      >
                        {o.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <span className="input-group-text w_6rem justify-content-center">
                {label}
              </span>
            </div>

            <ErrorMessage name={name} component={FormikError} />
          </div>
        );
      }}
    </Field>
  );
}
