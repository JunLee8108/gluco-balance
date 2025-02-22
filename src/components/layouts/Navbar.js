import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../../styles/Global.css";
import "../../styles/components/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getNavLinkClass = (path) => {
    return location.pathname === path ||
      (path === "/" && location.pathname === "/")
      ? "nav-link active"
      : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <div className="brand-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="brand-text">
            <h1>GlucoBalance</h1>
            <p>Have a healthy day today!</p>
          </div>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <div className={getNavLinkClass("/")} onClick={() => navigate("/")}>
            Dashboard
          </div>
          <div
            className={getNavLinkClass("/diet")}
            onClick={() => navigate("/diet")}
          >
            Diet
          </div>
          <div
            className={getNavLinkClass("/statistics")}
            onClick={() => navigate("/statistics")}
          >
            Statistics
          </div>
          <div
            className={getNavLinkClass("/settings")}
            onClick={() => navigate("/settings")}
          >
            Settings
          </div>
          <button
            className="profile-button"
            onClick={() => navigate("/profile")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
