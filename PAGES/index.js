const indexApiId = "webYComponentsIndex";
const indexCardsApiId = "cardsMisServicios";

async function main() {
  const indexHeader = document.querySelector(".header-recibe-comp");
  headerComponent(indexHeader);
  const indexFooter = document.querySelector(".footer-recibe-comp");
  footerComponent(indexFooter);
  getIndexContent();
  const indexCards = document.querySelector(".cards-recibe-comp");
  const datosIndexCards = await getIndexCardsContent();
  const dataForIndexCardsContent = getCardsContent(datosIndexCards);
  cardsIndexComponent(indexCards, dataForIndexCardsContent);
  const aboutMeContent = await getIndexAboutMeContent();
  const aboutMeTitle = document.querySelector(".about-me__content-title");
  const aboutMeText = document.querySelector(".about-me__text");
  const aboutMeImage = document.querySelector(".about-me__image");
  aboutMeTitle.textContent = aboutMeContent.title;
  aboutMeText.textContent = aboutMeContent.description;
  aboutMeImage.src = aboutMeContent.image;

  const formularioIndex = document.querySelector(".form");
  formularioIndex.addEventListener("submit", (event) => {
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

main();

function getIndexContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      indexApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      const texto = getText(data);
      const imagenes = getImages(data);
      const indexWelcome = document.querySelector(".welcome-recibe-comp");
      welcomeComponent(indexWelcome, texto, imagenes);
    });
}

function getIndexCardsContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      indexCardsApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function getIndexAboutMeContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=indexAboutMe",
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const dataObj = {
        title: data.includes.Asset[0].fields.title,
        description: data.includes.Asset[0].fields.description,
        image: data.includes.Asset[0].fields.file.url,
      };
      return dataObj;
    });
}
