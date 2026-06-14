import { AdminContextContainer } from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hook/authHook";

export default function AdminLayout() {
 const [loading , islogin] = useIsLogin()
  return (
    <AdminContextContainer>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا کمی صبر کنید</h1>
      ) : islogin ? (
        <div>
          <Navbar />
          <Sidebar />
          <Content />
        </div>
      ) : (
        <Navigate to={"/auth/login"} />
      )}
    </AdminContextContainer>
  );
}
