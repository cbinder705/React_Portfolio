import React, { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Project";
import Resume from "./pages/Resume";

function PageLoader() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  const loadPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    } else if (currentPage === "Project") {
      return <Projects />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navigation>
      {loadPage()}
      <Footer />
    </div>
  );
}
export default PageLoader;
