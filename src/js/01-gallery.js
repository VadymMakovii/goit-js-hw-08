// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const picturesBox = document.querySelector('.gallery');
const picturesMarkup = createGalleryItemsMarkup(galleryItems);

picturesBox.insertAdjacentHTML('afterbegin', picturesMarkup);

function createGalleryItemsMarkup(arr) {
    return arr.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join(''); 
};

picturesBox.addEventListener('scroll', (event) => event.preventDefault());

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, scrollZoom: false });