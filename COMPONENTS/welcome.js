function welcomeComponent(el, text, images) {
  const welcomeEl = document.createElement("div");
  welcomeEl.innerHTML = `<div class="welcome">
        <div class="welcome__title">
          <h1 class="welcome__first-title">${text.title}</h1>
          <h1 class="welcome__second-title">${text.secondTitle}</h1>
        </div>
        <div class="welcome__logos">
          <img
            src="${images.logo}"
            alt="welcome-logo"
            class="welcome__logo"
          />
          <img
            src="${images.shadowLogo}"
            alt="welcome-logo-shadow"
            class="welcome__logo-shadow"
          />
        </div>
      </div>`;
  el.appendChild(welcomeEl);
}

function getText(json) {
  const contentTextArray = json.items.map((res) => {
    return {
      title: res.fields.title,
      secondTitle: res.fields.secondtitle,
    };
  });
  return contentTextArray[0];
}

function getImages(json) {
  const contentImages = {
    shadowLogo: null,
    logo: null,
  };
  json.includes.Asset.forEach((res) => {
    const descripcion = res.fields.description;
    console.log("desc: ", descripcion);

    if (descripcion === "logo") {
      contentImages.logo = res.fields.file.url;
    } else if (descripcion === "sombra") {
      contentImages.shadowLogo = res.fields.file.url;
    }
  });
  return contentImages;
}
