function headerComponent(el) {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = ` <header class="header">
        <a href="http://127.0.0.1:8080/index.html" class="header__link-logo">
          <img
            src="./IMG/logo-2.png"
            alt="logo"
            class="header__link-logo-img"
          />
        </a>
        <button class="header__open-button">
          <img
            src="./IMG/burger-img.png"
            alt="burger-button"
            class="header__open-button-img"
          />
        </button>
        <nav class="header__nav">
          <a href="./portfolio.html" class="header__nav-link">Portfolio</a>
          <a href="./servicios.html" class="header__nav-link">Servicios</a>
          <a href="./contacto.html" class="header__nav-link">Contacto</a>
        </nav>
        <div class="header__menu-burger">
          <button class="header__menu-burger-close-button">
            <img
              src="./IMG/close-X-img.png"
              alt="x-button"
              class="header__menu-burger-close-button-img"
            />
          </button>
          <div class="header__menu-burger-content">
            <a href="./portfolio.html" class="header__menu-burger-content-link"
              >Portfolio</a
            ><a href="./servicios.html" class="header__menu-burger-content-link"
              >Servicios</a
            ><a href="./contacto.html" class="header__menu-burger-content-link"
              >Contacto</a
            >
          </div>
        </div>
      </header>`;
  const burgerButtonOpen = headerEl.querySelector(".header__open-button");
  const burgerMenu = headerEl.querySelector(".header__menu-burger");
  const burgerButtonClose = headerEl.querySelector(
    ".header__menu-burger-close-button",
  );
  burgerButtonOpen.addEventListener("click", () => {
    burgerMenu.style.display = "flex";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const boton = document.querySelector(".button");
    if (inputs) {
      inputs.forEach((input) => {
        input.style.display = "none";
      });
    }
    if (textarea) {
      textarea.style.display = "none";
    }
    if (boton) {
      boton.style.display = "none";
    }
  });
  burgerButtonClose.addEventListener("click", () => {
    burgerMenu.style.display = "";
    document.body.style.position = "";
    document.body.style.width = "";
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const boton = document.querySelector(".button");
    if (inputs) {
      inputs.forEach((input) => {
        input.style.display = "";
      });
    }
    if (textarea) {
      textarea.style.display = "";
    }
    if (boton) {
      boton.style.display = "";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (burgerMenu.style.display === "flex") {
        burgerMenu.style.display = "";
        document.body.style.position = "";
        document.body.style.width = "";

        const inputs = document.querySelectorAll("input");
        const textarea = document.querySelector("textarea");
        const boton = document.querySelector(".button");
        inputs.forEach((input) => (input.style.display = ""));
        if (textarea) textarea.style.display = "";
        if (boton) boton.style.display = "";
      }
    }
  });

  el.appendChild(headerEl);
}
