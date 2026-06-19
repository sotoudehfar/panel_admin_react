import { useEffect, useState } from "react";
import { getUserServices } from "../services/auth";

export const useIsLogin = () => {
  const [islogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCheckLogin = async () => {
    try {
      const res = await getUserServices();
      setIsLogin(res.status === 200);
    } catch (error) {
      localStorage.removeItem("loginToken");
      setIsLogin(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");

    if (loginToken) {
      handleCheckLogin();
    } else {
      setIsLogin(false);
      setLoading(false);
    }
  }, []);

  return [loading, islogin];
};