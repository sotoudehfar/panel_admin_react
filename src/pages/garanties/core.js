import * as Yup from "yup";
import { AlertForm } from "../../layout/util/AlertForm";
import { addNewGuaranteeService, editGuaranteeService } from "../../services/guaranty";


export const initialValues = {
title:"",
length :"",
length_unit : "",
  descriptions: "",
};



export const onSubmit = async (  values,  actions,  setData, guaranteeToEdit , setGuaranteetoEdit) => {
  try {
    if (guaranteeToEdit) {
 
      // ویرایش برند
      const res = await editGuaranteeService(guaranteeToEdit.id, values);

      if (res.status === 200) {
        AlertForm( "عملیات موفق",res.data.message || "برند با موفقیت ویرایش شد", "success" );

        setData((lastData) => {
          const newData = [...lastData];

          const index = newData.findIndex(
            (item) => item.id === guaranteeToEdit.id
          );

          if (index !== -1) {
            newData[index] = res.data.data;
          }
          return newData;
        });
        actions.resetForm();
        setGuaranteetoEdit?.(null);
      }
    } else {
      const res = await addNewGuaranteeService(values);
   
      if (res.status === 201) {
        AlertForm("انجام شد", res.data.message || "گارنتی با موفقیت اضافه شد","success");
        setData((lastData) => [...lastData, res.data.data, ]);
          // پاک‌کردن فیلدها
        actions.resetForm();
        // ریست حالت ویرایش
         setGuaranteetoEdit?.(null);
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
  title : Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .matches( /^[\u0600-\u06FF\sa-zA-Z0-9\s@!%$?&]+$/,"فقط از اعداد و حروف لاتین استفاده کنید"
    ),
    length:Yup.number(),
    descriptions : Yup.string().matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,"فقط از اعداد و حرفو استفاده کنید"
    ),
    length_unit : Yup.string().matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,"فقط از اعداد و حرفو استفاده کنید"
    ),
});



