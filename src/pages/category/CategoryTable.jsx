import { useState, useEffect } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { deleteCategoryServise, getCategoriesServices } from "../../services/category";
import ShowInMenu from "./tableAddition/ShowInMenu";
import Action from "./tableAddition/Action";
import { Outlet, useParams } from "react-router-dom";
import { convertDate } from "../../layout/util/convertDate";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";

export default function CategoryTable() {

  // uses params for recieve row Id from Action Component
  const params = useParams();
  const [data, setData] = useState([]);
  const [forceRender, setForceRender] = useState(0)
  const [loading, setLoading] = useState(false);

  const handleGetCategories = async () => {
    setLoading(true)
    try {
      const res = await getCategoriesServices(params.categoryId);
      if (res.status === 200) {
        setData(res.data.data);
     
      }
    } catch (error) {
      console.log(error.mesage)
    }finally {
         setLoading(false)
    }
  };

const handleDeleteCategory = async (rowData) => {
  // منتظر پاسخ کاربر می‌ماند (true یا null)
  const isConfirmed = await Confirm("حذف دسته‌بندی", `آیا از حذف " ${rowData.title} " اطمینان دارید؟ `);

  if (isConfirmed) {
    try {
      const res = await deleteCategoryServise (rowData.id); // دقت کنید نام سرویس غلط املایی نداشته باشد (Service)
      
      if (res.status === 200) {
        setData(data.filter(d=>d.id !== rowData.id))
        AlertForm("انجام شد", res.data.message, "success");
      }
    } catch (error) {
      AlertForm("خطا", "مشکلی در حذف دسته بندی پیش آمده است", "error");
    }
  }
};


  useEffect(() => {
    handleGetCategories();
  }, [params.categoryId , forceRender]);

  useEffect(() => {
  if (data.length) {
    console.log("First row:", data[0]);
  }
}, [data]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
  
  ];

  const additionField = [
    {
      title: "تاریخ",
      elements: (rowData) => convertDate(rowData.created_at) ,
    },
    {
      title: "نمایش در منو",
      elements: (rowData) => <ShowInMenu rowData={rowData} />,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Action rowData={rowData} handleDeleteCategory = {handleDeleteCategory}/>,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  return (
    <>
      <Outlet />
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={8}
        loading={loading}

      >
        <AddCategory  setForceRender={setForceRender}/>
      </PaginatedTable>

    </>
  );
}
