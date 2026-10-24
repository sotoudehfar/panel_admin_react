import { useState, useEffect } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import { Formik, Form } from "formik";

import { initialValues, onSubmit, validationSchema } from "./core";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import FormikControl from "../../components/authForm/form/FormikControl";
import ModalsContainer from "../../components/authForm/form/ModalsContainer";
import { getAllProductTitlesService } from "../../services/product";
import { convertDate } from "../../layout/util/convertDate";

export default function AddDiscounts() {
  const navigate = useNavigate();
  //by useLocation recive data of navigate
  const location = useLocation()
  const discountToEdit = location.state?.discountToEdit
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [reInitialValues, setReInitialValues]=useState(null)
  const { setData } = useOutletContext();

  const handleGetAllProductTitles = async () => {
    const res = await getAllProductTitlesService();
    if (res.status === 200) {
      setAllProducts(res.data.data.map((p) => ({ id: p.id, value: p.title })));
    }
  };

const handleSetProductSelectBox = (formik) => {
    const idsArr = formik.values.product_ids.split("-").filter(id => id);
    const selectedProductArr = idsArr.map(id => allProducts.filter(p => p.id == id)[0]).filter(product => product);
    console.log(formik.values.product_ids);
    return (
        <FormikControl
            className="animate__animated animate__shakeX"
            label="برای"
            control="searchableSelect"
            options={allProducts}
            name="product_ids"
            firstItem="محصول مورد نظر را انتخاب کنید"
            resultType="string"
            initialItems={selectedProductArr.length > 0 ? selectedProductArr : selectedProducts}
        />
    )
}



useEffect(() => {
    handleGetAllProductTitles()
    if (discountToEdit) {
        setSelectedProducts(discountToEdit.products.map(p => { return { id: p.id, value: p.title } }))
        const productIds = discountToEdit.products.map(p => p.id).join("-");
        console.log(productIds);
        setReInitialValues({
            ...discountToEdit,
            expire_at: convertDate(discountToEdit.expire_at, 'jD / jM / jYYYY'),
            for_all: discountToEdit.for_all ? true : false,
            product_ids: productIds
        })
    }
}, [])



  return (
    <ModalsContainer
      className="show d-block"
      id={"add_discount_modal"}
      title={discountToEdit ? `ویرایش کد تخفیف` : "افزودن کد تخفیف"}
      fullScreen={false}
      closeFunction={() => navigate(-1)}
    >
      <div className="container">
        <Formik
          initialValues={reInitialValues || initialValues}
          onSubmit={(values, actions) => onSubmit(values, actions, setData, discountToEdit, navigate)}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {(formik) => (
<Form>
        {/* برای دیدن خطای اعتبارسنجی در صفحه */}
 
  <div className="row justify-content-center">
    <div className="col-12 ">

      {/* عنوان کد */}
      <FormikControl
        control="input"
        type="text"
        name="title"
        formik={formik}
        label="عنوان کد"
        placeholder="کیبورد را در حالت فارسی قرار دهید"
      />

      {/* کد تخفیف */}
      <FormikControl
        control="input"
        type="text"
        name="code"
        label="کد تخفیف"
        formik={formik}
        placeholder="کیبورد را در حالت لاتین قرار دهید"
      />

      {/* درصد تخفیف */}
      <FormikControl
        control="input"
        type="number"
        name="percent"
        formik={formik}
        label="درصد تخفیف"
        placeholder="فقط عدد"
      />

      {/* تاریخ انقضاء */}
      <FormikControl
        control="date"
        formik={formik}
        name="expire_at"
        label="تاریخ انقضاء"
        initialDate={discountToEdit?.expire_at || undefined}
        yearsLimit={{ from: 10, to: 10 }}
      />

      {/* سوئیچ برای همه محصولات */}
      <div className="my-3">
        <FormikControl
          control="switch"
          name="for_all"
          label="برای همه محصولات"
        />
      </div>

      {/* انتخاب محصول در صورت فعال نبودن سوئیچ */}
      {!formik.values.for_all ? (
        <div className="mb-3">
          <FormikControl
            className="animate__animated animate__shakeX"
            label="محصول مورد نظر را انتخاب کنید"
            control="searchableSelect"
            options={allProducts}
            name="product_ids"
            firstItem="محصول مورد نظر را انتخاب کنید..."
            resultType="string"
            initialItems={selectedProducts}
          />
        </div>
      ) : null}

      {/* دکمه ذخیره */}
      <div className="btn_box text-center mt-4">
        <SubmitButton formik={formik}/>
      </div>

    </div>
  </div>
</Form>



          )}
        </Formik>
      </div>
    </ModalsContainer>
  );
}
