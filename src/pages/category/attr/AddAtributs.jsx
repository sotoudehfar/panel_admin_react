import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PrevPageButton from "../../../components/authForm/PrevPageButton";
import { addCategoryAttrService, getCategoriesAttrServices } from "../../../services/categoryAttr";
import { AlertForm } from "../../../layout/util/AlertForm";
import { Form , Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/authForm/form/FormikControl";
import SubmitButton from "../../../components/authForm/form/SubmitButton";




const initialValue = {
  title:"",
  unit:"",
  in_filter:true
}

const onSubmit = async (values, actions, categoryId, setData) => {
  try {
    const payload = {
      ...values,
      in_filter: values.in_filter ? 1 : 0,
    };

    const res = await addCategoryAttrService(categoryId, payload);

    if (res.status === 201) {
      AlertForm("آفرین", "رفیق ویژگی اضافه شد", "success");
      setData((oldData) => [...oldData, res.data.data]);
      actions.resetForm();
    }
  } catch (error) {
    AlertForm("بد شد رفیق", "رفیق ویژگی اضافه نشد", "warning");
  }
}

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

export default function AddAtributs() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      elements: (rowData) => <AttrAction rowData={rowData} />,
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
      AlertForm("مشگل!", error.message, "warning");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetCategoryAttrs();
  }, []);

  return (
    <>
      <div className="container pt-5">
        <h4 className="text-center my-3 ">مدیریت ویژگی های دسته بندی </h4>
        <h6 className="text-center my-3 ">
          ویژگی های :
          <span className="text-primary">
            {location.state.categoryData.title}
          </span>
        </h6>

        <div className="row justify-content-center">
          
          <Formik
            initialValues={initialValue}
            onSubmit={(values, actions)=> onSubmit(values , actions, location.state.categoryData.id, setData)}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="row my-3">
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
                    <SubmitButton/>
                </div>
          </div>
            </Form>
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
