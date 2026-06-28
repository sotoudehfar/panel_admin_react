import { useState, useEffect } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";
import { getCategoriesServices } from "../../services/category";
import { AlertForm } from "../../layout/util/AlertForm";
import ShowInMenu from "./tableAddition/ShowInMenu";
import Action from "./tableAddition/Action";
import { useLocation, useParams } from "react-router-dom";

export default function CategoryTable() {
  // uses params for recieve row Id from Action Component
  const { categoryId } = useParams();
  // uses useLocation for recieve rowData
  const location = useLocation();
  const [data, setData] = useState([]);

  const handleGetCategories = async () => {
    try {
      const res = await getCategoriesServices(categoryId);

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
  }, [categoryId]);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "parent_id", title: "والد" },
    { field: "create_at", title: "تاریخ" },
  ];

  const additionField = [
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
      {location.state ? (
        <h5 className="text-center">
          <span>زیر گروه:</span>
          <span className="text-info">{location.state.parentData.title}</span>
        </h5>
      ) : null}
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        searchParams={searchParams}
        numOfPage={4}
      >
        <AddCategory />
      </PaginatedTable>
    </>
  );
}
