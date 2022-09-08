import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(picture => {
        return `<div class='gallery__item'>
        <img src='${picture.preview}' class='gallery__image' alt='Picture'></div>`
    }).join('')
}

createGalleryMarkup(galleryItems);

console.log(galleryItems);
