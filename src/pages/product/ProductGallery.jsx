import { useState } from "react";
import { useLocation } from "react-router-dom";

import { addProductImage, deleteProductImageService, setMainProductImageService } from "../../services/product";
import { AlertForm, Confirm } from "../../layout/util/AlertForm";
import { apiPath } from "../../services/httpService";
import PrevPageButton from "../../components/authForm/PrevPageButton";

export default function ProductGallery() {
  const location = useLocation();
  const { selectedProduct } = location.state || {};

  const [gallery, setGallery] = useState(selectedProduct?.gallery || []);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getImageUrl = (path) => {
    if (!path) return "";

    const rawPath =
      typeof path === "object"
        ? path.image || path.url || path.path || ""
        : String(path);

    if (!rawPath || rawPath === "[object Object]") return "";

    if (rawPath.startsWith("http://") || rawPath.startsWith("https://")) {
      return rawPath;
    }

    let base = (apiPath || "").replace(/\/$/, "");
    if (base.endsWith("/api")) {
      base = base.replace(/\/api$/, "");
    }

    const clean = rawPath.replace(/^\//, "");

    return `${base}/${clean}`;
  };

  const handleSelectImage = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setError(null);

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(image.type)) {
      return setError("لطفاً فقط از فایل با فرمت png و یا jpg استفاده کنید");
    }

    if (image.size > 512000) {
      return setError("حجم تصویر نباید بیشتر از ۵۰۰ کیلوبایت باشد");
    }

    setLoading(true);

    const formdata = new FormData();
    formdata.append("image", image);

    try {
      const res = await addProductImage(selectedProduct.id, formdata);

      if (res.data?.image && Array.isArray(res.data.image)) {
        setError(res.data.image[0]);
        return;
      }

      if (res?.status === 200 || res?.status === 201) {
        const newImage = res.data?.data || res.data;

        setGallery((old) => [
          ...old,
          {
            id: newImage?.id,
            is_main: newImage?.is_main ?? 0,
            image: newImage?.image || newImage?.path,
          },
        ]);
        AlertForm("موفق", "تصویر با موفقیت آپلود شد", "success");
      }
    } catch (err) {
      console.error(err);
      setError("خطا در ارسال تصویر به سرور");
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  };

const handleSetMainImage = async (imageId) => {
  setLoading(true);

  try {
    const res = await setMainProductImageService(imageId);

    if (res.status === 200) {
      AlertForm("انجام شد", res.data.message, "success");

      setGallery((old) =>
        old.map((img) => ({
          ...img,
          is_main: img.id === imageId ? 1 : 0,
        }))
      );
    }
  } catch (err) {
    console.error("خطا در تنظیم تصویر اصلی:", err);
    AlertForm("خطا", "مشکلی در تنظیم تصویر اصلی رخ داد", "error");
  } finally {
    // ✅ این بلوک همیشه اجرا می‌شود، حتی بعد از خطا
    setLoading(false);
  }
};


  const handleDeleteImage = async (imageId) => {
    if (await Confirm("آیا از حذف این تصویر اطمینان دارید؟")) {
      setLoading(true);
      try {
        const res = await deleteProductImageService(imageId);
        if (res.status === 200) {
          AlertForm("انجام شد", res.data?.message || "تصویر حذف شد", "success");
          setGallery((old) => old.filter((image) => image.id !== imageId));
        }
      } catch (err) {
        console.error(err);
        AlertForm("خطا", "مشکلی در حذف تصویر رخ داد", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mb-5 pt-5 mt-4">
      {/* ردیف بالای صفحه: تیتر وسط، دکمه بازگشت سمت چپ */}
      <div className="row align-items-center mb-4 pb-2 border-bottom">
        <div className="col-10 text-center">
          <h4>
            گالری تصاویر:{" "}
            <span className="text-primary">{selectedProduct?.title}</span>
          </h4>
          <smal className="text-secondary py-3">لطفا تصاویر در  سایز 600*600 و حداکثر 500 کلیوبایت اضافه شود</smal>
        </div>
        <div className="col-2 text-start">
          <PrevPageButton />
        </div>
      </div>

      {/* نمایش پیام خطا در صورت وجود */}
      {error && (
        <div className="alert alert-danger py-2 text-center mb-3">
          {error}
        </div>
      )}

      {/* بخش تصاویر و کارت افزودن تصویر */}
      <div className="row g-3">
        {/* ۱. تصاویر موجود */}
 {gallery && gallery.length > 0 &&
  gallery.map((item) => (
    <div key={item.id} className="col-6 col-sm-4 col-md-3">
      {/* در این قسمت شرط اضافه شده تا اگر is_main بود، ضلع پایین سبز شود */}
      <div
        className={`position-relative border rounded p-1 text-center bg-light shadow-sm ${
          item.is_main ? "border-bottom border-success border-3" : ""
        }`}
      >
        <img
          src={getImageUrl(item.image)}
          alt="product"
          className="bg-white ms-1 w-100 rounded"
          style={{ height: "140px", objectFit: "cover" }}
        />
        
        <div className="image_action-Container mt-2">
          {/* اگر اصلی نیست، آیکن انتخاب را نشان بده */}
          {!item.is_main ? (
            <i
              className="fas fa-clipboard-check text-success pointer hoverable_text mx-2 font_1_2"
              title="انتخاب به عنوان تصویر اصلی"
              onClick={() => handleSetMainImage(item.id)}
            ></i>
          ) : (
            /* اگر اصلی هست، تیک یا عنوان تصویر اصلی نشان داده بشه */
            <span className="badge bg-success mx-1">تصویر اصلی</span>
          )}

          {/* کلید حذف */}
          <i
            className="fas fa-trash-alt text-danger pointer hoverable_text mx-2 font_1_2"
            title="حذف این تصویر"
            onClick={() => handleDeleteImage(item.id)}
          ></i>
        </div>
      </div>
    </div>
  ))}

        {/* ۲. کارت دکمه + (افزودن تصویر جدید) */}
        <div className="col-6 col-sm-4 col-md-3">
          <label
            htmlFor="gallery_image_input"
            className="border rounded d-flex flex-column justify-content-center align-items-center bg-white shadow-sm h-100"
            style={{
              minHeight: "170px",
              cursor: loading ? "not-allowed" : "pointer",
              borderStyle: "dashed",
            }}
          >
            {loading ? (
              <div className="text-primary text-center">
                <i className="fas fa-spinner fa-spin fa-2x"></i>
                <div className="small mt-1">در حال آپلود...</div>
              </div>
            ) : (
              <div
                className="border border-success rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "55px", height: "55px" }}
              >
                <i className="fas fa-plus fa-2x text-success"></i>
              </div>
            )}
            <input
              id="gallery_image_input"
              type="file"
              className="d-none"
              accept="image/*"
              onChange={handleSelectImage}
              disabled={loading}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
