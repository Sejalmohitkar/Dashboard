import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
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
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashboard</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5">User</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-bar-chart me-2 fs-5"></i>
                  <span className="fs-5">Revenue</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-basket2 me-2 fs-5"></i>
                  <span className="fs-5">Cards</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-cart4 me-2 fs-5"></i>
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
          // className={`bi ${isCollapsed ? "bi-x" : "bi-list"} ms-2 mt-1 fs-4`}
          className={`bi bi-list ms-2 mt-1 fs-4`}
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        ></i>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebarMbl ${isCollapsed ? "show" : ""}`}>
        <div className="d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100">
          <div>
            <div className="d-flex align-items-center text-white text-decoration-none">
              <i className="bi bi-person-circle fs-5"></i>
              <span className="fs-5">ADMIN-PANEL</span>
            </div>
            <hr className="text-secondary mt-2" />
            <ul className="nav nav-pills flex-column p-0 m-0">
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-speedometer me-2 fs-5"></i>
                  <span className="fs-5">Dashbord</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5">User</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-bar-chart me-2 fs-5"></i>
                  <span className="fs-5">Revenue</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-basket2 me-2 fs-5"></i>
                  <span className="fs-5">Cards</span>
                </a>
              </li>
              <li className="nav-item p-1">
                <a href="#" className="nav-link text-white">
                  <i className="bi bi-cart4 me-2 fs-5"></i>
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
            <span className="fs-5">Yasaf</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
