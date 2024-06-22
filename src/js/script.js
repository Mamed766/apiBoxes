const cardsContainer = document.querySelector(".cards__container");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal__background");

function openModal(item) {
  modal.style.top = "0";
  modal.innerHTML = `
      <div class="modal__background"></div>
      <div class="modal__container">
        <div class="modal__container--img">
          <img src="${item.imgSrc}" alt="" />
        </div>
        <div class="modal__container--content">
          <button class="close__btn">Close</button>
        </div>
      </div>
    `;

  const closeButton = modal.querySelector(".close__btn");
  closeButton.addEventListener("click", () => {
    modal.style.top = "-300%";
  });

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__background")) {
      modal.style.top = "-300%";
    }
  });
}

let BaseURL = "http://localhost:3000";

const getApiWithCb = async (endpoint, cb) => {
  let response = await fetch(`${BaseURL}/${endpoint}`).then((res) =>
    res.json()
  );
  cb(response);
};

getApiWithCb("data", (data) => {
  bindCardsData(data);
});

getApiWithCb("data2", (data2) => {
  bindCardsData(data2);
});

getApiWithCb("data3", (data3) => {
  bindCardsData(data3);
});

getApiWithCb("data4", (data4) => {
  bindCardsData(data4);
});

getApiWithCb("data5", (data5) => {
  bindCardsData(data5);
});

getApiWithCb("data6", (data6) => {
  bindCardsData(data6);
});

function bindCardsData(data) {
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("cards__container--card");
    card.innerHTML = `
        <div class="cards__container--card__img">
          <img src="${item.imgSrc}" alt="" />
          <div class="cards__container--card__img--btn">
            <button data-id="${item.id}" class="view__btn">View</button>
          </div>
        </div>
      `;
    cardsContainer.appendChild(card);

    const viewBtn = card.querySelector(".view__btn");
    viewBtn.addEventListener("click", () => {
      openModal(item);
    });
  });
}
