import React from 'react';
import '../footer/footer.scss';

export const Footer = () => {
    return (
        <footer class="footer--contenedor__principal">
          <section class="footer--contenedor-logbook">
             <a class="a--footer--titulo" href="#">LOGBOOK</a>
          </section>
          <section class="footer--contenedor__iconos">
            <div class="footer-iconos">
              <a href="#"><span class="icon-facebook-with-circle"></span></a>
              <a href="#"><span class="icon-github-with-circle"></span></a>
              <a href="#"><span class="icon-instagram-with-circle"></span></a>
              <a href="#"><span class="icon-twitter-with-circle"></span></a>
            </div>
          </section>
          <section class="footer--contenedor__contactenos">
            <div class="footer--contactenos__titulo">
              <h2 class="h2--titulo">Contáctenos</h2>
            </div>
            <div class="footer-contactenos">
              <a href="#"><span class="icon-slideshare"> Llámenos al 3144319820</span></a>
              <a href="#"><span class="icon-mobile"> www.logbook.com</span></a>
              <a href="#"><span class="icon-laptop"> Acerca de Logbook</span></a>
            </div>
          </section>
      </footer>
    );

}

export default Footer;