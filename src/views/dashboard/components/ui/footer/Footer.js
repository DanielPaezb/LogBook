import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    // <footer class="footer--contenedor__principal">
    //   <section class="footer--contenedor-logbook">
    //     <a class="a--footer--titulo" href="http://logbook.com">LOGBOOK</a>
    //   </section>
    //   <section class="footer--contenedor__iconos">
    //     <div class="footer-iconos">
    //       <a href="http://logbook.com"><span class="icon-facebook-with-circle"></span></a>
    //       <a href="http://logbook.com"><span class="icon-github-with-circle"></span></a>
    //       <a href="http://logbook.com"><span class="icon-instagram-with-circle"></span></a>
    //       <a href="http://logbook.com"><span class="icon-twitter-with-circle"></span></a>
    //     </div>
    //   </section>
    //   <section class="footer--contenedor__contactenos">
    //     <div class="footer--contactenos__titulo">
    //       <h2 class="h2--titulo">Contáctenos</h2>
    //     </div>
    //     <div class="footer-contactenos">
    //       <a href="http://logbook.com"><span class="icon-slideshare"> Llámenos al 3144319820</span></a>
    //       <a href="http://logbook.com"><span class="icon-mobile"> www.logbook.com</span></a>
    //       <a href="http://logbook.com"><span class="icon-laptop"> Acerca de Logbook</span></a>
    //     </div>
    //   </section>
    // </footer>
    <footer class="sticky-footer bg-white">
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>Copyright &copy; LogBook 2020</span>
        </div>
    </div>
</footer>
  );
}

export default Footer;

