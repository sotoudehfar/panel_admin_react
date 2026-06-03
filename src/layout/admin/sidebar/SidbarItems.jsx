import { NavLink } from "react-router-dom";

export default function SidbarItems({items , icon , targetPath}) {
  return (
    <>
      <NavLink to={targetPath}
        className="py-1 text-start pe-4 sidebar_menu_item  sideeebar"
      >
        <i className={`ms-3 icon ${icon} text-light`}></i>
        <span className="hiddenable no_wrap font_08">{items}</span>
      </NavLink>
    </>
  );
}
