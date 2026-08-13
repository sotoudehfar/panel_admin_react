import { useEffect, useState } from "react";
import PaginatedTable from "../../components/PaginatedTable";
import AddGuaranty from "./AddGuaranty";
import Actions from "./Actions";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";
import {
  deleteGuaranteeServise,
  getAllGuaranteeService,
} from "../../services/guaranty";

export default function GuarantiTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [guaranteetoEdit, setGuaranteetoEdit] = useState(null);

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان" },
    { field: "descriptions", title: "توضحیات" },
    { field: "length", title: "مدت گارانتی" },
    { field: "lenght_unit", title: "واحد" },
  ];
  const additionField = [
    {
      title: "عملیات",
      elements: (rowData) => (
        <Actions
          rowData={rowData}
          setGuaranteetoEdit={setGuaranteetoEdit}
          handleDeleteGuarantee={handleDeleteGuarantee}
        />
      ),
    },
  ];

  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };


  const handleGetAllGuarantees = async () => {
  try {
    setLoading(true);
    const res = await getAllGuaranteeService();
    if (res?.status === 200) {
      setData(res.data.data);
    }
  } catch (error) {
    console.error("خطا در دریافت گارانتی‌ها:", error);
  } finally {
    setLoading(false);
  }
};

  const handleDeleteGuarantee = async (guarantee) => {
    if (
      await Confirm(
        "حذف گارانتی",
        `آیا از حذف ${guarantee.title} اطمینان دارید؟`,
      )
    ) {
      const res = await deleteGuaranteeServise(guarantee.id);

      if (res?.status === 200) {
        AlertForm("انجام شد", res.data.message, "success");

        setData((lastData) =>
          lastData.filter((item) => item.id !== guarantee.id),
        );
      }
    }
  };

  useEffect(() => {
    handleGetAllGuarantees();
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
        <AddGuaranty
          setData={setData}
          guaranteeToEdit={guaranteetoEdit}
          setGuaranteetoEdit={setGuaranteetoEdit}
        />
      </PaginatedTable>
    </>
  );
}
