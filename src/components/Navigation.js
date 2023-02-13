import React from "react";

const pages = [
  { href: "aboutMe", pageName: "AboutMe" },
  { href: "projects", pageName: "Project" },
  { href: "contact", pageName: "Contact" },
  { href: "resume", pageName: "Resume" },
];
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <ul className="nav-links">
        {pages.map((p) => (
          <li className="nav-item">
            <a
              href={`#${p.href}`}
              onClick={() => handlePageChange(p.pageName)}
              className={
                currentPage === p.pageName ? "nav-link active" : "nav-link"
              }
            >
              {p.pageName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navigation;
