import { useContext } from "react";

import { AdminContext } from "../context/adminLayoutContext";
import Product from "./product/Product";
import Category from "./category/Category";

export default function Content() {
  const { showSidebar } = useContext(AdminContext);
 
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      {/* <Dashboard/> */}
      <Category />
      {/* <Product/> */}
    </section>
  );
}
