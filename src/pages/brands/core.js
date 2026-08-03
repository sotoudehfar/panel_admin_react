
import * as Yup from "yup";
import { AlertForm } from "../../layout/util/AlertForm";
import { AddNewBrandService } from "../../services/brands";


export const initialValue = {
  original_name:"",
  persian_name:"",
  descriptions: "",
    logo:null,
};



export const onSubmit = async (values, actions, setData) => {
  try {
    const res = await AddNewBrandService(values);

    // چک کن که آیا وضعیت 200 یا 201 است
    if (res.status === 201 || res.status === 200) {
      AlertForm("عملیات موفق", res.data.message || "برند با موفقیت ثبت شد", "success");
      
      // اضافه کردن آیتم جدید به ابتدای لیست
      setData((lastData) => [res.data.data, ...lastData]);
      
      // فرم را ریست کن و مودال را ببند (اختیاری)
      actions.resetForm();
    }
  } catch (error) {
    console.error("خطای ثبت برند:", error);
    // نمایش پیام خطا به کاربر از طریق خودِ AlertForm
    AlertForm("خطا!", error.response?.data?.message || "مشکلی در ثبت برند پیش آمده است", "error");
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
