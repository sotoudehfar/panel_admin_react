import { AlertForm } from "../../../layout/util/AlertForm";
import { addCategoryAttrService, editCategoryAttrService } from "../../../services/categoryAttr";
import * as Yup from "yup";

export const initialValue = {
  title: "",
  unit: "",
  in_filter: true
};

export const onSubmit = async (values, actions, categoryId, setData, attrToedit, setAttrToEdite) => {
  try {
    const payload = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };

    if (attrToedit) {
      const res = await editCategoryAttrService(attrToedit.id, payload);
      if (res.status === 200) {
        AlertForm("آفرین", "رفیق ویژگی ویرایش شد", "success");
        setData(oldData => {
          const newData = [...oldData];
          const index = newData.findIndex(d => d.id === attrToedit.id);
          if (index !== -1) {
            newData[index] = res.data.data;
          }
          return newData;
        });
        setAttrToEdite(null);
        actions.resetForm(); // ریست کردن فرم بعد از ویرایش موفق
      }
    } else {
      const res = await addCategoryAttrService(categoryId, payload);
      if (res.status === 201) {
        AlertForm("آفرین", "رفیق ویژگی اضافه شد", "success");
        setData((oldData) => [...oldData, res.data.data]);
        actions.resetForm();
      }
    }
  } catch (error) {
    AlertForm("بد شد رفیق", "عملیات با خطا مواجه شد", "warning");
  }
};

export const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف استفاده کنید",
    ),
  unit: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]*$/,
      "فقط از اعداد و حروف استفاده کنید",
    ),
  in_filter: Yup.boolean(),
});