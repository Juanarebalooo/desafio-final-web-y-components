function cardsIndexComponent(el, data) {
  const cardsIndexEl = document.createElement("div");
  cardsIndexEl.innerHTML = `<div class="cards">
        <div class="cards__title">
          <h2 class="cards__title-first-title">Mis</h2>
          <h2 class="cards__title-second-title">servicios</h2>
        </div>
        <div class="cards__content"></div>
      </div>`;

  const cardsContentEl = cardsIndexEl.querySelector(".cards__content");

  data.forEach((res, index) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.innerHTML = `<img src="${res.image}" alt="card-img" class="card__img" />
      <h2 class="card__title">${res.title}</h2>
      <p class="card__text">${res.description}</p>`;
    if (index < 3) {
      cardsContentEl.appendChild(cardEl);
    }
  });

  el.appendChild(cardsIndexEl);
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
