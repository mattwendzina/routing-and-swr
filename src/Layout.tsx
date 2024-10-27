import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="o-layout">
      <nav
        className="o-layout__navbar"
        style={{ display: "flex", gap: "16px" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="o-layout__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
