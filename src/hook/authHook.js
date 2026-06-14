import axios from "axios";
import { useEffect, useState } from "react";
import { resumeToPipeableStream } from "react-dom/server";

export const useIsLogin = () => {
  const [islogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    console.log("salam", loginToken);
    if (loginToken) {
      axios
        .get("https://ecomadminapi.azhadev.ir/api/auth/user", {
          headers: {
            Authorization: `Bearer ${loginToken.token}`,
          },
        })
        .then((res) => {
          setIsLogin(res.status === 200);
          setLoading(false);
        })
        .catch((e) => {
          localStorage.removeItem("loginToken");
          setIsLogin(false);
          setLoading(false);
        });
    } else {
      setIsLogin(false);
      setLoading(false);
    }
  }, []);
  
  return [loading , islogin]
};
