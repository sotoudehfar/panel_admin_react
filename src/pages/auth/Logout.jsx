import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AlertForm } from "../../layout/util/AlertForm";
import { LogoutService } from "../../services/auth";

export default function Logout() {
  const [loading, setLoading] = useState(true);

const handleLogout = async () => {
  try {
    const res = await LogoutService();

    if (res.status === 200) {
      localStorage.removeItem("loginToken");
    } else {
      AlertForm("متاسفم دوست من", res.data.message, "error");
    }
  } catch (error) {
    AlertForm("", "متاسفانه خطایی از سمت سرور رخ داده است", "error");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center waiting_center">لطفا اندکی صبر کنید</h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
}
