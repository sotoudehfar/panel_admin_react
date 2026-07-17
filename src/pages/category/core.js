import * as Yup from "yup";
import { createNewCategoryService, editCategorieServices } from "../../services/category";
import { AlertForm } from "../../layout/util/AlertForm";


export const initialValue = {
  parent_id: "",
  title: "",
  description: "",
  image: null,
  is_active: true,
  show_in_menu: true,
};

export const onSubmit = async (values, actions ,setForceRender, editId) => {
  try {
    const payload  = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    if (editId){
      const res = await editCategorieServices(editId , payload );
      if (res.status === 202 || res.status === 201 || res.status === 200){
         AlertForm("هوررررا", "ویرایش دسته  با موفقیت ثبت شد", "success");
         setForceRender((last)=> last+1)
         console.log("hellow5")
       
      }
    }else{

      const res = await createNewCategoryService(payload );
      if (res.status === 202 || res.status === 201) {
        AlertForm("هوررررا", "رکورد با موفقیت ثبت شد", "success");
        actions.resetForm();
        setForceRender((last)=> last+1)
      }
    }

  } catch (error) {
    AlertForm("مشگل!", "در عملیات ذخیره مشگلی پیش آمده", "warning");
  }
};

export const validationSchema = Yup.object({
  parent_id: Yup.number(),
  title: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف استفاده کنید",
    ),
  description: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]*$/,
    "فقط از اعداد و حروف استفاده کنید",
  ),

  // بازنویسی بخش عکس به صورت کاملاً اختیاری
  image: Yup.mixed()
    .nullable()
    .notRequired()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) => {
      // اگر فایلی انتخاب نشده باشد، بدون خطا عبور کند
      if (!value) return true;

      // اگر ساختار فایل به صورت آرایه باشد (مثلا در برخی کامپوننت‌های آپلود)
      const file = Array.isArray(value) ? value[0] : value;
      if (!file || !file.size) return true;

      return file.size <= 500 * 1024;
    })
    .test("fileFormat", "فرمت فایل باید jpg باشد", (value) => {
      if (!value) return true;

      const file = Array.isArray(value) ? value[0] : value;
      if (!file || !file.type) return true;

      // پشتیبانی از فرمت‌های jpeg و jpg
      return file.type === "image/jpeg" || file.type === "image/jpg";
    }),

  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
});