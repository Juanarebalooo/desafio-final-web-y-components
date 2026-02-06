const portfolioApiId = "webYComponentsPortfolio";
const portfolioCardsApiId = "cardsPortfolio";

async function portfolioHeadMain() {
  const portfolioHeader = document.querySelector(".header-recibe-comp");
  headerComponent(portfolioHeader);
  const portfolioFooter = document.querySelector(".footer-recibe-comp");
  footerComponent(portfolioFooter);
  getPortfolioContent();
  const portfolioCards = document.querySelector(".cards-recibe-comp");
  const datosPortfolioCards = await getPortfolioCardsContent();
  const dataForPortfolioCardsComponent = getCardsContent(datosPortfolioCards);
  cardsComponent(portfolioCards, dataForPortfolioCardsComponent);
}

function getPortfolioCardsContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      portfolioCardsApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      return data;
    });
}

function getPortfolioContent() {
  return fetch(
    "https://cdn.contentful.com/spaces/i7ri6u0x9gg0/environments/master/entries?access_token=EqFzH9UVosUUHiA2xcuxXs92FWmpehEvpfPjOQBQDYY&content_type=" +
      portfolioApiId,
  )
    .then((response) => response.json())
    .then((data) => {
      const texto = getText(data);
      const imagenes = getImages(data);
      const portfolioWelcome = document.querySelector(".welcome-recibe-comp");
      welcomeComponent(portfolioWelcome, texto, imagenes);

      console.log(data);
    });
}

portfolioHeadMain();
