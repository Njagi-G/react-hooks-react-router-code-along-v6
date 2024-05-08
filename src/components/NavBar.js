import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* Add styling to NavLink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/Login" className="nav-link">
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;
