import { useEffect } from "react";
import { setDashboardChar } from "../../layout/util/dashboardChar";
import Card from "./Card";
import ProductTabale from "./ProductTabale";

export default function Dashboard() {

useEffect(() => {

    const labels = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];

    const datapoints = [0,20,20,60,60,120,180,120,125,105,110,170];
    
  const cleanup = setDashboardChar('myChart', labels, datapoints);

        // اجرای cleanup هنگام خروج از صفحه
        return () => {
            if (cleanup) cleanup();
        };    
}, []);

    return (
    <>
      {/* <!-- #region(collapsed) dashboard section start --> */}
      <div
        id="dashboard_section"
        className="dashboard_section main_section "
      
      >
        <div className="row">
            <Card currentValue={7} title='سبد خرید امروز' desc='سبدهای خرید مانده امروز' icon='fas fa-shopping-basket' lastWeekValue={13} lastMonthValue={18}  />
            <Card currentValue={5} title='سفارشات مانده امروز' desc='سفارشات معلق و فاقد پرداختی' icon='fas fa-dolly' lastWeekValue={9} lastMonthValue={16}  />
            <Card currentValue={45} title='سفارشات امروز' desc='سفارشات کامل و دارایی فعال' icon='fas fa-luggage-cart' lastWeekValue={268} lastMonthValue={483}  />
            <Card currentValue={1500000} title='درآمد امروز' desc='جمع مبلغ پرداختی به تومان' icon='fas fa-money-check-alt' lastWeekValue={6380000} lastMonthValue={22480000}  />

        </div>
    
    
        <div className="row">
          <div className="col-12 col-lg-6">
            <p className="text-center mt-3 text-dark">
              محصولات رو به اتمام
            </p>
            <ProductTabale/>
          </div>

          <div className="col-8 col-lg-6">
          <canvas id="myChart" width="400" height="180"></canvas>
          </div>
        </div>
      </div>
      {/* <!-- #endregion content --> */}
    </>
  );
}
