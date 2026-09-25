import axios from "axios";
import config from "./config.json";
import { AlertForm } from "../layout/util/AlertForm";

export const apiPath = config.onlinePath;

const axiosInstance = axios.create({
  baseURL: apiPath,
  timeout: 20000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let status = "خطای شبکه";
    let message =
      "ارتباط با سرور برقرار نشد؛ لطفاً اینترنت یا وضعیت سرور را بررسی کنید.";

    if (error.response) {
      status = error.response.status;

      message =
        error.response.data?.message ||
        error.response.data?.error ||
        "خطایی از سمت سرور رخ داده است.";

      if (status === 401) {
        localStorage.removeItem("loginToken");

        if (!window.location.pathname.includes("/login")) {
          window.location.href = "/login";
        }

        message = "نشست شما منقضی شده است؛ لطفاً دوباره وارد شوید.";
      } else if (status === 403) {
        message = "شما اجازه دسترسی به این بخش را ندارید.";
      } else if (status === 404) {
        message = "مسیر درخواستی پیدا نشد.";
      } else if (status >= 500) {
        message = "خطای داخلی سرور رخ داده است.";
      }
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        message = "زمان پاسخ‌گویی سرور به پایان رسید.";
      }
    } else {
      status = "خطا";
      message = error.message || "خطای ناشناخته رخ داده است.";
    }

    if (typeof AlertForm === "function") {
      AlertForm(status, message, "error");
    }

    console.error("HTTP Error:", error);

    return Promise.reject(error);
  }
);

export const httpService = (
  url,
  method = "GET",
  data = null,
  customHeaders = {}
) => {
  let token = null;

  try {
    const tokenInfo = JSON.parse(
      localStorage.getItem("loginToken") || "null"
    );

    token = tokenInfo?.token || null;
  } catch (error) {
    console.error("خطا در خواندن loginToken:", error);
  }

  const cleanUrl = String(url)
    .trim()
    .replace(/^\/+|\/+$/g, "");

  const finalUrl = cleanUrl.startsWith("api/")
    ? `/${cleanUrl}`
    : `/api/${cleanUrl}`;

  return axiosInstance({
    url: finalUrl,
    method,
    data,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      "Content-Type": "application/json",
      ...customHeaders,
    },
  });
};

export default httpService;
