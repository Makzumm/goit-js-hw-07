import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}

createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click',onGalleryContainerClick)

function onGalleryContainerClick(evt) {
    evt.preventDefault()

    const event = evt.target;
    const click = event.classList.contains
    ('gallery__image');
    const chosenImg = event.dataset.source;

    if (!click) {
        return
    }

    openModalWindow(chosenImg)

}

function openModalWindow(picture) {
    const instance = basicLightbox.create(`
            <img src=${picture}>
        `, {
            onShow: (instance) => {
                window.addEventListener('keydown', escClose)
            },
        
            onClose: (instance) => {
                window.removeEventListener('keydown', escClose)
            }
        }
    );
    
    instance.show()
    
    function escClose(evt) {
        const isEscape = evt.code === 'Escape';

        if (isEscape) {
            instance.close();
        }
    }
}

console.log(galleryItems);
