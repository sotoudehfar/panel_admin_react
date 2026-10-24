import * as Yup from 'yup';
import jMoment from 'jalali-moment';
import { AlertForm } from '../../layout/util/AlertForm';
import { addNewDiscountService, updateDiscountService } from '../../services/discounts';
import { convertFormDateToMiladi } from '../../layout/util/convertDate';

export const initialValues = {
    title: "",
    code: "",
    percent: 0,
    expire_at: "",
    for_all: true,
    product_ids: "",
};

export const onSubmit = async (values, actions, setData, discountToEdit, navigate) => {
    try {
        console.log("مقادیر ورودی خام:", values);

        // تبدیل امن تاریخ
        let formattedExpireAt = values.expire_at;
        if (values.expire_at) {
            try {
                formattedExpireAt = convertFormDateToMiladi(values.expire_at);
            } catch (dateErr) {
                console.error("خطا در تبدیل تاریخ:", dateErr);
            }
        }

        const payload = {
            ...values,
            expire_at: formattedExpireAt
        };

        if (discountToEdit) {
            const res = await updateDiscountService(discountToEdit.id, payload);
            console.log("پاسخ سرور (ویرایش):", res);
            
            if (res.status === 200) {
                AlertForm('انجام شد', res.data.message, 'success');
                setData(lastData => {
                    let newData = [...lastData];
                    let index = newData.findIndex(d => d.id === discountToEdit.id);
                    if (index !== -1) newData[index] = res.data.data;
                    return newData;
                });
                navigate(-1);
            }
        } else {
            const res = await addNewDiscountService(payload);
            console.log("پاسخ سرور (ایجاد):", res);

            // گاهی کدهای بازگشتی سرور 200 یا 201 هستند، هر دو را پوشش میدهیم
            if (res.status === 201 || res.status === 200) {
                AlertForm('انجام شد', res.data.message, 'success');
                actions.resetForm();
                setData(old => [...old, res.data.data]);
                navigate(-1);
            }
        }
    } catch (error) {
        console.error("خطا در اجرای onSubmit:", error);
        // نمایش خطای سرور در صورت وجود پاسخ
        if (error.response) {
            console.error("جزئیات خطای سرور:", error.response.data);
            AlertForm('خطا', error.response.data.message || 'مشکلی رخ داده است', 'error');
        }
    }
};

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[\u0600-\u06FF\sa-zA-Z0-9!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  
  expire_at: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9/\s-]+$/, "فقط از اعداد و خط تیره استفاده شود"),
  
  code: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  
  percent: Yup.number()
    .typeError("لطفا یک عدد معتبر وارد کنید")
    .required("لطفا این قسمت را پر کنید"),
  
  for_all: Yup.boolean(),
  
  product_ids: Yup.string().when('for_all', {
    is: false,
    then: (schema) => schema.required("لطفا این قسمت را پر کنید").matches(/^[0-9/\s-]+$/, "فقط از اعداد و خط تیره استفاده شود"),
    otherwise: (schema) => schema.notRequired(),
  }),
});
