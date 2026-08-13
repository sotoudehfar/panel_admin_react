import GuarantiTable from "./GuarantiTable";

export default function Garanties() {
  return (
    <>
      <div
        id="manage_guarantee_section"
        className="manage_guarantee_section main_section "
      >
        <h4 className="text-center my-3">مدیریت گارانتی ها</h4>
         <GuarantiTable/>

      </div>
    </>
  );
}
