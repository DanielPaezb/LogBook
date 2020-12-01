import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
             <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
             <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dash/home">
                 <div className="sidebar-brand-icon rotate-n-15">
                     <i className="fas fa-laugh-wink"></i>
                 </div>
                 <div className="sidebar-brand-text mx-3">LogBook</div>
             </Link>
 
             <hr className="sidebar-divider" />
             
             <div className="sidebar-heading">
                 General
             </div>
             
             <li className="nav-item">
                 <Link className="nav-link" to="/dash/home" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Home</span>
                </Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link" to="/dash/filter" >
                 <i className="fas fa-fw fa-cog"></i>
                    <span>Filter</span>
                </Link>
             </li>

           
             <li className="nav-item">
                 <Link className="nav-link" to="/dash/add" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>New People</span>
                </Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link" to="/dash/error" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Error Report</span>
                </Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link" to="/dash/feelback" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Feelback</span>
                </Link>
             </li>

         </ul>
    )
}

export default Sidebar;

