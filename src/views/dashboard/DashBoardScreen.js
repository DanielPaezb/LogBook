import React from 'react'
import DashBoardRouter from '../../routers/DashBoardRouter';
import NavBar from './components/ui/navbar/NavBar';
import Sidebar from './components/ui/sidebar/Sidebar';
import Footer from './components/ui/footer/Footer';


export const DashBoardScreen = () => {
  return (
    <section id="page-top">
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                <NavBar />
                    <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        <div className="row">
                            <DashBoardRouter  />
                        </div>
                    </div>
                </div>
               <Footer /> 
        </div>
    </div>

    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    </section>
  );
}

export default DashBoardScreen;
