function contactoHeadMain() {
  const contactoHeader = document.querySelector(".header-recibe-comp");
  headerComponent(contactoHeader);

  const contactoFooter = document.querySelector(".footer-recibe-comp");
  footerComponent(contactoFooter);

  const formulario = document.querySelector(".form");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector('[name="nombre"]').value;
    const email = document.querySelector('[name="email"]').value;
    const mensaje = document.querySelector(".textarea").value;

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "juanarebalooo@gmail.com",
        message: `Nombre: ${nombre}\ Email:${email}\ mensaje:${mensaje}`,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("Te has contactado correctamente");
        location.reload();
      }
    });
  });
}

contactoHeadMain();
