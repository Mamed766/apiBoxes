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
  data.map((item) => {
    console.log(item);
    cardsContainer.innerHTML += `
          <div class="cards__container--card">
        <div class="cards__container--card__img">
          <img
            src="${item.imgSrc}"
            alt=""
          />

          <div class="cards__container--card__img--btn">
            <button class="view__btn">View</button>
          </div>
        </div>
      </div>
        `;

    const viewBtns = document.querySelectorAll(".view__btn");
    viewBtns &&
      viewBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => openModal(data[index]));
      });
  });
});
