import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    // Sidebar general container 
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      {/* Sidebar header title */}
      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dash/home">
        <div className="sidebar-brand-icon ">
          <i className="far fa-chart-bar"></i>
        </div>
        <div className="sidebar-brand-text mx-3">LogBook</div>
      </Link>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        General
      </div>

      {/* General links */}
      <li className="nav-item">
        <Link className="nav-link" to="/dash/home" >
          <i className="fas fa-home"></i>
          <span>Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/dash/filter" >
          <i className="fas fa-sort-amount-down-alt"></i>
          <span>Filter</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/dash/add" >
          <i className="fas fa-user-plus"></i>
          <span>New People</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/dash/error" >
          <i className="fas fa-exclamation-circle"></i>
          <span>Error Report</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/dash/feelback" >
          <i className="far fa-comment-alt"></i>
          <span>Opinion</span>
        </Link>
      </li>
    </ul>
  )
}

export default Sidebar;

