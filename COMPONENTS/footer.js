function footerComponent(el) {
  const footerEl = document.createElement("footer");
  footerEl.innerHTML = ` <footer class="footer">
        <a href="http://127.0.0.1:8080/index.html" class="footer__link-logo">
          <img src="./IMG/logo-2.png" alt="" class="footer__logo" />
        </a>
        <div class="footer__pages">
          <div class="footer__pages-subcont">
            <img
              src="./IMG/home-icon.png"
              alt="home-logo"
              class="footer__pages-logo"
            />
            <a href="http://127.0.0.1:8080/index.html" class="footer__pages-links">Home</a>
          </div>
          <div class="footer__pages-subcont">
            <img
              src="./IMG/servicios-icon.png"
              alt="servicios-icon"
              class="footer__pages-logo"
            />
            <a href="http://127.0.0.1:8080/servicios.html" class="footer__pages-links">Servicios</a>
          </div>
          <div class="footer__pages-subcont">
            <img
              src="./IMG/contactos-icon.png"
              alt="contacto-logo"
              class="footer__pages-logo"
            />
            <a href="http://127.0.0.1:8080/contacto.html" class="footer__pages-links">Contacto</a>
          </div>
        </div>
        <div class="footer__social-media">
          <a href="https://ar.linkedin.com/" class="footer__social-media-link">
            <img
              src="./IMG/linkedin-icon.png"
              alt="linkedin-icon"
              class="footer__social-media-link-img" /></a
          ><a href="https://github.com/" class="footer__social-media-link">
            <img
              src="./IMG/github-icon.png"
              alt="github-icon"
              class="footer__social-media-link-img" /></a
          ><a href="https://x.com/" class="footer__social-media-link">
            <img
              src="./IMG/twitter-icon.png"
              alt="twitter-icon"
              class="footer__social-media-link-img"
            />
          </a>
        </div>
        <p class="footer__copy">©2026 - https://apx.school</p>
      </footer>`;
  el.appendChild(footerEl);
}
