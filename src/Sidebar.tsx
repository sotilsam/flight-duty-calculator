import { Link, useLocation } from "react-router-dom";
import Logo from "./assets/Airplane-Logo.png";


export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <img src={Logo} alt="Israir Logo" className="logo" />

      <div className="sidebar-links">
        {location.pathname === "/" ? (
          <div className="sidebar-btn active">Payload Calculator</div>) : (
          <Link to="/" className="sidebar-btn">Payload Calculator</Link>
        )}
        <Link
          to="/explanations"
          className={`sidebar-btn ${location.pathname === "/explanations" ? "active" : ""}`}
        >
          Explanations
        </Link>
      </div>
    </div>
  );
}


