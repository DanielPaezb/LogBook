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
                 <Link className="nav-link" to="" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Home</span>
                </Link>
             </li>

             <li className="nav-item">
                 <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                     aria-expanded="true" aria-controls="collapseTwo">
                     <i className="fas fa-fw fa-cog"></i>
                     <span>Filter</span>
                 </a>
               
                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                     <div className="bg-white py-2 collapse-inner rounded">
                     <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                     </form>
                     </div>
                 </div>
             </li>
     

             <li className="nav-item">
                 <Link className="nav-link" to="" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>New People</span>
                </Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link" to="" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Error Report</span>
                </Link>
             </li>

             <li className="nav-item">
                 <Link className="nav-link" to="" >
                    <i class="fas fa-fw fa-table"></i>
                    <span>Feelback</span>
                </Link>
             </li>

         </ul>
    )
}

export default Sidebar;

