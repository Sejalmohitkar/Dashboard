import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeSidebar = () => {
    setIsCollapsed(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar-container">
        <div className="sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
          <div>
            <div className="d-flex align-items-center text-white text-decoration-none">
              <i className="bi bi-person-circle fs-5 me-2"></i>
              <span className="fs-5">ADMIN-PANEL</span>
            </div>
            <hr className="text-secondary mt-2" />
            <ul className="nav nav-pills flex-column p-0 m-0">
              <li className="nav-item p-1">
                <Link to="/" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/user" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5">User</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/revenue" href="#" className="nav-link text-white">
                  <i className="bi bi-bar-chart me-2 fs-5"></i>
                  <span className="fs-5">Revenue</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/cards" className="nav-link text-white">
                  <i className="bi bi-basket2 me-2 fs-5"></i>
                  <span className="fs-5">Cards</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/products" className="nav-link text-white">
                  <i className="bi bi-cart4 me-2 fs-5"></i>
                  <span className="fs-5">Products</span>
                </Link>
              </li>
              <li className="nav-item p-1">
                <Link to="/wishlists" className="nav-link text-white">
                  <i className="bi bi-calendar2-heart me-2 fs-5"></i>
                  <span className="fs-5">Wishlists</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <hr className="text-secondary" />
            <i className="bi bi-person fs-5"></i>
            <span className="fs-4">YourSelf</span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="mobile-toggle">
        <i
          className={`bi bi-list ms-2 mt-1 text-white`}
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        ></i>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebarMbl ${isCollapsed ? "show" : " "}`}>
        <i
          className="bi bi-x close-icon text-white fs-4"
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "15px",
          }}
          onClick={closeSidebar}
        ></i>
        <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
          <div>
            <div className="d-flex align-items-center text-white text-decoration-none">
              <i className="bi bi-person-circle me-2 fs-6"></i>
              <span className="fs-5">ADMIN-PANEL</span>
            </div>
            <hr className="text-secondary mt-2" />
            <ul className="nav nav-pills flex-column p-0 m-0">
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-6"></i>
                  <span className="fs-5">Dashboard</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-6"></i>
                  <span className="fs-5">User</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-bar-chart me-2 fs-6"></i>
                  <span className="fs-5">Revenue</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-basket2 me-2 fs-6"></i>
                  <span className="fs-5">Cards</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-cart4 me-2 fs-6"></i>
                  <span className="fs-5">Products</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-calendar2-heart me-2 fs-5"></i>
                  <span className="fs-5">Wishlists</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <hr className="text-secondary" />
            <i className="bi bi-person fs-5"></i>
            <span className="fs-5">YourSelf</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
