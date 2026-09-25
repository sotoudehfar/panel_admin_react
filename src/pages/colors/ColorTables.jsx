import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";
import AddColor from "./AddColor";
import Actions from "./Action";
import { deleteColorServise, getAllColorsService } from "../../services/color";

export default function ColorTables() {
 const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [colortoEdit, setColortoEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد رنگ" },

  ];
  const additionField = [
  {
 title:"رنگ",
 elements : (rowData)=> <div className="w-100 h-100 d-block" style={{background : rowData.code, color:rowData.code,border: "1px solid #ddd",borderRadius: "4px"}}>
 title={rowData.code}
 </div>
  },
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions rowData={rowData} setColortoEdit={setColortoEdit} handleDeleteColor={handleDeleteColor} />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };


  const handleGetAllColors = async () => {
  try {
    setLoading(true);
    const res = await getAllColorsService();
    if (res?.status === 200) {
      setData(res.data.data);
    }
  } catch (error) {
    console.error("خطا در دریافت رنگ ها:", error);
  } finally {
    setLoading(false);
  }
};

  const handleDeleteColor = async (color) => {
    if (
      await Confirm(
        "حذف رنگ ",
        `آیا از حذف ${color.title} اطمینان دارید؟`,
      )
    ) {
      const res = await deleteColorServise(color.id);

      if (res?.status === 200) {
        AlertForm("انجام شد", res.data.message, "success");

        setData((lastData) =>
          lastData.filter((item) => item.id !== color.id),
        );
      }
    }
  };

  useEffect(() => {
    handleGetAllColors();
  }, []);
  return (
    <>
      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPage={8}
        searchParams={searchParams}
        loading={loading}
      >
        <AddColor  setData={setData}  colorToEdit={colortoEdit} setColortoEdit={setColortoEdit}
        />
      </PaginatedTable>
    </>



  
  );
}
