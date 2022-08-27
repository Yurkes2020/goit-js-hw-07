import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </div>`;
};

const createGalleryMarkup = () => {
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
};

createGalleryMarkup();

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
