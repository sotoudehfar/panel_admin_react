import {  Form, Formik } from "formik";
import ModalsContainer from "../../components/ModalsContainer";
import FormikControl from "../../components/authForm/form/FormikControl";
import { useContext, useEffect, useState } from "react";
import { getCategoriesServices, getSingleCategorieServices} from "../../services/category";
import { AlertForm } from "../../layout/util/AlertForm";
import SubmitButton from "../../components/authForm/form/SubmitButton";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../context/categoryContext";
import { initialValue, onSubmit, validationSchema } from "./core";




export default function AddCategory({setForceRender}) {


  const params = useParams()
  const [parents, setParents] = useState([]);
  const [reInitialValue, setReIntialValue] = useState(null)
  const {editId ,  SetEditId} = useContext(CategoryContext)
  const [editCategory, setEditCategory]=useState(null)

  const handleGetParentCategories = async () => {
    try {
      const res = await getCategoriesServices();
      if (res.status == 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          }),
        );
      }
    } catch (error) {
      AlertForm("مشگل کوچولو", "متاسفانه دسته نبدی والد دریافت نشد", "warning");
    }
  };

  // this section for upload information of server ?
  const handleGetSingleCategory = async()=>{
    try {
      const res = await getSingleCategorieServices(editId)
      if (res.status == 200) {
        const oldCategory = res.data.data;
        setEditCategory(oldCategory)      
      }
    } catch (error) {
      AlertForm("مشگل!", "متاسفانه دسته موردنظر پیدا نشد" , "warning")
    }
  }

  useEffect(()=>{
 if (editId) handleGetSingleCategory()
  else setEditCategory(null)
  },[editId])
  
  
  useEffect(() => {
    handleGetParentCategories();
  }, []);

  useEffect(()=>{
    if (editCategory){
      setReIntialValue({
        parent_id : editCategory.parent_id || "",
        title : editCategory.title,
        description:editCategory.description,
        image:null,
        is_active : editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      })
    }else if (params.categoryId) {
      setReIntialValue(
      { 
        ...initialValue,
        parent_id : params.categoryId}
      )
    }else {
      setReIntialValue(null)
    }
  },[params.categoryId , editCategory])



  return (
    <>
      <button
        className="btn btn-success d-flex justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#add_product_category_modal"
        onClick={()=> SetEditId(null)}
      >
        <i className="fas fa-plus text-light"></i>
      </button>

      <ModalsContainer
        fullscreen={true}
        id="add_product_category_modal"
        title={ editId ? "ویرایش : "+(editCategory ? editCategory.title :"" ): "افزودن دسته محصولات : "}
     
      >
        <Formik
          initialValues={ reInitialValue  || initialValue}
          
  onSubmit={(values, actions) => { return onSubmit(values, actions, setForceRender, editId);

  }}
            validationSchema={validationSchema}
          //  use enableReinitialize for use reInitialValue
          enableReinitialize
        >
          <Form>
            <div className="container">
              <div className="row justify-content-center">
                {parents.length > 0 ? (
                  <FormikControl
                    className="col-md-6 col-lg-8"
                    control="select"
                    options={parents}
                    name="parent_id"
                    label="دسته والد"
                  />
                ) : null}

                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان دسته"
                  placeholder="عنوان دسته"
                />
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="textarea"
                  type="text"
                  name="description"
                  label="توضیحات"
                  placeholder="توضیحات"
                />
              {!editId ? (
                <FormikControl
                  className="col-md-6 col-lg-8"
                  control="file"
                  name="image"
                  label="تصویر"
                  placeholder="تصویر"
                />
              ): null

              }
                <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="is_active"
                      label="وضعیت فعال"
                    />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mx-lg-5">
                    <FormikControl
                      control="switch"
                      name="show_in_menu"
                      label="نمایش در منو"
                    />
                  </div>
                </div>
                <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                  <SubmitButton />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </ModalsContainer>
    </>
  );
}
