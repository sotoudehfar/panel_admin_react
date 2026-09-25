import { Form, Formik } from "formik";
import { initialValues, onSubmit, validationSchema } from "./core";
import { useEffect, useState } from "react";
import { getCategoriesServices } from "../../services/category";
import SpinnerLoad from "../../components/SpinnerLoad";
import FormikControl from "../../components/authForm/form/FormikControl";
import PrevPageButton from "../../components/authForm/PrevPageButton";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import { getAllBrandsService } from "../../services/brands";
import { getAllColorsService } from "../../services/color";
import { getAllGuaranteeService } from "../../services/guaranty";

export default function AddProduct() {
  const [parentCategories, setParentCategories] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  // const [selectedCategories, setSelectedCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
 const [guarantees, setGuarantees] = useState([]);

  const getAllParentCategories = async () => {
    const res = await getCategoriesServices();

    if (res.status === 200) {
      setParentCategories(
        res.data.data.map((d) => {
          return { id: d.id, value: d.title };
        }),
      );
    }
    console.log(parentCategories);
  };

const getAllBrands = async () => {
  const res = await getAllBrandsService();
  if (res.status === 200) {
    setBrands(
      res.data.data.map((d) => {
        return { id: d.id, value: d.original_name };
      })
    );
  }
};

const getAllColors = async()=>{
   const res = await getAllColorsService();
  if (res.status === 200) {
    setColors(
      res.data.data.map((d) => {
        return { id: d.id, value: d.title };
      })
    );
  }
}
const getAllGuarantees = async()=>{
   const res = await getAllGuaranteeService();
  if (res.status === 200) {
    setGuarantees(
      res.data.data.map((d) => {
        return { id: d.id, value: d.title };
      })
    );
  } 
}

   useEffect(() => {
    getAllParentCategories();
    getAllBrands();
    getAllColors();
    getAllGuarantees()

 
  }, []);

  useEffect(() => {
    getAllParentCategories();
  }, []);

  const handleSetMainCategories = async (value) => {
    setMainCategories("waiting");
    if (value > 0) {
      const res = await getCategoriesServices(value);
      if (res.status === 200) {
        setMainCategories(
          res.data.data.map((d) => {
            return { id: d.id, value: d.title };
          }),
        );
      }
    } else {
      setMainCategories([]);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => onSubmit(values, actions)}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <div className="container mb-5">
                <h4 className="text-center my-3 ">افزودن محصول جدید</h4>
                <div className="text-left col-md-6 col-lg-8 m-auto my-3">
                  <PrevPageButton />
                </div>

                <div className="row justify-content-center">
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parentCategories}
                    name="parentCats"
                    label="دسته والد"
                    firstItem="دسته مورد نظر را انتخاب کنید"
                    handleOnchange={handleSetMainCategories}
                  />

                  {mainCategories === "waiting" ? (
                    <SpinnerLoad isSmall={true} colorClass="text-primary" />
                  ) : null}
                  <FormikControl
                    control="searchableSelect"
                    options={
                      typeof mainCategories == "object" ? mainCategories : []
                    }
                    label="دسته اصلی"
                    name="category_ids"
                    firstItem="دسته  مورد نظر را انتخاب کنید"
                    resultType="string"
                      className="col-md-6 col-lg-8" // 👈 این کلاس باید اضافه شود تا نصف عرض شود

                  />

                  <FormikControl
                    label="عنوان *"
                    className="col-md-6 col-lg-8"
                    control="input"
                    name="tilte"
                    type="text"
                    placeholder="فقط از حروف و اعداد استفاده کنید"
                  />

                  <FormikControl
                    label="قیمت *"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="price"
                    placeholder="  (تومان(فقط از اعداد استفاده کنید"
                  />

                  <FormikControl
                    label="وزن"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="weight"
                    placeholder="فقط از اعداد استفاده کنید (گرم)"
                  />

                  <FormikControl
                    label="برند"
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={brands}
                    name="brand_id"
                    firstItem="برند مورد نظر را انتخاب کنید"
                  />

                  <FormikControl
                    label="رنگ"
                    className="col-md-6 col-lg-8"
                    control="searchableSelect"
                    options={colors}
                    name="color_id"
                    firstItem="رنگ مورد نظر را انتخاب کنید"
                    resultType="string"
                  />

                  <FormikControl
                    label="گارانتی"
                    className="col-md-6 col-lg-8"
                    control="searchableSelect"
                    options={guarantees}
                    name="garantee_id"
                    firstItem="گارانتی مورد نظر را انتخاب کنید"
                    resultType="string"
                  />

                  <FormikControl
                    label="توضیحات"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="descriptions"
                    firstItem="فقط از حروف و اعداد استفاده کنید"
                    resultType="string"
                  />

                  <FormikControl
                    label="توضیحات کوتاه"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="short_descriptions"
                    placeholder="فقط از حروف و اعداد استفاده کنید"
                  />
                  <FormikControl
                    label="توضیحات سبد"
                    className="col-md-6 col-lg-8"
                    control="textarea"
                    name="cart_descriptions"
                    placeholder="فقط از حروف و اعداد استفاده کنید"
                  />

                  <FormikControl
                    label="تصویر"
                    className="col-md-6 col-lg-8"
                    control="file"
                    name="image"
                    placeholder="تصویر"
                  />
                  <FormikControl
                    label="توضیح تصویر"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="text"
                    name="alt_image"
                    placeholder="فقط از حروف و اعداد استفاده کنید"
                  />

                  <FormikControl
                    label="کلمات کلیدی"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="text"
                    name="keywords"
                    placeholder="مثلا دست مریزاد"
                  />
                  <FormikControl
                    label="موجودی"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="stock"
                    placeholder="فقط از اعداد استفاده کنید"
                  />
                  <FormikControl
                    label="درصد تخفیف"
                    className="col-md-6 col-lg-8"
                    control="input"
                    type="number"
                    name="discount"
                    placeholder="فقط از اعداد استفاده کنید"
                  />

                  <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                    <SubmitButton />
                    <PrevPageButton className="me-2" />
                  </div>



                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
