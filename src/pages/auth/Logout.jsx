import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AlertForm } from "../../layout/util/AlertForm";

export default function Logout() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = JSON.parse(localStorage.getItem("loginToken"))?.token;

    axios.get("https://ecomadminapi.azhadev.ir/api/auth/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {

      if (res.status === 200) {
        localStorage.removeItem("loginToken");
        setLoading(false);
      } else {
        AlertForm("", res.data.message, "error");
        setLoading(false);
      }

    })
    .catch(() => {

      AlertForm("", "متاسفانه خطایی از سمت سرور رخ داده است", "error");
      setLoading(false);

    });

  }, []);

  return (
    <>
      {loading ? (
        <h1 className="text-center waiting_center">
          لطفا اندکی صبر کنید
        </h1>
      ) : (
        <Navigate to="/auth/login" />
      )}
    </>
  );
}
