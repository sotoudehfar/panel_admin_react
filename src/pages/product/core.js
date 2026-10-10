import * as Yup from "yup";
import { createNewProductService, editProductService } from "../../services/product";
import { AlertForm } from "../../layout/util/AlertForm";


export const initialValues = {
  category_ids:"",
  title:"",
  price:"",
  weight:null,
  brand_id:null,
  color_ids:"",
  guarantee_ids:"",
  description:"",
  short_descriptions:"",
  cart_descriptions:"",
  image:null,
  alt_image:"",
  keywords:"",
  stock:null,
  discount:null,

};


export const onSubmit = async (values, actions, productToEdit, navigate) => {
  if (productToEdit) {
    const res = await editProductService(productToEdit.id, values);
    if (res.status === 200) {
      AlertForm('انجام شد', res.data.message, 'success');
      // رفتن به صفحه جدول محصولات بعد از ویرایش موفق
      if (navigate) navigate('/product'); // یا navigate('/products');
    }
  } else {
    const res = await createNewProductService(values);
    if (res.status === 201) {
      AlertForm('انجام شد', res.data.message, 'success');
      actions.resetForm();
      if (navigate) navigate(-1);
    }
  }
};




export const validationSchema = Yup.object({
  category_ids: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(/^[0-9\s-]+$/, "فقط از اعداد و خط تیره استفاده کنید"),

  title: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از اعداد و حروف استفاده کنید"
    ),

  price: Yup.number()
    .typeError("قیمت باید عدد باشد")
    .required("لطفا این قسمت رو پر کنید"),

  weight: Yup.number()
    .nullable()
    .notRequired()
    .typeError("وزن باید عدد باشد"),

  brand_id: Yup.number()
    .nullable()
    .notRequired()
    .typeError("برند نامعتبر است"),

  color_ids: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[0-9\s-]+$/, {
      message: "فقط از اعداد و خط تیره استفاده شود",
      excludeEmptyString: true, // 👈 این مانع ارور روی فیلد خالی میشه
    }),

  guarantee_ids: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[0-9\s-]+$/, {
      message: "فقط از اعداد و خط تیره استفاده شود",
      excludeEmptyString: true,
    }),

  // // 👇 سه فیلد توضیحات با قابلیت پذیرش متن خالی و اینتر
  // وقتی ز قابلیت Quilleditor به جای textArea استفاده می کنیم چاره ای جز حذف این قسمت نداریم
  descriptions: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&\r\n]+$/, {
      message: "فقط از حروف و اعداد استفاده شود",
      excludeEmptyString: true,
    }),

  short_descriptions: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&\r\n]+$/, {
      message: "فقط از حروف و اعداد استفاده شود",
      excludeEmptyString: true,
    }),

  cart_descriptions: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&\r\n]+$/, {
      message: "فقط از حروف و اعداد استفاده شود",
      excludeEmptyString: true,
    }),

image: Yup.mixed()
  .nullable()
  .notRequired()
  .test("filesize", "حجم فایل نباید از ۵۰۰ کیلوبایت بیشتر باشد", (value) => {
    // ۱. اگر مقداری نبود تایید کن
    if (!value) return true;
    
    // ۲. اگر از قبل رشته بود (آدرس عکس در حالت ادیت) تایید کن
    if (typeof value === "string") return true;

    // ۳. اگر فایل جدید آپلود شده بود، حجمش رو چک کن
    if (value.size) {
      return value.size <= 500 * 1024;
    }
        return true;
  }),

  keywords: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, {
      message: "فقط از حروف و اعداد استفاده شود",
      excludeEmptyString: true,
    }),

  stock: Yup.number().nullable().notRequired().typeError("موجودی باید عدد باشد"),
  discount: Yup.number().nullable().notRequired().typeError("تخفیف باید عدد باشد"),

  alt_image: Yup.string()
    .nullable()
    .notRequired()
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/, {
      message: "فقط از حروف و اعداد استفاده شود",
      excludeEmptyString: true,
    }),
});



