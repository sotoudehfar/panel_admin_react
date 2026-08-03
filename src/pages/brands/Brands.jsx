import BrandTable from "./BrandTable";

export default function Brands() {
  return (
    <>
      <div
        id="manage_brand_section"
        className="manage_brand_section main_section "
      >
        <h4 className="text-center my-3">مدیریت برند ها</h4>

        <BrandTable />
      </div>
    </>
  );
}
