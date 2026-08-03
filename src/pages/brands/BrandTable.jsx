import PaginatedTable from "../../components/PaginatedTable";
import AddBrand from "./AddBrand";
import { useEffect, useState } from "react";
import Action from "../category/tableAddition/Action";
import { apiPath } from "../../services/httpService";
import { getAllBrandsService } from "../../services/brands";

export default function BrandTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات " },
  ];

  const additionField = [
    {
      title: "لوگو",
      elements: (rowData) =>
        rowData.logo ? (
          <img src={apiPath + "/" + rowData.logo} width="40" />
        ) : null,
    },
    {
      title: "عملیات",
      elements: (rowData) => <Action rowData={rowData} />,
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
  };

const handleGetAllBrands = async () => {
  try {
    setLoading(true);

    const res = await getAllBrandsService();

    if (res.status === 200) {
      setData(res.data.data);
    }
  } catch (error) {
    console.error("خطا در دریافت برندها:", error);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  handleGetAllBrands();
}, []);

  return (
    <>


      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={5}
        searchParams={searchParams}
        loading={loading}
      >
        <AddBrand setData={setData} />
      </PaginatedTable>

    </>
  );
}
