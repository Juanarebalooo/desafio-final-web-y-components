const serviciosApiId = "webYComponentsServicios";
const serviciosCardsApiId = "cardsMisServicios";

async function serviciosHeadMain() {
  const serviciosHeader = document.querySelector(".header-recibe-comp");
  headerComponent(serviciosHeader);
  const serviciosFooter = document.querySelector(".footer-recibe-comp");
  footerComponent(serviciosFooter);
  getServiciosContent();
  const serviciosCards = document.querySelector(".cards-recibe-comp");
  const datosServiciosCards = await getServiciosCardsContent();
  const dataForServiciosCardsComponent = getCardsContent(datosServiciosCards);
  cardsComponent(serviciosCards, dataForServiciosCardsComponent);
}

function getServiciosCardsContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      serviciosCardsApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
}

function getServiciosContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      serviciosApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      const texto = getText(data);
      const imagenes = getImages(data);
      const serviciosWelcome = document.querySelector(".welcome-recibe-comp");
      welcomeComponent(serviciosWelcome, texto, imagenes);
    });
}
serviciosHeadMain();
