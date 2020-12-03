import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    // <footer className="footer--contenedor__principal">
    //   <section className="footer--contenedor-logbook">
    //     <a className="a--footer--titulo" href="http://logbook.com">LOGBOOK</a>
    //   </section>
    //   <section className="footer--contenedor__iconos">
    //     <div className="footer-iconos">
    //       <a href="http://logbook.com"><span className="icon-facebook-with-circle"></span></a>
    //       <a href="http://logbook.com"><span className="icon-github-with-circle"></span></a>
    //       <a href="http://logbook.com"><span className="icon-instagram-with-circle"></span></a>
    //       <a href="http://logbook.com"><span className="icon-twitter-with-circle"></span></a>
    //     </div>
    //   </section>
    //   <section className="footer--contenedor__contactenos">
    //     <div className="footer--contactenos__titulo">
    //       <h2 className="h2--titulo">Contáctenos</h2>
    //     </div>
    //     <div className="footer-contactenos">
    //       <a href="http://logbook.com"><span className="icon-slideshare"> Llámenos al 3144319820</span></a>
    //       <a href="http://logbook.com"><span className="icon-mobile"> www.logbook.com</span></a>
    //       <a href="http://logbook.com"><span className="icon-laptop"> Acerca de Logbook</span></a>
    //     </div>
    //   </section>
    // </footer>
    <footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>Copyright &copy; LogBook 2020</span>
        </div>
    </div>
</footer>
  );
}

export default Footer;

