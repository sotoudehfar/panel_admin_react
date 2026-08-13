import PaginatedTable from "../../components/PaginatedTable";
import AddBrand from "./AddBrand";
import { useEffect, useState } from "react";
import { apiPath } from "../../services/httpService";
import { deleteBrandServise, getAllBrandsService } from "../../services/brands";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";
import Actions from "./Actions";

export default function BrandTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brandToEdit, setBrandToEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "original_name", title: "عنوان لاتین" },
    { field: "persian_name", title: "عنوان فارسی" },
    { field: "descriptions", title: "توضیحات " },
  ];

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

  const handleDeleteBrand = async (brand) => {
   if (await Confirm('حذف برند','آیا از حذف ${brands.original_name}اطمینان دارید  ؟ ')) {
     const res = await deleteBrandServise(brand.id);
     if (res.status===200){
      AlertForm('انجام شد', res.data.message, 'success');
      setData((lastData) => lastData.filter((item) => item.id !== brand.id));
     }
   }
  }
   
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
      elements: (rowData) => (
      <Actions
        rowData={rowData}
        setBrandToEdit={setBrandToEdit}
        handleDeleteBrand={handleDeleteBrand}
      />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "original_name",
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
        <AddBrand
          setData={setData}
          brandToEdit={brandToEdit}
          setBrandToEdit={setBrandToEdit}
        />
      </PaginatedTable>
    </>
  );
}
