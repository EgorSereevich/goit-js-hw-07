import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
const itemEl = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item ">
      <a class="gallery__link" href="large-image.jpg" onclick="return false;" >
        <img
          class="gallery__image"
          src= ${item.preview}
          data-source=${item.original}
          alt=${item.description}
        />
      </a>
    </li>`
  )
  .join("");
listEl.insertAdjacentHTML("afterbegin", itemEl);
listEl.addEventListener("click", onClickListEl);
function onClickListEl(evt) {
  if (evt.target.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`<img
          class="gallery__image"
          src= ${evt.target.dataset.source}
          
        />`);
  instance.show();
  const modalEl = document.querySelector(".basicLightbox");

  const esc = document.addEventListener("keydown", onEskKeydown);
  function onEskKeydown(e) {
    if (e.code === `Escape`) {
      modalEl.removeAttribute("class");
    } else {
      return;
    }
  }
}
