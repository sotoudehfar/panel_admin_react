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

                <SidbarItems targetPath={"/"}items="داشبورد" icon="fas fa-tachometer-alt"/>
             
                {/* <!-- =================================== --> */}
   
                <SilebarGroupTitle title="فروشگاه"/>
              
                <SidbarItems targetPath={"/category"} items="مدیریت گروه محصول" icon=" fas fa-stream "/>
                <SidbarItems targetPath={"/product"} items="مدیریت محصول" icon="fas fa-cube"/>
                <SidbarItems targetPath={"/brands"} items="مدیریت برندها" icon="fas fa-copyright"/>               
                <SidbarItems targetPath={"/garanties"} items="مدیریت گارانتی ها" icon="fab fa-pagelines"/>               
                <SidbarItems targetPath={"/colors"} items="مدیریت رنگ ها" icon="fas fa-palette"/>               
                <SidbarItems targetPath={"/"} items="مدیریت تخفیف ها" icon="fas fa-percentage"/>               

                {/* <!-- =================================== --> */}
                <SilebarGroupTitle title="سفارشات و سبد"/>
                <SidbarItems targetPath={"/"} items="مدیریت سبدها" icon="fas fa-shopping-basket"/>               
                <SidbarItems targetPath={"/"} items="مدیریت سفارشات" icon="fas fa-luggage-cart"/>               
                <SidbarItems targetPath={"/"} items="مدیریت نحوه ارسال" icon="fas fa-truck-loading"/>               

                {/* <!-- =================================== --> */}
                <SilebarGroupTitle title="کاربران و همکاران"/>
                <SidbarItems targetPath={"/"} items="مشاهده کاربران" icon="fas fa-users"/>               
                <SidbarItems targetPath={"/"} items="نقش ها" icon="fas fa-user-tag"/>               
                <SidbarItems targetPath={"/"} items="مجوز ها" icon="fas fa-shield-alt"/>               

                {/* <!-- =================================== --> */}
                 <SilebarGroupTitle title="ارتباطات"/>
                 <SidbarItems targetPath={"/"} items="سوال ها" icon="fas fa-question-circle"/>               
                 <SidbarItems targetPath={"/"} items="نظرات" icon="fas fa-comment"/>               

      

            </div>
        </div>
        </div>
    {/* <!-- #endregion --> */}
    </>
  )
}
