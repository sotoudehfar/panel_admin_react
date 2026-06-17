import { Link } from "react-router-dom";

export default function LeftContent() {
  return (
   
   
   
   <div className="left_content d-flex flex-row-reverse align-items-center position-relative">
      
      <div className="dropdown">
        <i
          className="fas fa-grip-vertical fa-2x me-3 pointer"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>

        <ul
          className="dropdown-menu mini_menu shadow"
          style={{ minWidth: "230px", maxWidth: "270px" }}
        >
          <li>
            <span className="dropdown-item text-center fw-bold py-2">
              قاسم بساکی
            </span>
          </li>

          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              to="/dashboard"
            >
              <i className="fas fa-tachometer-alt me-2"></i>
              داشبورد
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              to="/tickets"
            >
              <i className="fas fa-paper-plane me-2"></i>
              تیکت ها
            </Link>
          </li>

          <li>
            <Link
              className="dropdown-item d-flex align-items-center"
              to="/messages"
            >
              <i className="fas fa-envelope me-2"></i>
              پیام ها
            </Link>
          </li>

          <li>
            <hr className="dropdown-divider mx-3" />
          </li>

          <li>
            <Link
              to="/logout"
              className="dropdown-item d-flex align-items-center text-danger"
            >
              <i className="fas fa-power-off me-2"></i>
              خروج
            </Link>
          </li>
        </ul>
      </div>

      <i className="far fa-bell fa-2x mx-3 pointer position-relative">
        <span className="alarm_count">4</span>
      </i>

      <i className="fas fa-search fa-2x mx-3 pointer"></i>
    </div>
  );
}
