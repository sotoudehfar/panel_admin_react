import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import PaginatedTable from "../../components/PaginatedTable";
import AddButtonLink from "../../components/authForm/form/AddButtonLink";
import { deleteDiscountService, getAllDiscountsService } from "../../services/discounts";
import { convertDate } from "../../layout/util/convertDate";
import Actions from "./Actions";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";

const DiscountTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataInfo = [
    {
      field: "id",
      title: "شناسه",
    },
    {
      field: "title",
      title: "عنوان",
    },
    {
      field: "code",
      title: "کد/رنگ",
    },
    {
      field: "percent",
      title: "درصد",
    },
    {
      field: "",
      title: "تاریخ انقضا",
      elements: (rowData) => convertDate(rowData?.expireDate),
    },
    {
      field: "",
      title: "وضعیت",
      elements: (rowData) => (rowData?.status ? "فعال" : "غیرفعال"),
    },
    {
      field: null,
      title: "مربوط به",
      elements: (rowData) => rowData?.relatedTo || "-",
    },
    {
      field: null,
      title: "عملیات",
      elements:(rowData) =><Actions rowData={rowData} handleDeleteDiscount = {handleDeleteDiscount}/> ,
    },
  ];


  const searchParams = {
    title: "جستجو",
    placeholder: "قسمتی از عنوان را وارد کنید",
    searchField: "title",
  };

  const handleGetAllDiscounts = async () => {
    setLoading(true);
    const res = await getAllDiscountsService();
    setLoading(false);

    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  
const handleDeleteDiscount = async (discount) => {
    if (await Confirm(discount.title, 'آیا از حذف این کد تخفیف اطمینان دارید؟')) {
        const res = await deleteDiscountService(discount.id)
        if (res.status === 200) {
            AlertForm('حذف شد !', res.data.message, 'success');
            setData(old => old.filter(d => d.id !== discount.id))
        }
    }
}




  useEffect(() => {
    handleGetAllDiscounts();
  }, []);

  return (
    <>
      {/* دکمه افزودن بیرون از جدول قرار می‌گیرد تا جایگاه درستی داشته باشد */}
      <div className="d-flex justify-content-end mb-3">
        <AddButtonLink href={"/discounts/add-discount-code"} />
      </div>

      <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPage={8}
        searchParams={searchParams}
        loading={loading}
      />

      {/* اوت‌لت کاملاً بیرون از جدول قرار می‌گیرد تا مودال بدون مشکل رندر شود */}
      <Outlet  context={{setData}}/>
    </>
  );
};

export default DiscountTable;
