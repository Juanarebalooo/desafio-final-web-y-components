function cardsComponent(el, data) {
  const cardsEl = document.createElement("div");
  cardsEl.innerHTML = `<div class="cards">
        <div class="cards__content"></div>
        <div class="cards__second-content"></div>
        <button class="cards__button">
          <img
            src="./IMG/arrow-cards-button.png"
            alt=""
            class="cards__button-img"
          />
          <p class="cards__button-text">Ver más</p>
        </button>
      </div>`;
  const cardsContentEl = cardsEl.querySelector(".cards__content");
  const cardsSecondContentEl = cardsEl.querySelector(".cards__second-content");
  data.forEach((res, index) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `<img src="${res.image}" alt="card-img" class="card__img" />
      <h2 class="card__title">${res.title}</h2>
      <p class="card__text">${res.description}</p>`;
    if (index < 3) {
      cardsContentEl.appendChild(cardEl);
    } else {
      cardsSecondContentEl.appendChild(cardEl);
    }
  });
  const cardsButtonOpen = cardsEl.querySelector(".cards__button");
  const cardsButtonImg = cardsEl.querySelector(".cards__button-img");
  const cardButtonText = cardsEl.querySelector(".cards__button-text");
  const cardsHiddenContainer = cardsEl.querySelector(".cards__second-content");
  cardsButtonOpen.addEventListener("click", () => {
    if (cardButtonText.textContent === "Ver más") {
      cardsButtonImg.style.transform = "rotate(180deg)";
      cardButtonText.textContent = "Ver menos";
      cardsHiddenContainer.style.display = "flex";
    } else if (cardButtonText.textContent === "Ver menos") {
      cardsButtonImg.style.transform = "rotate(360deg)";
      cardButtonText.textContent = "Ver más";
      cardsHiddenContainer.style.display = "none";
    }
  });
  el.appendChild(cardsEl);
}

function getCardsContent(json) {
  const cardsData = [];
  json.includes.Asset.forEach((res) => {
    const cardDataObj = {
      title: res.fields.title,
      description: res.fields.description,
      image: res.fields.file.url,
    };
    cardsData.push(cardDataObj);
  });
  return cardsData;
}
