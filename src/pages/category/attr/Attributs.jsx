import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaginatedTable from "../../../components/PaginatedTable";
import ShowInFilter from "./ShowInFilter";
import AttrAction from "./AttrAction";
import PrevPageButton from "../../../components/authForm/PrevPageButton";
import { AlertForm, Confirm } from "../../../layout/util/AlertForm";
import AddAttr from "./AddAttr";
import {
  deleteCategoryAttrService,
  getCategoriesAttrServices,
} from "../../../services/categoryAttr";

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
      elements: (rowData) => (
        <AttrAction
          rowData={rowData}
          attrToedit={attrToedit}
          setAttrToEdite={setAttrToEdite}
          handleDeleteCategoryAttrs={handleDeleteCategoryAttrs}
        />
      ),
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

  //  “We need to send you the row that should be deleted in this function.”
  const handleDeleteCategoryAttrs = async (attr) => {
    if (
      await Confirm(`حذف ${attr.title}`, "آیا از حذف این رکورد اطمینان دارید ؟")
    ) {
      try {
        const res = await deleteCategoryAttrService(attr.id);
        if (res.status === 200) {
          AlertForm("تبریک می گم", res.data.message, "success");
          // setData(data.filter(d=>d.id != attr.id))
          setData((lastData) => [...lastData].filter((d) => d.id !== attr.id));
        }
      } catch (error) {
        AlertForm("دیدی چی شد", "رکورد قابل حذف نیست", "warning");
      }
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
        in_filter: attrToedit.in_filter ? true : false,
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
          <AddAttr
            reInitValues={reInitValues}
            location={location}
            setData={setData}
            attrToedit={attrToedit}
            setAttrToEdite={setAttrToEdite}
          />

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
