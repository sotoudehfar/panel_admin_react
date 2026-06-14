import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import { useIsLogin } from "../../hook/authHook";

export default function AuthLayout() {
   const [loading , islogin] = useIsLogin()
  
  return (
    <>
      <div className="limiter">
        {
          loading ? (
            <h1 className="text-center">لطفا کمی صبر کنید</h1>
          ) : !islogin ? (
        <div className="container-login100">
          <Routes>
            <Route path="/auth/login" element={<Login />}></Route>
          </Routes>
        </div>
  
          ):(
            <Navigate to={"/"}/>
          )

        }
    </div>
    </>
  );
}
