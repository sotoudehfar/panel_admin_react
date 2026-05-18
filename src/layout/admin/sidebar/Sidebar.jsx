import { useContext } from "react"
import { AdminContext } from "../../../context/adminLayoutContext"
import Avatar from "./Avatar";
import SilebarGroupTitle from "./SilebarGroupTitle";
import SidbarItems from "./SidbarItems";


export default function Sidebar() {
    const {showSidebar} = useContext(AdminContext)
     console.log("sidebar state:", showSidebar);

  return (
    <>
  {/* <!-- #region(collapsed) sidebar start --> */}
  <div id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? "expanded" : ""
        }`}
      >
            <div className="p-0 m-0">
                <Avatar name="زهره ستوده فر" imagepath="/assets/images/avatar/user2.jpg"/>

                <SidbarItems items="داشبورد" icon="fas fa-tachometer-alt"/>
             
                {/* <!-- =================================== --> */}
   
                <SilebarGroupTitle title="فروشگاه"/>
              
                <SidbarItems items="مدیریت گروه محصول" icon=" fas fa-stream"/>
                <SidbarItems items="مدیریت محصول" icon="fas fa-cube"/>
                <SidbarItems items="مدیریت برندها" icon="fas fa-copyright"/>               
                <SidbarItems items="مدیریت گارانتی ها" icon="fab fa-pagelines"/>               
                <SidbarItems items="مدیریت رنگ ها" icon="fas fa-palette"/>               
                <SidbarItems items="مدیریت تخفیف ها" icon="fas fa-percentage"/>               

                {/* <!-- =================================== --> */}
                <SilebarGroupTitle title="سفارشات و سبد"/>
                <SidbarItems items="مدیریت سبدها" icon="fas fa-shopping-basket"/>               
                <SidbarItems items="مدیریت سفارشات" icon="fas fa-luggage-cart"/>               
                <SidbarItems items="مدیریت نحوه ارسال" icon="fas fa-truck-loading"/>               

                {/* <!-- =================================== --> */}
                <SilebarGroupTitle title="کاربران و همکاران"/>
                <SidbarItems items="مشاهده کاربران" icon="fas fa-users"/>               
                <SidbarItems items="نقش ها" icon="fas fa-user-tag"/>               
                <SidbarItems items="مجوز ها" icon="fas fa-shield-alt"/>               

                {/* <!-- =================================== --> */}
                 <SilebarGroupTitle title="ارتباطات"/>
                 <SidbarItems items="سوال ها" icon="fas fa-question-circle"/>               
                 <SidbarItems items="نظرات" icon="fas fa-comment"/>               

      

            </div>
        </div>
        </div>
    {/* <!-- #endregion --> */}
    </>
  )
}
