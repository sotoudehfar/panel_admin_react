
import RightContent from './RightContent.jsx'
import LeftContent from './LeftContent.jsx.jsx'

export default function Navbar() {
  return (
    <>
      {/* <!-- #region(collapsed) navbar  --> */}
    <nav className="navbar fixed-top navbar-dark bg-secondary top_navbar py-0">
        <div className="container-fluid h-100 pe-0">
            <RightContent/>
            <LeftContent/>
        </div>
    </nav>
    {/* <!-- #endregion  --> */}

    </>
  )
}
