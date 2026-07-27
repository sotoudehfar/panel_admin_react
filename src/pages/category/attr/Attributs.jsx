import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PrevPageButton from "../../../components/authForm/PrevPageButton";
import { addCategoryAttrService, editCategoryAttrService, getCategoriesAttrServices } from "../../../services/categoryAttr";
import { AlertForm } from "../../../layout/util/AlertForm";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/authForm/form/FormikControl";
import SubmitButton from "../../../components/authForm/form/SubmitButton";

const initialValue = {
  title: "",
  unit: "",
  in_filter: true
};

const onSubmit = async (values, actions, categoryId, setData, attrToedit, setAttrToEdite) => {
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

export default function Attributs() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [attrToedit, setAttrToEdite] = useState(null);
  const [reInitValues, setReInitialValues] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "unit", title: "واحد" },
  ];

  const additionField = [
    {
      title: "نمایش در فیلتر",
      elements: (rowData) => <ShowInFilter rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <AttrAction rowData={rowData} attrToedit={attrToedit} setAttrToEdite={setAttrToEdite} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetCategoryAttrs = async () => {
    setLoading(true);
    try {
      const res = await getCategoriesAttrServices(
        location.state.categoryData.id,
      );
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      AlertForm("مشکل!", error.message, "warning");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);

  // اصلاح این بخش برای گوش دادن به تغییرات attrToedit
  useEffect(() => {
    if (attrToedit) {
      setReInitialValues({
        title: attrToedit.title,
        unit: attrToedit.unit,
        in_filter: attrToedit.in_filter ? true : false
      });
    } else {
      setReInitialValues(null); // برگرداندن فرم به مقادیر اولیه خالی
    }
  }, [attrToedit]); // اضافه شدن وابستگی به تغییرات مقدار ویرایش

  return (
    <>
      <div className="container pt-5">
        <h4 className="text-center my-3 ">مدیریت ویژگی های دسته بندی </h4>
        <h6 className="text-center my-3 ">
          ویژگی های :
          <span className="text-primary">
            {location.state.categoryData?.title}
          </span>
        </h6>

        <div className="row justify-content-center">
          <Formik
            initialValues={reInitValues || initialValue}
            onSubmit={(values, actions) => onSubmit(values, actions, location.state.categoryData.id, setData, attrToedit, setAttrToEdite)}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formikProps) => (
              <Form>
                <div className="row my-3 justify-content-center align-items-center">
                  <FormikControl
                    control="input"
                    type="text"
                    name="title"
                    label="عنوان"
                    className="col-md-6 col-lg-4 my-1"
                    placeholder="عنوان ویژگی جدید"
                  />

                  <FormikControl
                    control="input"
                    type="text"
                    name="unit"
                    label="واحد"
                    className="col-md-6 col-lg-4 my-1"
                    placeholder="واحد ویژگی جدید"
                  />

                  <div className="col-8 col-lg-2 my-1">
                    <FormikControl
                      control="switch"
                      name="in_filter"
                      label="نمایش در فیلتر"
                    />
                  </div>

                  <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center my-1">
                    <SubmitButton />
                    {attrToedit ? (
                      <button 
                        type="button" // حتما type="button" باشد تا فرم را سابمیت نکند
                        className="btn btn-sm btn-secondary me-2" 
                        onClick={() => {
                          setAttrToEdite(null);
                          formikProps.resetForm(); // ریست کردن کلید‌ها و فیلدهای فرم بعد از انصراف
                        }}
                      >
                        انصراف
                      </button>
                    ) : null}
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          <hr />

          <PaginatedTable
            data={data}
            dataInfo={dataInfo}
            additionField={additionField}
            searchParams={searchParams}
            numOfPage={8}
            loading={loading}
          >
            <PrevPageButton />
          </PaginatedTable>
        </div>
      </div>
    </>
  );
}
