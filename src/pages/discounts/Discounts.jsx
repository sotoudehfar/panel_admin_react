import DiscountTable from "./DiscountTable";

const Discounts = () => {
  return (
    <div
      id="manage_discount_section"
      className="manage_discount_section main_section"
    >
      <h4 className="text-center my-3">
        مدیریت کدهای تخفیف
      </h4>
      <DiscountTable />
    </div>
  );
};

export default Discounts;
