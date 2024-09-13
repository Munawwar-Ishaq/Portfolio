import React, { useState, useEffect } from "react";
import "animate.css";
import { usePortfolioContext } from "../context";

const HomeSection = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showNav, setShowNav] = useState(true);
  
  const { offsetVal } = usePortfolioContext();
   

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowNav(false);
    }

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vg-page page-home">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="navbar-logo">M.H.A Code X</h2>
        <button
          className={
            showNav ? "navbar-toggler active-nav-btn" : "navbar-toggler"
          }
          onClick={() => setShowNav(!showNav)}
        >
          ☰
        </button>
        <div
          className="nav-links-container"
          style={{
            display: showNav ? "flex" : "none",
          }}
        >
          <ul className="navbar-navv">
            <li className="nav-item">
              <span
                className="nav-link"
                onClick={() => {
                  scrollToTop();
                }}
              >
                Home
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link"onClick={() => {
              window.scrollTo({
                top : offsetVal.about,
                behavior : 'smooth'
              })
            }}>
                About
              </span>
            </li>
            <li className="nav-item" >
              <span className="nav-link" onClick={() => {
              window.scrollTo({
                top : offsetVal.project ,
                behavior : 'smooth'
              })
            }}>
                Projects
              </span>
            </li>
            <li className="nav-item" >
              <span className="nav-link" onClick={() => {
              window.scrollTo({
                top : offsetVal.skills - 30,
                behavior : 'smooth'
              })
            }}>
                Skills
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="#contact" onClick={() => {
              window.scrollTo({
                top : offsetVal.contact ,
                behavior : 'smooth'
              })
            }}>
                Contact
              </span>
            </li>
          </ul>
          <button className="btn btn-themee">En</button>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Caption Header */}
      <div className="caption-header text-center animate__animated animate__zoomInDown">
        <h5 className="fw-normal">Welcome</h5>
        <h1 className="fw-light">
          I'm <b className="text-primary">Munawwar Ishaq</b>
        </h1>
        <div className="badge">Full Stack Developer</div>
      </div>
      {/* End Caption Header */}

      <div
        className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
        onClick={scrollToTop}
      >
        &uarr;
      </div>
    </div>
  );
};

export default HomeSection;
