import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`
    }).join('')
}

createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
    captionDelay: 250
});


console.log(galleryItems);
