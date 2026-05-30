import PaginatedTable from "../../components/PaginatedTable";
import AddCategory from "./AddCategory";

export default function CategoryTable() {
  const data = [
    { id: "1", Category: "سبحان", title: "توپ", price: "11111", stock: "5", status: "1" },
    { id: "2", Category: "آنیسا", title: "موبایل", price: "2میلیون", stock: "5", status: "2" },
    { id: "3", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
    { id: "4", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
    { id: "5", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
    { id: "6", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
    { id: "7", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
    { id: "8", Category: "سروش", title: "گوشی", price: "70میلیون", stock: "5", status: "1" },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];

  const additionalElements = () => {
    // فقط آیکون‌ها را برمی‌گردانیم، بدون تگ tr یا td اضافه
    return (
      <>
        <i
          className="fas fa-project-diagram text-info mx-1 pointer has_tooltip"
          title="زیرمجموعه"
        ></i>
        <i
          className="fas fa-edit text-warning mx-1 pointer has_tooltip"
          title="ویرایش دسته"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_modal"
        ></i>
        <i
          className="fas fa-plus text-success mx-1 pointer has_tooltip"
          title="افزودن ویژگی"
          data-bs-toggle="modal"
          data-bs-target="#add_product_category_attr_modal"
        ></i>
        <i
          className="fas fa-times text-danger mx-1 pointer has_tooltip"
          title="حذف دسته"
        ></i>
      </>
    );
  };

  const additionField = {
    title: "عملیات",
    element: () => additionalElements(),
  };

  const searchParams = {
    title : "جستجو",
    placeholder : "قمستی از عنوان را وارد کنید",
    searchField : "title"

  }

  return (
    <PaginatedTable
        data={data}
      dataInfo={dataInfo}
      additionField={additionField}
      searchParams={searchParams}
      numOfPage= {4}
    >
      <AddCategory/>
    </PaginatedTable>

   
  );
}