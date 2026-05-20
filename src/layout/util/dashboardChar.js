import Chart from "chart.js/auto";

export const setDashboardChar = (elementId, labels, datapoints) => {
    // پیدا کردن المنت با آی‌دی (روش استاد)
    const ctx = document.getElementById(elementId);
    
    // محافظت از خطا: اگر المنت هنوز در DOM نیست، کلاً اجرا نشود
    if (!ctx) return null;

    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'فروش ماه',
                data: datapoints,
                borderColor: "#0062ff",
                fill: true,
                tension: 0.4
            }]
        },
        options: { responsive: true }
    };

    const chart = new Chart(ctx.getContext('2d'), config);

    // برگرداندن تابع برای پاکسازی (خیلی مهم)
    return () => {
        chart.destroy();
    };
};