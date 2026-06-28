import { useContext } from "react";

import { AdminContext } from "../context/adminLayoutContext";
import Product from "./product/Product";
import Category from "./category/Category";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Colors from "./colors/Colors";
import Garanties from "./garanties/Garanties";
import Brands from "./brands/Brands";
import Comments from "./comments/Comments";
import Deliveries from "./deliveries/Deliveries";
import Cards from "./cards/Cards";
import Orders from "./orders/Orders";
import Users from "./users/Users";
import Rolles from "./rolles/Rolles";
import Questions from "./questions/Questions";
import Permissions from "./peromissions/Permissions";
import Discounts from "./discounts/Discounts";
import Logout from "./auth/Logout";

export default function Content() {
  const { showSidebar } = useContext(AdminContext);

  return (
    <section
      id="content_section"
      className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/garanties" element={<Garanties />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/rolls" element={<Rolles />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/permissions" element={<Permissions />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Dashboard />} /> /*if user enter other word
        redirect to dashbord*/
      </Routes>
    </section>
  );
}
