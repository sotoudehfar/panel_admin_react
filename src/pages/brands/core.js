
import * as Yup from "yup";
import { AlertForm } from "../../layout/util/AlertForm";
import { AddNewBrandService, editBrandService } from "../../services/brands";


export const initialValues = {
  original_name:"",
  persian_name:"",
  descriptions: "",
    logo:null,
};



export const onSubmit = async (  values,  actions,  setData,  brandToEdit , setBrandToEdit) => {
  try {
    if (brandToEdit) {
      // ویرایش برند
      const res = await editBrandService(brandToEdit.id, values);

      if (res.status === 200) {
        AlertForm(
          "عملیات موفق",
          res.data.message || "برند با موفقیت ویرایش شد",
          "success"
        );

        setData((lastData) => {
          const newData = [...lastData];

          const index = newData.findIndex(
            (item) => item.id === brandToEdit.id
          );

          if (index !== -1) {
            newData[index] = res.data.data;
          }
          return newData;
        });
        setBrandToEdit?.(null);
      }
    } else {
      // افزودن برند جدید
      const res = await AddNewBrandService(values);

      console.log("Add brand response:", res);

      if (res.status === 201) {
        AlertForm(
          "انجام شد",
          res.data.message || "برند با موفقیت اضافه شد",
          "success"
        );

        setData((lastData) => [
          ...lastData,
          res.data.data,
        ]);

      }
    }
  } catch (error) {
    AlertForm(  "خطا",  error.response?.data?.message || "عملیات انجام نشد", "error" );
  } 
  finally {
    actions.setSubmitting(false);
  }
};


export const validationSchema = Yup.object({
  original_name: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف استفاده کنید"
    ),

  persian_name: Yup.string()
    .required("عنوان فارسی الزامی است")
    .matches(
      /^[\u0600-\u06FF\s]+$/,
      "عنوان فارسی فقط باید شامل حروف فارسی و فاصله باشد"
    ),

  logo: Yup.mixed()
    .nullable()
    .notRequired()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) => {
      if (!value) return true;
      const file = Array.isArray(value) ? value[0] : value;
      if (!file || !file.size) return true;
      return file.size <= 500 * 1024;
    })
    .test("fileFormat", "فرمت فایل باید jpg باشد", (value) => {
      if (!value) return true;
      const file = Array.isArray(value) ? value[0] : value;
      if (!file || !file.type) return true;
      return file.type === "image/jpeg" || file.type === "image/jpg";
    }),
});
