import React from 'react'
import DashBoardRouter from '../../routers/DashBoardRouter';
import NavBar from './components/ui/navbar/NavBar';
import Sidebar from './components/ui/sidebar/Sidebar';

export const DashBoardScreen = () => {
  return (
    <section id="page-top">
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <NavBar />
                    <div className="container-fluid">
                     
                        <div className="row">
                            <DashBoardRouter  />
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    </section>
  );
}

export default DashBoardScreen;
