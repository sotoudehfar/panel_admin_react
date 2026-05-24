import { AdminContextContainer } from "../../context/adminLayoutContext";
import Content from "../../pages/Content";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";


export default function Panel() {
   return (
  
    <AdminContextContainer>

      <div>
         <Content/>
         <Navbar/>
         <Sidebar/>
         
        </div>
    </AdminContextContainer>




  )
}



    //     <section id="content_section" 
    //      className={`bg-light py-2 px-3 ${showSlidebar ? "with_sidebar" : null}  `}>
    //    {/* <!-- #region(collapsed) add product section start --> */}
    //     <div id="manage_product_section" className="manage_product_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت محصولات</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_product_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>دسته</th>
    //                     <th>عنوان</th>
    //                     <th>قیمت</th>
    //                     <th>موجودی</th>
    //                     <th>تعداد لایک</th>
    //                     <th>وضعیت</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>دسته شماره فلان</td>
    //                     <td>محصول شماره1</td>
    //                     <td>20,000 تومان</td>
    //                     <td>10</td>
    //                     <td>
    //                         <span className="text-success mx-2">30</span>
    //                         <span className="text-danger mx-2">10</span>
    //                     </td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش محصول" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_modal"></i>
    //                         <i className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip" title="ثبت ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف محصول" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                   <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //               </li>
    //               <li className="page-item"><a className="page-link" href="#">1</a></li>
    //               <li className="page-item"><a className="page-link" href="#">2</a></li>
    //               <li className="page-item"><a className="page-link" href="#">3</a></li>
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                   <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}
    
    //     {/* <!-- #region(collapsed) add color section start --> */}
    //     <div id="manage_color_section" className="add_color_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت رنگ ها</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_color_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>نام رنگ</th>
    //                     <th>کد رنگ</th>
    //                     <th>رنگ</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>مشکی</td>
    //                     <td>#000000</td>
    //                     <td className="p-2">
    //                         <div className="w-100 h-100 d-block" style="background: #000;color: #000;">...</div>
    //                     </td>
    //                     <td>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف رنگ" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //                 <tr>
    //                     <td>2</td>
    //                     <td>قزمز</td>
    //                     <td className="dir_ltr">#f44336 </td>
    //                     <td className="p-2">
    //                         <div className="w-100 h-100 d-block" style="background: #f44336 ;color: #f44336 ;">...</div>
    //                     </td>
    //                     <td>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف رنگ" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}
        
    //     {/* <!-- #region(collapsed) add guarantee section start --> */}
    //     <div id="manage_guarantee_section" className="manage_guarantee_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_guarantee_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان گارانتی</th>
    //                     <th>مدت گارانتی</th>
    //                     <th>توضیحات</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>گارانتی 1</td>
    //                     <td>12 ماه</td>
    //                     <td> توضیحات اجمالی در مورد این گارانتی</td>
    //                     <td>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف گارانتی" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion con/tent --> */}
        
    //     {/* <!-- #region(collapsed) add brand section start --> */}
    //     <div id="manage_brand_section" className="manage_brand_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت برند ها</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_brand_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان </th>
    //                     <th>عنوان فارسی </th>
    //                     <th>توضیحات</th>
    //                     <th>لوگو</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>brand 1</td>
    //                     <td>برند شماره 1</td>
    //                     <td> توضیحات اجمالی در مورد این برند</td>
    //                     <td>
    //                         <img src="/assets/images/logo.png" width="50"/>
    //                     </td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش برند" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_brand_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف برند" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}
        
    //     {/* <!-- #region(collapsed) add discount code section start --> */}
    //     <div id="manage_discount_section" className="manage_discount_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت کد های تخفیف</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_discount_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان </th>
    //                     <th>کد</th>
    //                     <th>درصد تخفیف</th>
    //                     <th>تا تاریخ</th>
    //                     <th>برای</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>تخفیف شماره 1</td>
    //                     <td>takhfif1</td>
    //                     <td>39%</td>
    //                     <td>1400/10/12</td>
    //                     <td>همه</td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش کد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_discount_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف کد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}

    //     {/* <!-- #region(collapsed) cart section start  --> */}
    //     <div id="manage_cart_section" className="manage_cart_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت سبد خرید</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از نام یا شماره سبد را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#edit_cart_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>آی دی مشتری</th>
    //                     <th>نام مشتری</th>
    //                     <th>تاریخ</th>
    //                     <th>مبلغ کل سبد</th>
    //                     <th>وضعیت</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>50</td>
    //                     <td>قاسم بساکی</td>
    //                     <td>1400/07/15</td>
    //                     <td>100هزار تومان</td>
    //                     <td>فعال</td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش و جزئیات سبد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#edit_cart_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سبد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                   <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //               </li>
    //               <li className="page-item"><a className="page-link" href="#">1</a></li>
    //               <li className="page-item"><a className="page-link" href="#">2</a></li>
    //               <li className="page-item"><a className="page-link" href="#">3</a></li>
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                   <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </nav>
    //     </div>
    //     {/* <!-- #endregion --> */}
    
    //     {/* <!-- #region(collapsed) order section start  --> */}
    //     <div id="manage_orders_section" className="manage_orders_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت سفارشات</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از نام کاربر یا شماره سفارش را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_order_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>آی دی مشتری</th>
    //                     <th>نام مشتری</th>
    //                     <th>وضعیت</th>
    //                     <th>تاریخ پرداخت</th>
    //                     <th>مبلغ پرداختی</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>50</td>
    //                     <td>قاسم بساکی</td>
    //                     <td>پرداخت شده</td>
    //                     <td>1400/07/15</td>
    //                     <td>100هزار تومان</td>
    //                     <td>
    //                         <i className="fas fa-shopping-cart text-info mx-1 hoverable_text pointer has_tooltip" title="  جزئیات سفارش" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#order_details_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سفارش" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                   <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //               </li>
    //               <li className="page-item"><a className="page-link" href="#">1</a></li>
    //               <li className="page-item"><a className="page-link" href="#">2</a></li>
    //               <li className="page-item"><a className="page-link" href="#">3</a></li>
    //               <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                   <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </nav>
    //     </div>
    //     {/* <!-- #endregion --> */}
    
    //     {/* <!-- #region(collapsed) manage delivery section start --> */}
    //     <div id="manage_deliveries_section" className="manage_deliveries_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت نحوه ارسال</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_delivery_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان</th>
    //                     <th>هزینه</th>
    //                     <th>زمان ارسال</th>
    //                     <th>واحد زمان</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>پست پیشتاز</td>
    //                     <td>25,000 تومان</td>
    //                     <td> 10</td>
    //                     <td> روز</td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_delivery_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف " data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}
        
    //     {/* <!-- #region(collapsed) add user section start --> */}
    //     <div id="manage_user_section" className="manage_user_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت کاربران</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از نام یا نام خانوادگی را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_user_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>نام و نام خانوادگی</th>
    //                     <th>موبایل</th>
    //                     <th>ایمیل</th>
    //                     <th>نقش </th>
    //                     <th>تاریخ ثبت نام</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>قاسم بساکی</td>
    //                     <td>09110110011</td>
    //                     <td>mahdicmptr@gmail.com</td>
    //                     <td>کاربر</td>
    //                     <td>1400/10/12</td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="جزئیات و ویرایش کاربر" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_user_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف کاربر" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //             </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}

    //     {/* <!-- #region(collapsed) add role section start --> */}
    //     <div id="manage_role_section" className="manage_role_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت نقش ها</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از نام نقش را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //             <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //                 <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_role_modal">
    //                     <i className="fas fa-plus text-light"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان</th>
    //                     <th>توضیحات</th>
    //                     <th>وضعیت</th>
    //                     <th>عملیات</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td>نقش شماره 1</td>
    //                     <td>توضیحات در مورد این نقش که چیست و کلیات آن کدام است</td>
    //                     <td>
    //                         <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
    //                             <label className="form-check-label pointer" for="flexSwitchCheckDefault">فعال</label>
    //                             <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault" checked/>
    //                         </div> 
    //                     </td>
    //                     <td>
    //                         <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش نقش" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_role_modal"></i>
    //                         <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف نقش" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}

    //     {/* <!-- #region(collapsed) add permissions section start --> */}
    //     <div id="manage_permission_section" className="manage_permission_section main_section d-none">
    //         <h4 className="text-center my-3">مدیریت مجوز ها</h4>
    //         <div className="row justify-content-between">
    //             <div className="col-10 col-md-6 col-lg-4">
    //                 <div className="input-group mb-3" style="direction: ltr;">
    //                     <input type="text" className="form-control" placeholder="قسمتی از نام مجوز را وارد کنید"/>
    //                     <span className="input-group-text" >جستجو</span>
    //                 </div>
    //             </div>
    //         </div>
    //         <table className="table table-responsive text-center table-hover table-bordered">
    //             <thead className="table-secondary">
    //                 <tr>
    //                     <th>#</th>
    //                     <th>عنوان</th>
    //                     <th>توضیحات</th>
    //                     <th>وضعیت</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td>1</td>
    //                     <td> مجوز شماره 1</td>
    //                     <td>توضیحات در مورد این مجوز که چیست و کلیات آن کدام است</td>
    //                     <td>
    //                         <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
    //                             <label className="form-check-label pointer" for="flexSwitchCheckDefault">فعال</label>
    //                             <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault" checked/>
    //                         </div> 
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //             <ul className="pagination dir_ltr">
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&raquo;</span>
    //                 </a>
    //                 </li>
    //                 <li className="page-item"><a className="page-link" href="#">1</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">2</a></li>
    //                 <li className="page-item"><a className="page-link" href="#">3</a></li>
    //                 <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&laquo;</span>
    //                 </a>
    //                 </li>
    //             </ul>
    //         </nav>
    //     </div>

    //     {/* <!-- #endregion content --> */}
    
    //     {/* <!-- #region(collapsed) manage comments section start --> */}
    //     <div id="manage_comments_section" className="manage_comments_section main_section d-none">
    //     <h4 className="text-center my-3">مدیریت نظرات</h4>
    //     <div className="row justify-content-between">
    //         <div className="col-10 col-md-6 col-lg-4">
    //             <div className="input-group mb-3" style="direction: ltr;">
    //                 <input type="text" className="form-control" placeholder="قسمتی از نام یا نام خانوادگی یا نظر را وارد کنید"/>
    //                 <span className="input-group-text" >جستجو</span>
    //             </div>
    //         </div>
    //         <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //             <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_comment_modal">
    //                 <i className="fas fa-plus text-light"></i>
    //             </button>
    //         </div>
    //     </div>
    //     <table className="table table-responsive text-center table-hover table-bordered">
    //         <thead className="table-secondary">
    //             <tr>
    //                 <th>#</th>
    //                 <th>نام و نام خانوادگی</th>
    //                 <th>نوع نظر</th>
    //                 <th>برای</th>
    //                 <th>قسمتی از متن</th>
    //                 <th>وضعیت</th>
    //                 <th>تاریخ</th>
    //                 <th>عملیات</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>1</td>
    //                 <td>قاسم بساکی</td>
    //                 <td>نظر</td>
    //                 <td>محصول فلان</td>
    //                 <td>قسمتی از متن نظر برای این محصول مثلا 100 کارکتر</td>
    //                 <td>
    //                     <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
    //                         <label className="form-check-label pointer" for="flexSwitchCheckDefault">فعال</label>
    //                         <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault"/>
    //                     </div> 
    //                 </td>
    //                 <td>1400/10/12</td>
    //                 <td>
    //                     <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف نظر" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    //     <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //         <ul className="pagination dir_ltr">
    //             <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Previous">
    //                 <span aria-hidden="true">&raquo;</span>
    //             </a>
    //             </li>
    //             <li className="page-item"><a className="page-link" href="#">1</a></li>
    //             <li className="page-item"><a className="page-link" href="#">2</a></li>
    //             <li className="page-item"><a className="page-link" href="#">3</a></li>
    //             <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Next">
    //                 <span aria-hidden="true">&laquo;</span>
    //             </a>
    //             </li>
    //         </ul>
    //         </nav>
    // </div>

    // {/* <!-- #endregion content --> */}

    //     {/* <!-- #region(collapsed) manage questions section start --> */}
    //     <div id="manage_question_section" className="manage_question_section main_section d-none">
    //     <h4 className="text-center my-3">مدیریت سوالات</h4>
    //     <div className="row justify-content-between">
    //         <div className="col-10 col-md-6 col-lg-4">
    //             <div className="input-group mb-3" style="direction: ltr;">
    //                 <input type="text" className="form-control" placeholder="قسمتی از نام یا نام خانوادگی یا سوال را وارد کنید"/>
    //                 <span className="input-group-text" >جستجو</span>
    //             </div>
    //         </div>
    //         <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
    //             <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_question_modal">
    //                 <i className="fas fa-plus text-light"></i>
    //             </button>
    //         </div>
    //     </div>
    //     <table className="table table-responsive text-center table-hover table-bordered">
    //         <thead className="table-secondary">
    //             <tr>
    //                 <th>#</th>
    //                 <th>نام و نام خانوادگی</th>
    //                 <th>نوع سوال</th>
    //                 <th>دسته</th>
    //                 <th>قسمتی از متن</th>
    //                 <th>وضعیت</th>
    //                 <th>تاریخ</th>
    //                 <th>عملیات</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             <tr>
    //                 <td>1</td>
    //                 <td>قاسم بساکی</td>
    //                 <td>پرسش</td>
    //                 <td>محصولات</td>
    //                 <td>قسمتی از متن سوال برای این محصول مثلا 100 کارکتر</td>
    //                 <td>
    //                     <div className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
    //                         <label className="form-check-label pointer" for="flexSwitchCheckDefault">فعال</label>
    //                         <input className="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault"/>
    //                     </div> 
    //                 </td>
    //                 <td>1400/10/12</td>
    //                 <td>
    //                     <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سوال" data-bs-toggle="tooltip" data-bs-placement="top"></i>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    //     <nav aria-label="Page navigation example" className="d-flex justify-content-center">
    //         <ul className="pagination dir_ltr">
    //             <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Previous">
    //                 <span aria-hidden="true">&raquo;</span>
    //             </a>
    //             </li>
    //             <li className="page-item"><a className="page-link" href="#">1</a></li>
    //             <li className="page-item"><a className="page-link" href="#">2</a></li>
    //             <li className="page-item"><a className="page-link" href="#">3</a></li>
    //             <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Next">
    //                 <span aria-hidden="true">&laquo;</span>
    //             </a>
    //             </li>
    //         </ul>
    //         </nav>
    // </div>

    // {/* <!-- #endregion content --> */}

    
    //      </section>