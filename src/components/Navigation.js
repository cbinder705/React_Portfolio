import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
const Navigation() {
  return (
    <div className="navbar">
      <div className="nav-links">
        {/* <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/categories">
          Categories
        </Link>
        <Link className="links" to="/inventory">
          Inventory
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
        <Link className="links" to="/signup">
          Signup
        </Link> */}
        Hello
      </div>
    </div>
  );
}
const PageLinks = [
  {href: "AboutMe", pageName: "AboutMe"},
  {href: "Project",pageName: "Projects" },
  {href: "Contact", pageName: "Contact" }


]
export default Navigation;
