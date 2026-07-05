import { useState, useEffect } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesServices } from "../../services/category";
import { AlertForm } from "../../layout/util/AlertForm";
import ShowInMenu from "./tableAddition/ShowInMenu";
import Action from "./tableAddition/Action";
import { Outlet, useParams } from "react-router-dom";
import { convertDate } from "../../layout/util/convertDate";

export default function CategoryTable() {


  // uses params for recieve row Id from Action Component
  const params = useParams();

  const [data, setData] = useState([]);

  const handleGetCategories = async () => {

    try {
      const res = await getCategoriesServices(params.categoryId);

      if (res.status === 200) {
        setData(res.data.data);
      } else {
        AlertForm("خطا!", res.data.message, "error");
      }
    } catch (error) {
      AlertForm("خطا!", "مشکلی در ارتباط با سرور پیش آمده است", "error");
    }
  };

  useEffect(() => {
    handleGetCategories();
  }, [params.categoryId]);

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
      elements: (rowData) => <Action rowData={rowData} />,
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
   {
    data.length ? (

      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={4}
      >
        <AddCategory />
      </PaginatedTable>

    ): (
      <h4 className="text-center my-5 text-danger">رکوردی برای نمایش وجود ندارد</h4>
    )
   }
    </>
  );
}
