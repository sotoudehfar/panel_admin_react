import { CategoryContextContainer } from "../../context/categoryContext";
import AddAtributs from "./AddAtributs";
import CategoryTable from "./categoryTable";

export default function Category() {
  return (
    <>
   <CategoryContextContainer>
      <div id="manage_product_category" className="manage_product_category main_section " >
           <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
        <CategoryTable />
        <AddAtributs/>
      </div>
   </CategoryContextContainer>
    
    </>
  );
}
