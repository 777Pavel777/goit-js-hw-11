import { getPhotos } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import error from './img/error.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryListElem = document.querySelector('.gallery-list');
export const inputElem = document.querySelector('input');
const formSearchImg = document.querySelector('form');
export const loaderElem = document.querySelector('.form-container div');

const lightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formSearchImg.addEventListener('submit', handleSearchImg);

function handleSearchImg(event) {
  event.preventDefault();
  galleryListElem.innerHTML = '';
  const query = inputElem.value.trim();

  if (query === '') {
    return;
  }
  loaderElem.classList.add('loader');
  getPhotos(query)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          iconUrl: error,
          messageColor: '#ffffff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          position: 'topRight',
          messageSize: 16,
          layout: 2,
          maxWidth: 380,
          theme: 'dark',
        });
        return;
      }

      createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loaderElem.classList.remove('loader');
    });
  formSearchImg.reset();
}
