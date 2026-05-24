import { useContext } from "react";

import { AdminContext } from "../context/adminLayoutContext";
import Product from "./product/Product";

export default function Content() {
  const { showSidebar } = useContext(AdminContext);
  console.log(showSidebar)
  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      {/* <Dashboard/> */}
      {/* <Category /> */}
      <Product/>
    </section>
  );
}
